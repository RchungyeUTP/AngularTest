from . import ControllerObject
from datetime import datetime, date
from app import app, db
from app.models.Groceries import Groceries


def GetAllGroceries():
    groceries = Groceries.query.all()
    return ControllerObject(
        payload=[groceries.as_dict() for groceries in groceries], status=200)


def GetGroceriesById(id_grocery):
    grocery = Groceries.query.get(id_grocery)
    return ControllerObject(payload=grocery.as_dict() if grocery else None, status=200 if grocery else 404)


def SaveGroceries(request):
    ret = ControllerObject()
    try:
        grocery = Groceries(
            name = request.get("name"),
            price = request.get("solicitud_estado"),
            description = request.get("description"),
            photo = request.get("photo")
        )
        db.session.add(grocery)
        db.session.commit()
        ret.status = 200
        ret.mensaje= "Se guardaron los datos del grocery."
    except Exception as err:
        print(err)
        ret.mensaje = "Error al guardar los datos del grocery."
        ret.status = 400
    return ret


def EditGroceries(request):
    ret = ControllerObject()
    try:
        grocery = Groceries.query.filter(Groceries.id == request.get("id")).first()
        grocery.name = request.get("name"),
        grocery.price = request.get("solicitud_estado"),
        grocery.description = request.get("description"),
        grocery.photo = request.get("photo")
        db.session.add(grocery)
        db.session.commit()
        ret.status = 200
        ret.mensaje= "Se editaron los datos del grocery."
    except Exception as err:
        print(err)
        ret.mensaje = "Error al editar los datos del grocery."
        ret.status = 400
    return ret


def DeleteGroceries(id_groceries):
    ret = ControllerObject()
    try:
        Groceries.query.filter(Groceries.id == id_groceries).delete()
        db.session.commit()
        ret.status = 200
        ret.mensaje= "Se elimino el grocery."
    except Exception as err:
        print(err)
        ret.mensaje = "Error al eliminar el grocery."
        ret.status = 400
    return ret
