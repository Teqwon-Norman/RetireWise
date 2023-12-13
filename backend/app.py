from flask import Flask
from flask_restx import Api
from flask_cors import CORS

from exts import mongo
from API import auth

def create_app(config):
    app = Flask(__name__)
    app.config.from_object(config)
    mongo.init_app(app)
    api = Api(app, doc='/docs')
    CORS(app, supports_credentials=True, automatic_options=True, allow_headers='*')

    # authentication namespace, endpoint /auth/register and so on
    # /auth will always be before any endpoint we create
    api.add_namespace(auth.auth_ns)

    return app
