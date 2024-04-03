import os
from app import app, db
from dotenv import load_dotenv
load_dotenv()
  
if __name__ == '__main__':
    print(app.config['SQLALCHEMY_DATABASE_URI'])
    with app.app_context():
      db.create_all()
    app.run(port=os.getenv('PORT'),  host=os.getenv('HOST'), debug=os.getenv('DEBUG'))