from app import app
import json
from flask import jsonify, request
from app.controllers import (
    GroceriesController as Groceries,
)


@app.route("/groceries/all", methods=["GET"])
def GetAllGroceries():
    result = Groceries.GetAllGroceries()
    return result.jsonify()


@app.route("/groceries/<id>", methods=["GET"])
def GetGroceriesById(id_grocery):
    result = Groceries.GetGroceriesById(id_grocery)
    return result.jsonify()


@app.route("/groceries/save", methods=["POST"])
def SaveGroceries():
    result = Groceries.SaveGroceries(request.json)
    return result.jsonify()


@app.route("/groceries/edit", methods=["POST"])
def EditGroceries():
    result = Groceries.EditGroceries(request.json)
    return result.jsonify()


@app.route("/groceries/delete/<id>", methods=["DELETE"])
def DeteleGroceries(id_grocery):
    result = Groceries.DeleteGroceries(id_grocery)
    return result.jsonify()

