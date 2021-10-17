
from flask import Flask
from config import config
from flask_sqlalchemy import SQLAlchemy
import os
from .api import ssn
from app.models import db
app = Flask(__name__)
conf = os.getenv("FLASK_CONFIG","dev")
app.config.from_object(config[conf])
db.init_app(app)

with app.app_context():
    db.create_all()

app.register_blueprint(ssn)