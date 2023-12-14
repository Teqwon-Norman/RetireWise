from flask_restx import Namespace, Resource, fields
from flask import request, jsonify, make_response
from exts import mongo
from datetime import date, timedelta, datetime
from config import Config

import requests
import urllib.parse
import json

historical_data_ns = Namespace(
    "historical_data", description="A namespace for our historical data"
)


@historical_data_ns.route("/tickers")
class HistoricalData(Resource):
    def post(self):
        """Get historical data for a ticker"""
        data = request.get_json()

        tickers = data["data"]
        symbols_url_encoded = ",".join(map(urllib.parse.quote, tickers))

        today = date.today()
        today_five_years_ago = today - timedelta(days=5 * 365)

        url = f"https://data.alpaca.markets/v2/stocks/bars?symbols={symbols_url_encoded}&timeframe=1D&start={today_five_years_ago}&end={today}&limit=5000&adjustment=split&feed=iex&sort=asc"

        headers = {
            "accept": "application/json",
            "APCA-API-KEY-ID": Config.APCA_API_KEY_ID,
            "APCA-API-SECRET-KEY": Config.APCA_API_SECRET_KEY,
        }

        response = requests.get(url, headers=headers, timeout=10)
        d = response.json()

        access = d["bars"]
        shares_per_ticker = [10000 / d["bars"][k][0]["o"] for k in access]

        m = 50000
        data_to_send = []

        for index, tick in enumerate(access):
            for i, t in enumerate(access[tick]):
                m += (t["c"] - t["o"]) * shares_per_ticker[index]
                dt_object = datetime.strptime(t["t"], "%Y-%m-%dT%H:%M:%SZ")

                data_to_send.append({"value": m, "time": int(dt_object.timestamp())})

        return make_response(jsonify({"chart_data": data_to_send, "balance": m}), 200)
