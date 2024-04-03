import os
from app import app, db
from dotenv import load_dotenv
load_dotenv()
from flask_migrate import Migrate

migrate = Migrate(app, db)

  
if __name__ == '__main__':
    with app.app_context():
      print(app.config['SQLALCHEMY_DATABASE_URI'])
      db.create_all()
      migrate.init_app(app, db)
    app.run(port=os.getenv('PORT'),  host=os.getenv('HOST'), debug=os.getenv('DEBUG'))