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

        username = data.get('nickname')
        email = data.get('email')
        email_verified = data.get('email_verified')

        user = mongo.db.users
        user_exists = mongo.db.users.find_one({'email' : email})
        if user_exists:
            return jsonify({'message' : f'User with email {email} already exists!!'})

        user.insert_one(
            {
                "user_id": str(uuid.uuid4()),
                "username": username,
                "email": email,
                "email_verfied": email_verified,
            }
        )

        return jsonify({'message' : f'User with email {email} created successfully!!'})
