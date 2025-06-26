import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/LegalDocs.css";

function LegalDocs() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="legal-section-title">
      <h1 className="legal-siteTitle">
        <Link to="/" aria-label="Go to homepage" className="legal-home-link">
          Health <span className="legal-siteSign">+</span>
        </Link>
      </h1>

      <div className="legal-text-content">
        <p className="legal-title">General Info</p>
        <p className="legal-description">
          Welcome to Health Plus, your reliable partner in digital healthcare. We are committed to delivering accessible, high-quality medical services tailored to your needs. By accessing our platform, you agree to our Privacy Policy and Terms of Service.
        </p>

        <p className="legal-title">Privacy Policy</p>
        <p className="legal-description">
          At Health Plus, protecting your privacy is a top priority. Our Privacy Policy explains how we collect, use, and safeguard your personal and health data. We implement strong security measures to ensure your information remains confidential and secure.
        </p>

        <p className="legal-title">Terms of Service</p>
        <p className="legal-description">
          By using Health Plus, you agree to our Terms of Service, which define the rules for using our platform, communicating with doctors, and mutual responsibilities. Understanding these terms helps ensure a smooth and respectful experience for all users.
        </p>

        <p className="legal-title">Consultations</p>
        <p className="legal-description">
          Our online consultation service connects you with certified medical professionals for health advice, prescriptions, and guidance. These services are not a substitute for emergency or in-person medical care. Accurate information is essential for receiving the best support.
        </p>

        <p className="legal-title">How it Works</p>
        <p className="legal-description">
          Health Plus offers a simplified approach to healthcare. Select a specialist, book an appointment, and attend your virtual consultation from anywhere. Our experts provide care plans tailored to your condition. For urgent issues, please visit the nearest medical facility.
        </p>
      </div>

      <div className="legal-footer">
        <p>© Health+. All rights reserved.</p>
      </div>
    </div>
  );
}

export default LegalDocs;
