from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes import file_router, chat_router
import os


app = FastAPI()

# CORS Setup
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

os.makedirs("static", exist_ok=True)

app.include_router(file_router, prefix="/api/v1/files")
app.include_router(chat_router, prefix="/api/v1/chat")

from fastapi.staticfiles import StaticFiles
app.mount("/static", StaticFiles(directory="static"), name="static")
