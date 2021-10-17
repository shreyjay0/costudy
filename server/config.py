import os
from dotenv import load_dotenv
scpath = os.path.dirname(os.path.abspath(__file__))
fdb = "sqlite:///{}".format(os.path.join(scpath, "studyco.db"))

class BaseConfig:
    DEBUG = False
    SQLALCHEMY_DATABASE_URI = "sqlite:///"
    SQLALCHEMY_TRACK_MODIFICATIONS = True
class DevConf(BaseConfig):
    DEBUG:True
    SQLALCHEMY_DATABASE_URI = fdb

config ={"dev":"config.DevConf"}