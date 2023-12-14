from flask_restx import Namespace, Resource, fields
from flask import request, jsonify, make_response
from exts import mongo
from datetime import date, timedelta
from config import Config

import requests
import urllib.parse

historical_data_ns = Namespace('historical_data', description='A namespace for our historical data')

@historical_data_ns.route('/tickers')
class HistoricalData(Resource):
    def post(self):
        """ Get historical data for a ticker """
        data = request.get_json()

        tickers = data['data']
        symbols_url_encoded = ','.join(map(urllib.parse.quote, tickers))

        today = date.today()
        today_five_years_ago = today - timedelta(days=5*365)

        url = f"https://data.alpaca.markets/v2/stocks/bars?symbols={symbols_url_encoded}&timeframe=1D&start={today_five_years_ago}&end={today}&limit=5000&adjustment=split&feed=iex&sort=asc"

        headers = {
            "accept": "application/json",
            "APCA-API-KEY-ID": Config.APCA_API_KEY_ID,
            "APCA-API-SECRET-KEY": Config.APCA_API_SECRET_KEY
        }

        response = requests.get(url, headers=headers, timeout=10)
        split_tickers = [ '_' for i in range(5) ]
        for index, (k, v) in enumerate(response.json()['bars'].items()):
            split_tickers[index] = v
        
        print(split_tickers)

        return make_response(jsonify({'message': 'success'}), 200)
