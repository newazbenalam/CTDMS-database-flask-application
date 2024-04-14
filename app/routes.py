import os

from sqlalchemy import or_
from app import app, db, bcrypt
import uuid
from flask import jsonify, render_template, redirect, request, flash, send_from_directory, session, url_for
from flask_login import LoginManager, current_user, login_required, login_user, logout_user
from app.model import Role, User

# Define routes that don't require login
allowed_routes = ['login', 'register', 'home', 'assets', 'static']

@app.route('/assets/<path:filename>')
@app.route('/static/<path:filename>')
def serve_assets(filename):
    return send_from_directory(os.path.join(app.root_path, 'static'), filename)

@app.before_request
def check_signed_in():
    print('user_id' in session)
    if session.get('user_id') and (request.endpoint == 'login' or  request.endpoint == 'register' ):
        return redirect('/dashboard')
    

@app.route('/')
def home():
    if 'user_id' in session:
        return redirect('/dashboard')
    return render_template('home.html')

@app.route('/employee')
def employee():
    if 'user_id' in session:
        return render_template('employee.html')
    
@app.route('/tables')
def tables():
    if 'user_id' in session:
        return render_template('tables.html')
    
@app.route('/billing')
def billing():
    if 'user_id' in session:
        return render_template('billing.html')
    
@app.route('/profile')
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

@app.route('/dashboard')
@login_required
def dashboard():
    session.get('user_id')
    return render_template('dashboard.html')

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

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)