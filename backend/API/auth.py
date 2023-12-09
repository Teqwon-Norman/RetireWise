from flask_restx import Namespace, Resource, fields
from flask import request, jsonify
from exts import mongo

import uuid

auth_ns = Namespace('auth', description='A namespace for our authentication')

@auth_ns.route('/register')
class SignUp(Resource):
    def get(self):
        """ Get all users """
        users = mongo.db.users.find()
        return jsonify(users)

    def post(self):
        """ Create a new user """
        data = request.get_json()

        first_name = data.get('firstname')
        last_name = data.get('lastname')
        email = data.get('email')

        user = mongo.db.users
        user_exists = mongo.db.users.find_one({'email' : email})
        if user_exists:
            return jsonify({'message' : f'User with email {email} already exists!!'})

        user.insert_one(
            {
                "user_id": str(uuid.uuid4()),
                "first_name": first_name,
                "last_name": last_name,
                "email": email,
            }
        )

        return jsonify(
            {
                "first_name": first_name,
                "last_name": last_name,
                "email": email,
            }
        )
