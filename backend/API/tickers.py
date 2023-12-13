from flask_restx import Namespace, Resource, fields
from flask import request, jsonify, make_response
from exts import mongo
from bson.json_util import dumps

tickers_ns = Namespace('tickers', description='A namespace for checking if a ticker is valid')

@tickers_ns.route('/ticker/<string:ticker>')
class StockTicker(Resource):
    def get(self, ticker):
        """ Get all users """
        valid_tickers = mongo.db.tickers
        user_input = ticker.lower()
        ticker = valid_tickers.find_one({'ticker': user_input})

        print(ticker)

        if ticker:
            print('yes')
            return make_response('Ticker found', 200)
        return make_response('Ticker not found', 404)
