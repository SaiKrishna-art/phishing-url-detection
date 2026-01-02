# phishing-url-detection

# Hybrid Phishing URL Detection System

A web-based phishing URL detection system that combines
Machine Learning (Random Forest) with rule-based security checks.

## Features
- URL-based phishing detection
- Random Forest ML model
- Rule-based detection for high-risk TLDs
- Visual risk alerts (Red / Orange / Green)
- React + FastAPI architecture

## Tech Stack
- Frontend: React (Vite)
- Backend: FastAPI
- ML: Scikit-learn (Random Forest)

## How to Run

### Backend
```bash
cd backend
python -m uvicorn main:app --reload
```
### Frontend
```bash
cd frontend/phishing_frontend
npm install
npm run dev
```
