from flask import Flask
from flask_restx import Api

from exts import mongo
from API import auth

def create_app(config):
    app = Flask(__name__)
    app.config.from_object(config)
    mongo.init_app(app)
    api = Api(app, doc='/docs')

    # authentication namespace, endpoint /auth/register and so on
    # /auth will always be before any endpoint we create
    api.add_namespace(auth.auth_ns)

    return app
