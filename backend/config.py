from decouple import config
import redis

class Config:
    redis_url = config('SESSION_REDIS_URL', default='redis://127.0.0.1:6379')
    SECRET_KEY = config('SECRET_KEY')
    SESSION_TYPE = "redis"
    SESSION_REDIS = redis.from_url(config('SESSION_REDIS_URL'))

class DevConfig(Config):
    pass

class ProdConfig(Config):
    MONGODB_NAME = config('MONGODB_NAME')
    MONGO_URI = config('MONGODB_PROD_URL')
    DEBUG=True

class TestConfig(Config):
    pass
