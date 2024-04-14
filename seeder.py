import random
from faker import Faker
from app import app, db
from app.model import Role, User, Drug, DrugAdmission, Employee, Location, Person, Phase, Result, Study, StudyEmployee, Test

fake = Faker()

def seed_roles():
    roles = [
        {'name': 'Admin', 'description': 'Administrator role'},
        {'name': 'Doctor', 'description': 'Doctor role'},
        {'name': 'Nurse', 'description': 'Nurse role'},
        {'name': 'Pharmacist', 'description': 'Pharmacist role'}
    ]
    for role_data in roles:
        role = Role(**role_data)
        db.session.add(role)
    db.session.commit()

def seed_users():
    for _ in range(10):
        user = User(
            username=fake.user_name(),
            email=fake.email(),
            password=fake.password(),
            role_id=random.randint(1, 4)
        )
        db.session.add(user)
    db.session.commit()

def seed_drugs():
    drugs = [
        {'drug_id': 'D001', 'name': 'Aspirin'},
        {'drug_id': 'D002', 'name': 'Paracetamol'},
        {'drug_id': 'D003', 'name': 'Ibuprofen'}
    ]
    for drug_data in drugs:
        existing_drug = Drug.query.filter_by(drug_id=drug_data['drug_id']).first()
        if not existing_drug:
            drug = Drug(**drug_data)
            db.session.add(drug)
    db.session.commit()


def seed_employees():
    for _ in range(10):
        employee = Employee(
            employee_id=fake.uuid4(),
            name=fake.name(),
            address=fake.address(),
            nid=fake.numerify(text='##########'),
            role=fake.random_element(elements=('Doctor', 'Nurse', 'Pharmacist')),
            location_id=random.randint(1, 10)  # Assuming there are 10 locations
        )
        db.session.add(employee)
    db.session.commit()

def seed_locations():
    for _ in range(10):
        location = Location(
            address_1=fake.street_address(),
            address_2=fake.secondary_address(),
            city=fake.city(),
            state=fake.state_abbr(),
            zip=fake.zipcode(),
            county=fake.county()
        )
        db.session.add(location)
    db.session.commit()

def seed_people():
    for _ in range(10):
        person = Person(
            name=fake.name(),
            gender=fake.random_element(elements=('Male', 'Female')),
            age=random.randint(18, 90),
            address=fake.address(),
            city=fake.city(),
            email=fake.email(),
            year_of_birth=random.randint(1950, 2005),
            month_of_birth=random.randint(1, 12),
            day_of_birth=random.randint(1, 28),  # Assuming all months have up to 28 days
            race_id=fake.random_element(elements=('R001', 'R002', 'R003')),
            ethnicity_id=random.randint(1, 5),  # Assuming there are 5 ethnicities
            location_id=random.randint(1, 10),  # Assuming there are 10 locations
            care_site_id=None  # Assuming care site is not mandatory
        )
        db.session.add(person)
    db.session.commit()

def seed_phases():
    for _ in range(10):
        phase = Phase(
            phase_id=fake.uuid4(),
            phase_number=fake.random_element(elements=('Phase 1', 'Phase 2', 'Phase 3')),
            drug_dosage=fake.random_element(elements=('Low', 'Medium', 'High')),
            frequency=fake.random_element(elements=('Daily', 'Weekly', 'Monthly')),
            study_id=fake.uuid4(),  # Assuming study_id is a UUID
            exist_drug_id=fake.random_element(elements=('D001', 'D002', 'D003'))
        )
        db.session.add(phase)
    db.session.commit()

def seed_results():
    for _ in range(10):
        result = Result(
            result_id=fake.uuid4(),
            result=fake.random_element(elements=('Positive', 'Negative')),
            date_of_test=fake.date_time_between(start_date='-1y', end_date='now'),
            participant_id=random.randint(1, 10),  # Assuming there are 10 participants
            test_id=fake.uuid4(),  # Assuming test_id is a UUID
            invigilator_id=fake.uuid4()  # Assuming invigilator_id is a UUID
        )
        db.session.add(result)
    db.session.commit()

def seed_studies():
    for _ in range(10):
        study = Study(
            study_id=fake.uuid4(),
            name=fake.company(),
            type=fake.random_element(elements=('RCT', 'Observational', 'Experimental')),
            criteria=fake.sentence(),
            drug_of_interest_id=fake.random_element(elements=('D001', 'D002', 'D003'))
        )
        db.session.add(study)
    db.session.commit()

def seed_study_employees():
    for _ in range(10):
        study_employee = StudyEmployee(
            study_employee_id=fake.uuid4(),
            study_id=fake.uuid4(),  # Assuming study_id is a UUID
            employee_id=fake.uuid4()  # Assuming employee_id is a UUID
        )
        db.session.add(study_employee)
    db.session.commit()

def seed_tests():
    for _ in range(10):
        test = Test(
            test_id=fake.uuid4(),
            name=fake.word(),
            threshold=fake.random_element(elements=('Low', 'Medium', 'High'))
        )
        db.session.add(test)
    db.session.commit()

def seed_all():
    seed_roles()
    seed_users()
    seed_drugs()
    seed_employees()
    seed_locations()
    seed_people()
    seed_phases()
    seed_results()
    seed_studies()
    seed_study_employees()
    seed_tests()

if __name__ == '__main__':
    with app.app_context():
        seed_all()
