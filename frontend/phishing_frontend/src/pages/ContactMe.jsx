import React, {useEffect} from "react";
import "/src/App.css";
function ContactMe(){
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
      <div className="">
        <h1 className="website_title">Contact Me</h1>
        <div className="about-container reveal black-box alignment">
        <p className="about-intro reveal">Feel free to reach out to me through the following methods:</p>
        <ul className="contactme-section">
          <li>📧Email: <a href="mailto:saikrishna63309@gmail.com">saikrishna63309@gmail.com</a></li>
          <li>🔗LinkedIn: <a href="https://www.linkedin.com/in/murthy-sai-krishna/" target="_blank" rel="noopener noreferrer">murthy-sai-krishna</a></li>
        </ul>
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
};

export default ContactMe;