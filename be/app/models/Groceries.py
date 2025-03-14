from app import db

class Groceries(db.Model):
    __tablename__ = "groceries"
    id_groceries = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    price = db.Column(db.Float, nullable=False)
    description = db.Column(db.Text, nullable=False)
    photo = db.Column(db.String(255), nullable=False)

    def as_dict(self):
        return {
            "id_groceries": self.id_groceries,
            "name": self.name,
            "price": self.price,
            "description": self.description,
            "photo": self.photo
        }
