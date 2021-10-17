from flask_sqlalchemy import SQLAlchemy
db = SQLAlchemy()
import datetime

class Sessions(db.Model):
    __tablename__ = "ssn"
    id = db.Column(db.Integer, primary_key=True)
    goals = db.Column(db.String(60), nullable=False)
    reached = db.Column(db.Boolean, nullable=False, default=False)
    added = db.Column(db.DateTime, nullable=False, index=False)
    def __init__(self, goals, reached):
        self.goals = goals
        self.reached = reached
        self.added = datetime.datetime.now()

    def __repr__(self):
        return f"<Goals: {self.goals}>"
