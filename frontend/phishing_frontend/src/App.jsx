import { useState } from "react";
import "./App.css";
import redCircle from "/src/assets/red.png";
import greenCircle from "/src/assets/green.png";
import orangeCircle from "/src/assets/orange.png";

function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [alertImage, setAlertImage] = useState(null);
  const [url, setUrl] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  fetch(`${API_BASE_URL}/check-url`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ url }),
  });


  const checkUrl = async () => {
    if (!url) {
      setError("Please enter a URL");
      return;
    }

    setLoading(true);
    setError("");
    setResult("");

    try {
      const response = await fetch("http://127.0.0.1:8000/check-url", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
      });

      const data = await response.json();

      if (data.decision) {
        setResult(data.decision);
        setShowPopup(true);
      } else if (data.error) {
        setError(data.error);
      }
    } catch (err) {
      setError("Backend not reachable");
    }

    setLoading(false);

    const alertImage = data.decision==="phishing"?redCircle : data.decision==="legitimate (high risk)"?orangeCircle : greenCircle;

    // alert(data.decision==="phishing"?"Warning! The URL is identified as a phishing site. Do not proceed!": data.decision==="legitimate (high risk)"?"The URL appears to be legitimate but has high risk factors. Proceed with caution.":"The URL appears to be safe, but always exercise caution when browsing.");
  };

  return (
//     <div
//   style={{
//     minHeight: "100vh",
//     display: "flex",
//     flexDirection: "column",
//   }}
// >
    <div className="main" style={{flex: 1}}>
      <h1 className="website_title">Phishing URL Detection</h1>

      <input
        type="text"
        placeholder="Enter website URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        style={{ width: "420px", padding: "8px" }}
      />

      <br /><br />

      <button onClick={checkUrl} disabled={loading}>
        {loading ? "Checking..." : "Check URL"}
      </button>

      <br /><br />


      {result && (
        <h3 style={{ color: result === "phishing" ? "red" : result === "legitimate (high risk)" ? "orange" : "green" }}>
          Result: {result.toUpperCase()}
        </h3>
      )}

      {error && <p style={{ color: "red" }}>{error}</p>}

      {showPopup && (
  <div
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: "rgba(0,0,0,0.5)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 1000,
    }}
  >
    <div
      style={{
        background: "black",
        padding: "30px",
        borderRadius: "10px",
        minWidth: "320px",
        textAlign: "center",
      }}
    >
      {/* ALERT IMAGE */}
      <img
        src={alertImage || (result === "phishing" ? redCircle : result === "legitimate (high risk)" ? orangeCircle : greenCircle)}
        alt="alert"
        style={{ width: "80px", height: "80px", marginBottom: "15px" }}
      />

      {/* MESSAGE */}
      <h3>
        {result === "phishing"
          ? "PHISHING DETECTED"
          : result === "legitimate (high risk)"
          ? "HIGH RISK URL"
          : "LEGITIMATE URL"}
      </h3>

      <p style={{ color: "gray" }}>
        {result === "phishing"
          ? "Warning! The URL is identified as a phishing site."
          : result === "legitimate (high risk)"
          ? "This URL appears legitimate but has high risk indicators."
          : "This URL appears safe, but always browse cautiously."}
      </p>

      <button
        onClick={() => setShowPopup(false)}
        style={{
          marginTop: "15px",
          padding: "8px 16px",
          cursor: "pointer",
        }}
      >
        Close
      </button>
    </div>
  </div>
)}
<footer
  style={{
    marginTop: "50px",
    padding: "15px",
    textAlign: "center",
    fontSize: "14px",
    color: "#666",
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
  }}
>
  © 2026 Murthy Sai Krishna — Phishing URL Detection System™ 
  {/* <br /> */}
  <a href="https://github.com/SaiKrishna-art" target="_blank" style={{marginLeft: "20px", textDecoration: "none"}}>
    GitHub
  </a>
</footer>

    </div>
    
  );
}

export default App;
