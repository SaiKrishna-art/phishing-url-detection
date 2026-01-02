import pickle
from features import extract_features

with open("model.pkl", "rb") as f:
    model = pickle.load(f)

test_urls = [
    "https://google.com",
    "http://secure-login-paypal.com@evil.ru",
    "https://hots.icmrykc.top"
]

for url in test_urls:
    features = extract_features(url)
    prediction = model.predict([features])[0]
    result = "PHISHING" if prediction==0 else "LEGITIMATE"
    print(url, "->", result)