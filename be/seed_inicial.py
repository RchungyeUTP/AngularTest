from app import app, db
from app.models.Users import Users
from app.models.Groceries import Groceries


def seed_database():
    with app.app_context():  # 🔥 Crear contexto antes de acceder a la DB
        # Datos iniciales para groceries
        groceries_data = [
            {"name": "Tocino", "price": 12.99, "description": "Tocino fresco, ideal para freír o asar.", "photo": "https://superxtrapanama.vtexassets.com/arquivos/ids/172083-800-auto?v=638136643663070000&width=800&height=auto&aspect=true"},
            {"name": "Arroz", "price": 3.99, "description": "Arroz de grano largo, 1 kg.", "photo": "https://superxtrapanama.vtexassets.com/arquivos/ids/157907-800-auto?v=637806384446230000&width=800&height=auto&aspect=true"},
            {"name": "Tomates Frescos", "price": 2.75, "description": "Tomates frescos y jugosos, 500 g.", "photo": "https://superxtrapanama.vtexassets.com/arquivos/ids/182456-800-auto?v=638261431221330000&width=800&height=auto&aspect=true"},
            {"name": "Aceite de Oliva Extra Virgen", "price": 8.99, "description": "Aceite de oliva extra virgen, 500 ml.", "photo": "https://superxtrapanama.vtexassets.com/arquivos/ids/166302-800-auto?v=638012026246370000&width=800&height=auto&aspect=true"},
            {"name": "Pechuga de Pollo", "price": 10.50, "description": "Pechuga de pollo fresca, 1 kg.", "photo": "https://superxtrapanama.vtexassets.com/arquivos/ids/162771-800-auto?v=637896282221700000&width=800&height=auto&aspect=true"},
            {"name": "Pasta Espagueti", "price": 2.30, "description": "Pasta espagueti, 500 g.", "photo": "https://superxtrapanama.vtexassets.com/arquivos/ids/157806-800-auto?v=637806383504430000&width=800&height=auto&aspect=true"},
            {"name": "Leche Entera", "price": 1.50, "description": "Leche entera fresca, 1 litro.", "photo": "https://superxtrapanama.vtexassets.com/arquivos/ids/166003-800-auto?v=638005964476630000&width=800&height=auto&aspect=true"},
            {"name": "Huevos Frescos", "price": 2.99, "description": "Caja de 12 huevos frescos.", "photo": "https://superxtrapanama.vtexassets.com/arquivos/ids/158781-800-auto?v=637806397448570000&width=800&height=auto&aspect=true"},
            {"name": "Pan Integral", "price": 2.50, "description": "Pan integral fresco, 500 g.", "photo": "https://superxtrapanama.vtexassets.com/arquivos/ids/159422-800-auto?v=637806400384930000&width=800&height=auto&aspect=true"},
            {"name": "Jugo de Naranja", "price": 4.00, "description": "Jugo de naranja natural, 1 litro.", "photo": "https://superxtrapanama.vtexassets.com/arquivos/ids/167329-800-auto?v=638035374797670000&width=800&height=auto&aspect=true"}
        ]

        for grocery in groceries_data:
            if not Groceries.query.filter_by(name=grocery["name"]).first():
                db.session.add(Groceries(**grocery))

        users_data = [
            {"username": "admin", "password": "admin123"},
            {"username": "user1", "password": "password1"},
            {"username": "user2", "password": "password2"},
            {"username": "user3", "password": "password3"}
        ]

        for user_data in users_data:
            if not Users.query.filter_by(username=user_data["username"]).first():
                db.session.add(Users(**user_data))

        db.session.commit()
        print("Datos iniciales insertados correctamente.")

if __name__ == "__main__":
    seed_database()
