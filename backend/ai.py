import os
from dotenv import load_dotenv
from google import genai
from prompt import system_prompt

load_dotenv()
API_KEY = os.getenv("GEMINI_API_KEY")
client = genai.Client(api_key=API_KEY)

def generate_review(code, language):
    prompt = f"""
{system_prompt}

Programming language: {language}

Review the following code:

{code}
"""

    response = client.models.generate_content(
        model="gemini-3.6-flash",
        contents=prompt,
    )

    return response.text