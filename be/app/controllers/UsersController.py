from . import ControllerObject
from datetime import datetime, date
from app import app, db
from app.models.Users import Users


def GetAllUsers():
    users = Users.query.all()
    return ControllerObject(
        payload=[users.as_dict() for users in users], status=200)


def GetUsersById(id_user):
    user = Users.query.filter(Users.id_user == id_user).first()
    query = user.as_dict() if user else None
    return ControllerObject(payload=query, status=200)


def LoginUser(request):
    ret = ControllerObject()
    try:
        username = request.get("username")
        password = request.get("password")
        user = Users.query.filter_by(username=username, password=password).first()
        if user:
            ret.status = 200
            ret.mensaje = "Inicio de sesión exitoso."
            ret.payload = {"id_user": user.id_user, "username": user.username}
        else:
            ret.status = 401
            ret.mensaje = "Usuario o contraseña incorrectos."
    except Exception as err:
        print(err)
        ret.status = 500
        ret.mensaje = "Error al procesar el inicio de sesión."
    return ret


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
        user = Users.query.filter(Users.id_user == request.get("id_user")).first()
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


def DeleteUser(id_user):
    ret = ControllerObject()
    try:
        Users.query.filter(Users.id_user == id_user).delete()
        db.session.commit()
        ret.status = 200
        ret.mensaje= "Se elimino el user."
    except Exception as err:
        print(err)
        ret.mensaje = "Error al eliminar el user."
        ret.status = 400
    return ret
