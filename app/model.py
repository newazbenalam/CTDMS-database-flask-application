from flask_login import UserMixin
from app import db

# User model
class User(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(20), unique=True, nullable=False)
    email = db.Column(db.String(255), unique=True)
    password = db.Column(db.String(255), nullable=False)

    def __repr__(self):
        return f"User('{self.username}')"
    
    def is_active(self):
        return True