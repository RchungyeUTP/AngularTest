from . import ControllerObject
from datetime import datetime, date
from app import app, db
from app.models.Users import Users


def GetAllUsers():
    users = Users.query.all()
    return ControllerObject(
        payload=[users.as_dict() for users in users], status=200)


def SaveUser(request):
    ret = ControllerObject()
    try:
        user = Users(
            username = request.get("username"),
            password = request.get("password")
        )
        db.session.add(user)
        db.session.commit()
        ret.status = 200
        ret.mensaje= "Se guardaron los datos del user."
    except Exception as err:
        print(err)
        ret.mensaje = "Error al guardar los datos del user."
        ret.status = 400
    return ret


def EditUser(request):
    ret = ControllerObject()
    try:
        user = Users.query.filter(Users.id == request.get("id")).first()
        user.username = request.get("username"),
        user.password = request.get("password")
        db.session.add(user)
        db.session.commit()
        ret.status = 200
        ret.mensaje= "Se editaron los datos del user."
    except Exception as err:
        print(err)
        ret.mensaje = "Error al editar los datos del user."
        ret.status = 400
    return ret


def DeleteUser(id_users):
    ret = ControllerObject()
    try:
        Users.query.filter(Users.id == id_users).delete()
        db.session.commit()
        ret.status = 200
        ret.mensaje= "Se elimino el user."
    except Exception as err:
        print(err)
        ret.mensaje = "Error al eliminar el user."
        ret.status = 400
    return ret
