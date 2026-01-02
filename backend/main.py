from fastapi import FastAPI
from pydantic import BaseModel
import pickle
from features import extract_features
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI(title="phishing URL detection API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://127.0.0.1:5173"],
    # allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
class URLRequest(BaseModel):
    url: str

with open("model.pkl", "rb") as f:
    phishing_model = pickle.load(f)

@app.get("/")
def health_check():
    return {"status": "working good"}

@app.post("/check-url")
def check_url(request: URLRequest):
    url = request.url.strip()
    HIGH_RISK_TLDS = [".top", ".xyz", ".club", ".tk", ".zip", ".click", ".link", ".online", ".site", ".win", ".bid", ".loan", ".date", ".gq", ".cf", ".ml"]
    if not url:
        return {"error": "URL cannot be empty"}
    if len(url)>2048:
        return {"error": "URL too long"}
    if not (url.startswith("https://") or url.startswith("http://")):
        return {"error": "Invalid URL format"}
    features = extract_features(url)
    prediction = phishing_model.predict([features])[0]
    decision = "phishing" if prediction==0 else "legitimate"
    decision += " (high risk)" if any(tld in url for tld in HIGH_RISK_TLDS) else ""
    return {
        "url": url,
        "decision": decision
    }