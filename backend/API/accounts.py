from flask_restx import Namespace, Resource, fields
from flask import request, jsonify, session
from exts import mongo
from bson.json_util import dumps

accounts_ns = Namespace('retirement', description='A namespace for our authentication')

@accounts_ns.route('/accounts/<string:user_id>')
class Account(Resource):
    def get(self, user_id):
        """ Get all users """
        retirement_accounts = mongo.db.accounts
        user_accounts = retirement_accounts.find({'user_id': user_id})
        accounts_list = list(user_accounts)
        accounts_list = [ {"name": account['name']} for account in accounts_list ]
        json_accounts = dumps(accounts_list)
        return json_accounts, 200
