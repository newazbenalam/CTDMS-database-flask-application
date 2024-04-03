from app import app, db, bcrypt
import uuid
from flask import jsonify, render_template, redirect, request, flash, session
from app.model import User

# Define routes that don't require login
allowed_routes = ['login', 'register', 'home']

@app.before_request
def check_signed_in():
    # print('user_id' in session)
    if not session.get('user_id') and request.endpoint not in allowed_routes:
        return redirect('/')

@app.route('/')
def home():
    if 'user_id' in session:
        return redirect('/dashboard')
    return render_template('home.html')

@app.route('/register', methods=['GET', 'POST'])
def register():
    if 'user_id' in session:
        return redirect('/dashboard')
    if request.method == 'POST':
        username = request.form['username']
        email = request.form['email']
        password = request.form['password']

        # Hash the password
        hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')

        # Create a new user
        new_user = User(username=username,email=email,  password=hashed_password)
        db.session.add(new_user)
        db.session.commit()

        flash('Registration successful! You can now log in.', 'success')
        return redirect('/login')

    return render_template('register.html')

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
            # Store the user ID in the session
            session['user_id'] = user.id
            session['token'] = uuid.uuid4()
            flash('Login successful!', 'success')
            return redirect('/dashboard')
        else:
            flash('Invalid username or password', 'danger')

    return render_template('login.html')

@app.route('/dashboard')
def dashboard():
    session.get('user_id')
    return render_template('dashboard.html')

@app.route('/logout')
def logout():
    # Clear the session
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