import os
from dotenv import load_dotenv
from . import app
scpath = os.path.dirname(os.path.abspath(__file__))
fdb = "sqlite:///{}".format(os.path.join(scpath, "studyco.db"))

class BaseConfig(object):
    app.config["SQLALCHEMY_DATABASE_URI"] = fdb
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = True