from flask import Flask
from .app.api import ssn
from .app.models import db
from config import BaseConfig
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config.from_object(BaseConfig)

db = SQLAlchemy(app)

with app.app_context():
    db.create_all()

app.register_blueprint(ssn)
