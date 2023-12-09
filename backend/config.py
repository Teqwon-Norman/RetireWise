from decouple import config

class Config:
    SECRET_KEY = config('SECRET_KEY')

class DevConfig(Config):
    pass

class ProdConfig(Config):
    MONGODB_NAME = config('MONGODB_NAME')
    MONGO_URI = config('MONGODB_PROD_URL')
    DEBUG=True

class TestConfig(Config):
    pass
