import React from "react";
import "/src/App.css";
import { useEffect } from "react";
function About(){
    useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.2 }
    );
  
    reveals.forEach((el) => observer.observe(el));
  
    return () => observer.disconnect();
  }, []);
  
    return (
      <div className="main">
    <div className="about-page reveal">
        <h1 className="website_title">About This Project</h1>
  <div className="about-container reveal">


    <p className="about-intro reveal">
      This is a Hybrid Phishing URL Detection System that combines Machine
      Learning and rule-based security analysis to identify malicious URLs.
    </p>

    {/* Sections */}
    <section className="about-section  reveal">
      <h2>Key Features</h2>
      <ul>
        <li>Random Forest based ML detection</li>
        <li>Rule-based high-risk domain analysis</li>
        <li>Real-time URL checking</li>
        <li>Visual risk indicators</li>
      </ul>
    </section>

    <section className="about-section reveal">
      <h2>Tech Stack</h2>
      <ul>
        <li>Frontend: React (Vite)</li>
        <li>Backend: FastAPI</li>
        <li>ML: Scikit-learn</li>
      </ul>
    </section>

    <section className="about-section reveal">
      <h2>About Me</h2>
      <p>
        I'm Murthy Sai Krishna, a passionate developer focused on cybersecurity
        and AI-driven solutions.
      </p>
    </section>
      </div>
    </div>
      <footer
        style={{
          marginTop: "50px",
          padding: "15px",
          textAlign: "center",
          fontSize: "14px",
          color: "#666",
          position: "fixed",
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

export default About;