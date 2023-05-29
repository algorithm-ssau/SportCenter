from flask import Flask, jsonify
from pymongo import MongoClient

app = Flask(__name__)

# Подключение к MongoDB
client = MongoClient('mongodb://localhost/my-database')
db = client.get_database()

@app.route('/api/phone-number')
def get_phone_number():
    try:
        # Получение номера телефона из базы данных
        collection = db['users']
        user = collection.find_one()
        if user:
            return jsonify({'phone_number': user['phoneNumber']})
        else:
            return jsonify({'phone_number': None})
    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run(debug=True)
