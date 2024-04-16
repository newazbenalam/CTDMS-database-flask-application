import os
from flask import Flask, redirect, url_for
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

from . import routes, model