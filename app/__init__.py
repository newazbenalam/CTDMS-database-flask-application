import os
from flask import Flask
from flask_login import LoginManager
from flask_bcrypt import Bcrypt
import pymysql
pymysql.install_as_MySQLdb()
from dotenv import load_dotenv
load_dotenv()

from flask_sqlalchemy import SQLAlchemy

# app = Flask(__name__, static_url_path='/static')
app = Flask(__name__) 
app.config['SECRET_KEY'] = os.getenv('SECRET_KEY')
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('SQLALCHEMY_DATABASE_URI')


login_manager = LoginManager(app)
login_manager.login_view = 'login'

@login_manager.user_loader
def load_user(user_id):
    return model.User.query.get(int(user_id))

db = SQLAlchemy(app)
bcrypt = Bcrypt(app)

def create_app(debug=False):
    app.debug = debug
    with app.app_context():
        db.create_all()
    return app

from . import routes, model