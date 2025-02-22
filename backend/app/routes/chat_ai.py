from fastapi import APIRouter

router = APIRouter()

@router.post("/")
async def chat_with_ai(message: dict):
    user_message = message.get("message", "")
    
    ai_response = f"AI Response to: {user_message}"

    return {"reply": ai_response}
