from datetime import datetime
from flask_login import UserMixin
from app import db

class User(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(20), unique=True, nullable=False)
    email = db.Column(db.String(255), unique=True)
    password = db.Column(db.String(255), nullable=False)
    role_id = db.Column(db.Integer, db.ForeignKey('role.role_id'), default=1)
    role = db.relationship('Role', backref=db.backref('users', lazy=True))
    
    def __repr__(self):
        return f"User('{self.username}')"

    def is_active(self):
        return True

    
class Drug(db.Model):
    drug_id = db.Column(db.String(10), primary_key=True)
    name = db.Column(db.String(255), nullable=False)

class DrugAdmission(db.Model):
    drug_admission_id = db.Column(db.String(10), primary_key=True)
    drug_type = db.Column(db.String(50))
    date_of_administration = db.Column(db.Date)
    participant_id = db.Column(db.Integer, db.ForeignKey('person.person_id'))
    study_id = db.Column(db.String(10), db.ForeignKey('study.study_id'))
    drug_admin_id = db.Column(db.String(10), db.ForeignKey('employee.employee_id'))

class Employee(db.Model):
    employee_id = db.Column(db.String(10), primary_key=True)
    name = db.Column(db.String(255))
    address = db.Column(db.String(255))
    nid = db.Column(db.String(15))
    role = db.Column(db.String(100))
    address_1 = db.Column(db.String(255))
    address_2 = db.Column(db.String(255))
    city = db.Column(db.String(255))
    state = db.Column(db.String(2))
    zip = db.Column(db.String(10))
    county = db.Column(db.String(255))
    # location_id = db.Column(db.Integer, db.ForeignKey('location.location_id'),  nullable=True)

# class Location(db.Model):
#     location_id = db.Column(db.Integer, primary_key=True)
#     address_1 = db.Column(db.String(255))
#     address_2 = db.Column(db.String(255))
#     city = db.Column(db.String(255))
#     state = db.Column(db.String(2))
#     zip = db.Column(db.String(10))
#     county = db.Column(db.String(255))
#     persons = db.relationship('Person', backref='location', lazy=True)


class Person(db.Model):
    person_id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False)
    gender = db.Column(db.String(6))
    age = db.Column(db.Integer, nullable=False)
    address = db.Column(db.String(255))
    city = db.Column(db.String(20))
    email = db.Column(db.String(255))
    birth_datetime = db.Column(db.DateTime)
    race = db.Column(db.String(11), nullable=True)
    ethnicity = db.Column(db.Integer, nullable=True)
    address_1 = db.Column(db.String(255))
    address_2 = db.Column(db.String(255))
    city = db.Column(db.String(255))
    state = db.Column(db.String(2))
    zip = db.Column(db.String(10))
    county = db.Column(db.String(255))

    # Add a one-to-one relationship with User
    user = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=True)

    def __repr__(self):
        return f"Person('{self.name}')"

class Phase(db.Model):
    phase_id = db.Column(db.String(10), primary_key=True, autoincrement=True)
    created_at = db.Column(db.DateTime, default=datetime.now)
    drug_dosage = db.Column(db.String(50))
    frequency = db.Column(db.String(50))
    description = db.Column(db.String(255))
    study_id = db.Column(db.String(10), db.ForeignKey('study.study_id'), nullable=True) 
    exist_drug_id = db.Column(db.String(10), db.ForeignKey('drug.drug_id'))

class Result(db.Model):
    result_id = db.Column(db.String(10), primary_key=True)
    result = db.Column(db.String(255))
    date_of_test = db.Column(db.DateTime)
    participant_id = db.Column(db.Integer, db.ForeignKey('person.person_id'))
    test_id = db.Column(db.String(10), db.ForeignKey('test.test_id'))
    invigilator_id = db.Column(db.String(10), db.ForeignKey('employee.employee_id'))

class Study(db.Model):
    study_id = db.Column(db.String(10), primary_key=True)
    name = db.Column(db.String(255), nullable=False)
    type = db.Column(db.String(50))
    criteria = db.Column(db.String(300))
    drug_of_interest_id = db.Column(db.String(10), db.ForeignKey('drug.drug_id'))

class StudyEmployee(db.Model):
    study_employee_id = db.Column(db.String(15), primary_key=True)
    study_id = db.Column(db.String(10), db.ForeignKey('study.study_id'), nullable=True)  # Adjusted to nullable
    employee_id = db.Column(db.String(10), db.ForeignKey('employee.employee_id'))

class Test(db.Model):
    test_id = db.Column(db.String(10), primary_key=True)
    name = db.Column(db.String(255), nullable=False)
    threshold = db.Column(db.String(50))
    
class Role(db.Model):
    role_id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    description = db.Column(db.String(255))

    def __repr__(self):
        return f"Role('{self.name}', '{self.description}')"
