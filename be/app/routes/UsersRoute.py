from app import app
import json
from flask import jsonify, request
from app.controllers import (
    UsersController as Users,
)


@app.route("/users/all", methods=["GET"])
def GetAllUsers():
    result = Users.GetAllUsers()
    return result.jsonify()


@app.route("/users/save", methods=["POST"])
def SaveUsers():
    result = Users.SaveUser(request.json)
    return result.jsonify()


@app.route("/users/edit", methods=["POST"])
def EditUsers():
    result = Users.EditUser(request.json)
    return result.jsonify()


@app.route("/users/delete/<id>", methods=["DELETE"])
def DeteleUsers(id):
    result = Users.DeleteUser(id)
    return result.jsonify()