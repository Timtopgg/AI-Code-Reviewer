from ai import generate_review
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

class CodeRequest(BaseModel):
    code: str
    language: str

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://localhost:5174",
        "http://localhost:5175",
        "https://ai-code-reviewer-rho-bay.vercel.app",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/")
def review_code(request: CodeRequest):
    review = generate_review(
        request.code,
        request.language,
    )

    return {
        "review": review
    }