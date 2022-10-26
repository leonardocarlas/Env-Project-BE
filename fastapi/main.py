from distutils.command.config import config
from fastapi import FastAPI
from dotenv import dotenv_values
from pymongo import MongoClient
from routes import router as apiary_router

config = dotenv_values('.env')

app = FastAPI()

@app.on_event("startup")
def startup_db_client():
    app.mongodb_client = MongoClient(config["DB_URL"])
    app.database       = app.mongodb_client[config["DB_NAME"]]
    print('Connected to MongoDB')

@app.on_event("shutdown")
def shutdown_db_client():
    app.mongodb_client.close()


app.include_router(apiary_router, tags=['apiaries'], prefix='/apiary')