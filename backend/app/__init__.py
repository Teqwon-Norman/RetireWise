from flask import Flask
from config import config

connection = "mongodb+srv://laidback_coding:<password>@production.6oesvit.mongodb.net/?retryWrites=true&w=majority"

def create_app(config_name):
    app = Flask(__name__)
    app.config.from_object(config[config_name])
    config[config_name].init_app(app)

    return app
