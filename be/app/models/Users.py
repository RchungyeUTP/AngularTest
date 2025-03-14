from app import db

class Users(db.Model):
    __tablename__ = "users"
    id_user = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(100), nullable=False, unique=True)
    password = db.Column(db.String(255), nullable=False)

    def as_dict(self):
        return {
            "id_user": self.id_user,
            "username": self.username,
            "password": self.password
        }