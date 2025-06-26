import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCommentDots,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import "../Styles/Navbar.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function Navbar() {
  const [nav, setNav] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [showAssistant, setShowAssistant] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");

  const openNav = () => {
    setNav(!nav);
  };

  const handleChatBtnClick = () => {
    if (!isButtonDisabled) {
      setShowAssistant(!showAssistant);
    }
  };

  const handleUserMessage = () => {
    if (inputText.trim() === "") return;

    const userInput = inputText.toLowerCase();
    const newMessages = [...messages, { from: "user", text: inputText }];
    let reply;

    if (userInput.includes("nic") || userInput.includes("parac")) {
      reply = "🟢 NICIP and Paracetamol are used to relieve pain and reduce fever. Always follow the dosage instructions provided by your healthcare provider.";
    } else if (userInput.includes("atrax")) {
      reply = "🟢 ATRAX 25 is often prescribed to treat anxiety and sleep disorders. It should be taken exactly as directed by your doctor.";
    } else if (userInput.includes("medicine")) {
      reply = "💊 Sure, please tell me the name of the medicine or your symptoms.";
    } else {
      reply = "🤖 I'm here to help with medical-related questions only.";
    }

    setMessages([...newMessages, { from: "bot", text: reply }]);
    setInputText("");
  };

  return (
    <div className="navbar-section">
      <h1 className="navbar-title">
        <Link to="/">
          Health <span className="navbar-sign">+</span>
        </Link>
      </h1>

      {/* Desktop */}
      <ul className="navbar-items">
        <li>
          <Link to="/" className="navbar-links">
            Home
          </Link>
        </li>
        <li>
          <a href="#services" className="navbar-links">
            Services
          </a>
        </li>
        <li>
          <a href="#about" className="navbar-links">
            About
          </a>
        </li>
        <li>
          <a href="#reviews" className="navbar-links">
            Reviews
          </a>
        </li>
        <li>
          <a href="#doctors" className="navbar-links">
            Doctors
          </a>
        </li>
      </ul>

      <button
        className="navbar-btn"
        type="button"
        disabled={isButtonDisabled}
        onClick={handleChatBtnClick}
      >
        <FontAwesomeIcon icon={faCommentDots} /> Live Chat
      </button>

      {/* Mobile */}
      <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
        <div onClick={openNav} className="mobile-navbar-close">
          <FontAwesomeIcon icon={faXmark} className="hamb-icon" />
        </div>

        <ul className="mobile-navbar-links">
          <li>
            <Link onClick={openNav} to="/">
              Home
            </Link>
          </li>
          <li>
            <a onClick={openNav} href="#services">
              Services
            </a>
          </li>
          <li>
            <a onClick={openNav} href="#about">
              About
            </a>
          </li>
          <li>
            <a onClick={openNav} href="#reviews">
              Reviews
            </a>
          </li>
          <li>
            <a onClick={openNav} href="#doctors">
              Doctors
            </a>
          </li>
          <li>
            <a onClick={openNav} href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Hamburger Icon */}
      <div className="mobile-nav">
        <FontAwesomeIcon
          icon={faBars}
          onClick={openNav}
          className="hamb-icon"
        />
      </div>
      {showAssistant && (
        <div className="chat-assistant">
          <div className="chat-header">
            <h4>Assistant SHUBU 👨‍⚕️</h4>
            <button onClick={() => setShowAssistant(false)}>X</button>
          </div>
          <div className="chat-body">
            <p>👋 Hi, I'm SHUBU. How can I help you today?</p>
            <p>💊 You can ask me about your symptoms, get medicine advice, or find a specialist.</p>
            <div className="chat-messages">
              {messages.map((msg, index) => (
                <p key={index} className={`chat-message ${msg.from}`}>
                  {msg.text}
                </p>
              ))}
            </div>
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Type your message..."
              className="chat-input"
            />
            <button onClick={handleUserMessage} className="send-btn">
              <span>Send</span>
              <FontAwesomeIcon icon={faCommentDots} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
