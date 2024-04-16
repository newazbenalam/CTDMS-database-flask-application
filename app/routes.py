from datetime import datetime
from functools import wraps
import os

from sqlalchemy import func, or_
from app import app, db, bcrypt
import uuid
from flask import jsonify, render_template, redirect, request, flash, send_from_directory, session, url_for
from flask_login import LoginManager, current_user, login_required, login_user, logout_user
from app.model import Drug, Employee, Person, Phase, Role, Test, User

# Define routes that don't require login
allowed_routes = ['login', 'register', 'home', 'assets', 'static']

@app.route('/assets/<path:filename>')
@app.route('/static/<path:filename>')
def serve_assets(filename):
    return send_from_directory(os.path.join(app.root_path, 'static'), filename)

def check_signed_in(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        if any(endpoint.startswith(route) for route in allowed_routes for endpoint in [request.endpoint, request.endpoint.split('.')[0]]):
            return f(*args, **kwargs)
        
        if 'user_id' not in session:
            return redirect('/login')
        
        return f(*args, **kwargs)
    return decorated_function

@app.route('/')
def home():
    if 'user_id' in session:
        return redirect('/dashboard')
    return render_template('home.html')

@app.route('/employee')
@check_signed_in
def employee():
    if request.method == 'POST':
        flash('Data created, successfully!', 'success'),
        return redirect(url_for('dashboard')) 
    employees = Employee.query.all()

    return render_template('employee.html', persons=employees)

@app.route('/addemployee', methods=['GET','POST'])
@check_signed_in
def addemployee():
    if request.method == 'POST':
        name = request.form['name']
        gender = request.form['gender']
        address = request.form['address']
        nid = request.form['nid']
        role = request.form['role']
        city = request.form['city']
        state = request.form['state']
        zip_code = request.form['zip']
        county = request.form['county']

        new_employee = Employee(
            employee_id = str(uuid.uuid4()),
            name=name,
            gender=gender,
            address=address,
            nid=nid,
            role=role,
            city=city,
            state=state,
            zip=zip_code,
            county=county,
            enrolled_at=datetime.now()
        )

        db.session.add(new_employee)
        db.session.commit()
        flash('Created successful!', 'success')
        return render_template('addemployee.html')
    return render_template('addemployee.html', roles=Role.query.all())

        
@app.route('/drugs')
@check_signed_in
def drugs():
    drugs = Drug.query.all()
    return render_template('drugs.html', drugs=drugs)

    
@app.route('/tables')
def tables():
    if 'user_id' in session:
        return render_template('tables.html')
    
@app.route('/billing')
def billing():
    if 'user_id' in session:
        return render_template('billing.html')
    
@app.route('/profile')
@check_signed_in
def profile():
    if 'user_id' in session:
        return render_template('billing.html')

@app.route('/register', methods=['GET', 'POST'])
def register():
    if 'user_id' in session:
        return redirect('/dashboard')
    if request.method == 'POST':
        username = request.form['username']
        email = request.form['email']
        password = request.form['password']
        role = request.form['role']

        # Hash the password
        hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')

        # Create a new user
        new_user = User(username=username,email=email, password=hashed_password, role=role)
        db.session.add(new_user)
        db.session.commit()

        flash('Registration successful! You can now log in.', 'success')
        return redirect('/login')
    
    roles = Role.query.all()
    return render_template('register.html', roles=roles)

@app.route('/signup', methods=['GET', 'POST'])
def signup():
    roles = Role.query.all()
    if 'user_id' in session:
        return redirect('/dashboard')
    if request.method == 'POST':
        username = request.form['username']
        email = request.form['email']
        password = request.form['password']
        role = request.form['role']

        print(username + " " + email + " " +password + " " + role)

        # Fetch the Role object based on the role_id
        role = Role.query.get(role)
        if role is None:
            flash('Role does not exist', 'error')
            return render_template('signup.html', roles=roles), 400
        
        user = User.query.filter(or_(User.username == username, User.email == email)).first()
        if user:
            flash('User already exists!', 'error')
            return render_template('signup.html', roles=roles), 400
        
        # Hash the password
        hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')

        # # Create a new user
        new_user = User(username=username, email=email, password=hashed_password, role=role)
        db.session.add(new_user)
        # db.session.commit()
        
        # Commit changes to the database
        try:
            db.session.commit()
            flash('User registered successfully!', 'success')
            return redirect(url_for('login'))
        except Exception as e:
            db.session.rollback()
            flash('Failed to register user. Please try again.', 'error')
            return render_template('signup.html', roles=Role.query.all()), 500

        # flash('Registration successful! You can now log in.', 'success')
        # return redirect('/login')
    return render_template('signup.html', roles=roles)


@app.route('/dashboard')
@check_signed_in
def dashboard():
    data = {
        'participants': 0,
        'employees': 0
    }
    user_id = session.get('user_id')
    if user_id:
        data['participants'] = Person.query.count()
        data['drug'] = Drug.query.count()
        data['employees'] = Employee.query.count()
        data['test'] = Test.query.count()
        data['countries'] = db.session.query(Person.city, func.count(Person.person_id)).group_by(Person.city).all()
        data['phases_c'] = Phase.query.count()
        data['phases'] = db.session.query(
                            func.extract('year', Phase.created_at).label('year'),
                            func.extract('month', Phase.created_at).label('month'),
                            func.count(Phase.phase_id).label('phase_count')
                        ).group_by('year', 'month').all()

        month_names = {
            1: 'Jan',2: 'Feb', 3: 'Mar', 4: 'Apr',
            5: 'May', 6: 'Jun', 7: 'Jul', 8: 'Aug',
            9: 'Sep', 10: 'Oct', 11: 'Nov', 12: 'Dec'
        }
        phase_counts = []
        for year, month, count in data['phases']:
            month_name = month_names.get(month, 'Unknown')
            print(f"Year: {year}, Month: {month_name}, Phase Count: {count}")
            phase_counts.append({'year': year, 'month': month_name, 'count': count})
        
        # for year, month, count in data['phases']:
        #     print(f"Year: {year}, Month: {month}, Phase Count: {count}")
    # print("SQL Query:", str(data['countries']))
    # for city, count in data['countries']:
    #     print(f"City: {city}, Count: {count}")
    return render_template('dashboard.html', data=data, phase_counts=phase_counts)


@app.route('/login', methods=['GET', 'POST'])
def login():
    if 'user_id' in session:
        return redirect('/dashboard')
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']

        # Retrieve the user from the database
        user = User.query.filter_by(username=username).first()
        if user is None:
            user = User.query.filter_by(email=username).first()

        if user and bcrypt.check_password_hash(user.password, password):
            login_user(user=user, remember=True)
            # Store the user ID in the session
            session['user_id'] = user.id
            session['token'] = uuid.uuid4()
            flash('Login successful!', 'success')
            return redirect('/dashboard')
        else:
            flash('Invalid username or password', 'danger')

    return render_template('login.html')


@app.route('/addparticipant', methods=['GET', 'POST'])
@check_signed_in
def addparticipant():
    if request.method == 'POST':
        today = datetime.now()
        # Extract location data from form
        address_1 = request.form['address_1']
        address_2 = request.form['address_2']
        city = request.form['city']
        state = request.form['state']
        zip_code = request.form['zip']
        county = request.form['county']

        # Extract person data from form
        name = request.form['name']
        gender = request.form['gender']
        # age = int(request.form['age'])
        email = request.form['email']
        race = request.form['race']
        ethnicity = request.form['ethnicity']
        dob = datetime.strptime(request.form['dob'], '%Y-%m-%d')
        age = today.year - dob.year - ((today.month, today.day) < (dob.month, dob.day))

        # Create location object
        # location = Location(address_1=address_1, address_2=address_2, city=city, state=state, zip=zip_code, county=county)
        
        # Create person object
        person = Person(name=name, gender=gender, age=age, email=email, birth_datetime=dob, address_1=address_1, address_2=address_2, city=city, state=state, zip=zip_code, county=county, race=race, ethnicity=ethnicity)

        # Add objects to session and commit to database
        # db.session.add(location)
        db.session.add(person)
        db.session.commit()

        flash('Data created, successfully!', 'success'),
        return redirect(url_for('addparticipant')) 
    return render_template('addparticipant.html')

@app.route('/participants', methods=['GET', 'POST'])
@check_signed_in
def participants():
    if request.method == 'POST':
        flash('Data created, successfully!', 'success'),
        return redirect(url_for('addparticipant')) 
    persons = Person.query.all()
    return render_template('participants.html', persons=persons)

@app.route('/logout')
def logout():
    # Clear the session
    logout_user()
    session.clear()
    flash('You have been logged out.', 'success')
    return redirect('/login')

# Route to display all users
@app.route('/users')
def users():
    if 'user_id' not in session:
        return redirect('/dashboard')
    all_users = User.query.all()
    return render_template('users.html', users=all_users)

@app.route('/response')
def response():
    return jsonify(session)

# if __name__ == '__main__':
#     with app.app_context():
#         db.create_all()
#     app.run(debug=True)