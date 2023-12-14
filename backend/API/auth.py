from flask_restx import Namespace, Resource, fields
from flask import request, jsonify
from exts import mongo

import uuid

auth_ns = Namespace('auth', description='A namespace for our authentication')

@auth_ns.route('/login')
class Login(Resource):
    def get(self):
        """ Get all users """
        users = mongo.db.users.find()
        return jsonify(users)

    def post(self):
        """ update database if user doesn't exist """
        data = request.get_json()

        email = data['email']
        first_name = data['first_name']
        last_name = data['last_name']
        email_verified = data['email_verified']

        user = mongo.db.users
        user_exists = user.find_one({'email' : email})

        if user_exists is None:
            user.insert_one(
                {
                    "user_id": str(uuid.uuid4()),
                    "first_name": first_name,
                    "last_name": last_name,
                    "email": email,
                    "email_verfied": email_verified
                }
            )

        return jsonify({'id': user.find_one({'email' : email})['user_id']})
