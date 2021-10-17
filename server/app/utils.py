from flask import jsonify


def send_resp(status, msg, data=None):
    if data:
        return jsonify({"code": status, "message": msg, "data": data}), status
    else:
        return jsonify({"code": status, "message": msg}), status

def send_serialise(ssn_out):
     return jsonify([
    {'id': goal.id, 'goals': goal.goals, 'reached': goal.reached, "added":goal.added}
    for goal in ssn_out])