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


@app.route("/users/<id_user>", methods=["GET"])
def GetUsersById(id_user):
    result = Users.GetUsersById(id_user)
    return result.jsonify()


@app.route("/users/login", methods=["POST"])
def LoginUsers():
    result = Users.LoginUser(request.json)
    return result.jsonify()


@app.route("/users/save", methods=["POST"])
def SaveUsers():
    result = Users.SaveUser(request.json)
    return result.jsonify()


@app.route("/users/edit", methods=["POST"])
def EditUsers():
    result = Users.EditUser(request.json)
    return result.jsonify()


@app.route("/users/delete/<id_user>", methods=["DELETE"])
def DeteleUsers(id_user):
    result = Users.DeleteUser(id_user)
    return result.jsonify()

