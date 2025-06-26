import React from "react";
import InformationCard from "./InformationCard";
import { faHeartPulse, faTruckMedical, faTooth } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Info.css";

function Info() {
  return (
    <div className="info-section" id="services">
      <div className="info-container">
        <div className="info-title-content">
          <h3 className="info-title">
            <span>Our Services</span>
          </h3>
          <p className="info-description">
            
    We make healthcare easy and accessible by offering a full range of on-demand medical services. Our platform connects you with experienced online doctors who provide expert medical advice, issue digital prescriptions, and offer fast refills whenever you need them — all from the comfort of your home
          </p>
        </div>

        <div className="info-cards-content">
          <InformationCard
            title="Emergency Care"
            description="Our emergency care service is here to support you when it matters most. Whether it’s a sudden illness, injury, or urgent medical concern, our dedicated healthcare team is available 24/7 to provide fast and reliable care. We understand that emergencies can be stressful, so we strive to deliver compassionate and efficient service to ensure your well-being."
            icon={faTruckMedical}
          />

          <InformationCard
            title="Heart Disease"
            description="Our team of experienced cardiologists and medical specialists use advanced technology to assess your heart health and create personalized treatment plans. From in-depth screenings to advanced procedures, we’re dedicated to helping you maintain a strong heart and live a full, healthy life. Whether you need routine check-ups or specialized care, we’re here to support you every step of the way."
            icon={faHeartPulse}
          />

          <InformationCard
            title="Dental Care"
            description="
    Smile with confidence! Our dental care services cover all your oral health needs. From routine check-ups and cleanings to cosmetic treatments and advanced procedures, our skilled dentists are here to keep your smile healthy and brigh.  We use the latest techniques and technology to ensure your comfort and satisfaction. Whether you need a simple filling or a complete smile makeover, we’re committed to providing exceptional dental care tailored to your needs."
            icon={faTooth}
          />
        </div>
      </div>
    </div>
  );
}

export default Info;
