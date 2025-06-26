import React from "react";
import Doctor from "../Assets/doctor-group.png"; // Ensure this file exists in /Assets and is named correctly
import SolutionStep from "./SolutionStep";
import "../Styles/About.css";

function About() {
  return (
    <div className="about-section" id="about">
      <div className="about-image-content">
        <img src={Doctor} alt="Doctor Group" className="about-image1" />
      </div>

      <div className="about-text-content">
        <h3 className="about-title">
          <span>About Us </span>
        </h3>
        <p className="about-description">
         Welcome to Health Plus – your reliable companion in personalized and accessible healthcare.
Connect with experienced doctors through secure online consultations and specialized care services tailored to your needs. At Health Plus, your well-being is our top priority. Let’s take the next step together toward a healthier, happier you.
        </p>

        <h4 className="about-text-title">	How We Help</h4>

        <SolutionStep
          title="Choose a Specialist"
          description="Book the right specialist quickly and easily with Health Plus. Our expert doctors deliver personalized care tailored to your unique health needs."
        />

        <SolutionStep
          title="Make a Schedule"
          description="Select a convenient date and time for your appointment, and our team will ensure a smooth and personalized healthcare experience."
        />

        <SolutionStep
          title="Get Your Solutions"
          description="Receive expert guidance and personalized care from trusted professionals, designed to support your health journey and long-term wellness."
        />
      </div>
    </div>
  );
}

export default About;
