from flask_restx import Namespace, Resource, fields
from flask import request, jsonify, session
from exts import mongo
from bson.json_util import dumps

accounts_ns = Namespace('retirement', description='A namespace for getting all retirement accounts for a user')

@accounts_ns.route('/accounts/<string:user_id>')
class Account(Resource):
    def get(self, user_id):
        """ Get accounts for a user """
        retirement_accounts = mongo.db.accounts
        user_accounts = retirement_accounts.find({'user_id': user_id})
        accounts_list = list(user_accounts)

        accounts_list = [
            {
                "tickers": account['tickers'],
                "total_profit": account['total_profit'],
                "account_balance": account['account_balance']
            }
                for account in accounts_list
            ]

        print(accounts_list)
        json_accounts = dumps(accounts_list)
        return json_accounts, 200

    def post(self, user_id):
        """ Add a new account """
        retirement_accounts = mongo.db.accounts
        data = request.get_json()

        tickers = data['tickers']
        total_profit = data['profit']
        account_balance = data['balance']

        retirement_accounts.insert_one({
            'user_id': user_id,
            'tickers': tickers,
            'total_profit': total_profit,
            'account_balance': account_balance
            })

        return jsonify({'message': 'Account added successfully!'}, 200)
