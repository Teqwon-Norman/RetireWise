from flask_restx import Namespace, Resource, fields
from flask import request, jsonify, make_response
from exts import mongo
from datetime import date, timedelta, datetime
from config import Config

import requests
import urllib.parse
import json

historical_data_ns = Namespace(
    "historical_data", description="A namespace for our historical stock data"
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
        data = response.json()
        access = data["bars"]
        shares_per_ticker = [10000 / data["bars"][k][0]["o"] for k in access]
        result_data = {}

        for i, tick in enumerate(access):
            m = 50000
            for _, t in enumerate(access[tick]):
                m += (t["c"] - t["o"]) * shares_per_ticker[i]
                dt_object = datetime.strptime(t["t"], "%Y-%m-%dT%H:%M:%SZ")

                if tick in result_data:
                    result_data[tick].append({"value": m, "time": int(dt_object.timestamp())})
                else:
                    result_data[tick] = [{"value": m, "time": int(dt_object.timestamp())}]

        t1, t2, t3, t4, t5 = [], [], [], [], []
        var = [t1, t2, t3, t4, t5]
        t1Key, t2Key, t3Key, t4Key, t5Key = "", "", "", "", ""
        varKeys = [t1Key, t2Key, t3Key, t4Key, t5Key]
        end_profit = 0
        money = 50000
        m1, m2, m3, m4, m5 = 50000, 50000, 50000, 50000, 50000
        result = []

        for i, (k, v) in enumerate(result_data.items()):
            var[i].append({k: v})
            varKeys[i] = k

        for a, b, c, d, e in zip(t1[0][varKeys[0]], t2[0][varKeys[1]], t3[0][varKeys[2]], t4[0][varKeys[3]], t5[0][varKeys[4]]):
            profitA = (a["value"] - m1)
            profitB = (b["value"] - m2)
            profitC = (c["value"] - m3)
            profitD = (d["value"] - m4)
            profitE = (e["value"] - m5)

            m1 += profitA
            m2 += profitB
            m3 += profitC
            m4 += profitD
            m5 += profitE

            total_profit = profitA + profitB + profitC + profitD + profitE
            result.append({"value": money + total_profit, "time": a["time"]})
            end_profit += total_profit
            money += total_profit
        return make_response(jsonify({"chart_data": result, "balance": money, "total_profit": end_profit}))
