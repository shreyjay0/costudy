
from flask import Flask, redirect,request, jsonify, Blueprint
from models import db , Sessions
from utils import send_resp

ssn = Blueprint("ssn", __name__)

@ssn.route('/', methods=["GET"])
def all_goals():
    return jsonify(Sessions.query.all())

@ssn.route('/addgoals', methods=["GET", "POST"])
def add():
    req = request.get_json() 
    if not req:
        return send_resp(400, "Invalid request")
    nsession = Sessions(req.get("goal"))
    db.session.add(nsession)
    db.session.commit()
    return send_resp(201,"Goal added",Sessions.query.all())

@ssn.route("/update/<int:id>", methods=["PUT"])
def update(id):
    nsession = Sessions.query.filter_by(goal_id=id).first()
    if not nsession: 
        return send_resp(404, "This goal does not exist")
    req = request.get_json()
    if not req:
        return send_resp(400, "Invalid request")

    nsession.reached = req.get("complete")
    db.session.commit()
    updated_nsession = Sessions.query.filter_by(goal_id=id).first()
    if not updated_nsession:
        return send_resp(402, "Something went wrong")
    return send_resp(200,"Update successful",updated_nsession)

@ssn.route("/delete/<int:id>", methods=["POST"])
def delete(id):
    nsession = Sessions.query.filter_by(goal_id=id).first()
    if not nsession:
        return send_resp(400, "Invalid request")
    db.session.delete(nsession)
    db.session.commit()
    return send_resp(202, "Goal deleted successfully")



