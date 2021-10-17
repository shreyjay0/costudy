from ..app import db

class Sessions(db.Model):
    __tablename__ = "study-co"
    goal_id = db.Column(db.Integer, primary_key=True)
    goals = db.Column(db.String(60), nullable=False)
    reached = db.Column(db.Boolean, nullable=False, default=False)
    added = db.Column(db.DateTime, nullable=False, index=False)

    def __repr__(self):
        return "<Goals: {}>".format(self.goals)
