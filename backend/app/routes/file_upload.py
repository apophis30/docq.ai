from fastapi import APIRouter, UploadFile, File
from fastapi.responses import JSONResponse
import os
import shutil

router = APIRouter()

UPLOAD_DIR = "static"

@router.post("/upload")
async def upload_file(file: UploadFile = File(...)):
    file_location = os.path.join(UPLOAD_DIR, file.filename)

    # Save file locally
    with open(file_location, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    return {"url": f"http://localhost:8000/static/{file.filename}"}
