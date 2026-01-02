import pandas as pd
from sklearn.model_selection import train_test_split
# from sklearn.linear_model import LogisticRegression
from sklearn.ensemble import RandomForestClassifier
import pickle
from features import extract_features

data = pd.read_csv("PhiUSIIL_Phishing_URL_Dataset.csv")

urls = data["URL"]
labels = data["label"]

labels = labels.astype(int)

features = urls.apply(extract_features)

x = list(features)
y = labels

x_train, x_test, y_train, y_test = train_test_split(x, y, test_size = 0.2, random_state = 42, stratify=y)

model = RandomForestClassifier(n_estimators=100, random_state=42, n_jobs=-1)
model.fit(x_train, y_train)

accuracy = model.score(x_test, y_test)
print("Model accuracy", accuracy)

with open("random_forest_model.pkl", "wb") as f:
    pickle.dump(model, f)
