from flask import jsonify

def send_resp(status, msg, data):
    if data:
        return jsonify({"code": status, "message": msg, "data": data})
    else:
        return jsonify({"code": status, "message": msg}), status