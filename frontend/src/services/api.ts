const API_URL = "https://ai-code-reviewer-api-rr1y.onrender.com";


export async function reviewCode(code: string, language: string) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      code,
      language,
    }),
  });

  if (!response.ok) {
    throw new Error("Server error");
  }
  return await response.json();
}