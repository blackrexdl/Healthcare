import React, { useState } from "react";
import { customerReviews } from "../Scripts/reviews";
import "../Styles/Reviews.css";

function Reviews() {
  const reviewsLength = customerReviews.length - 1;
  const [review, setReview] = useState(0);

  const indianCities = [
    "Mumbai", "Delhi", "Bangalore", "Hyderabad", "Ahmedabad",
    "Pune", "Chandigarh", "Kolkata", "Jaipur", "Lucknow",
    "Bhopal", "Indore", "Nagpur", "Patna", "Surat"
  ];

  const reviewMessage = customerReviews[review];
  const rName = reviewMessage.name;
  const rMessage = reviewMessage.message;
  const rLocation = indianCities[Math.floor(Math.random() * indianCities.length)];

  const backBtnClick = () => {
    setReview(review <= 0 ? reviewsLength : review - 1);
  };

  const frontBtnClick = () => {
    setReview(review >= reviewsLength ? 0 : review + 1);
  };

  return (
    <div className="review-section" id="reviews">
      <div className="rw-text-content fade-in">
        <p className="rw-text-title">
          Trusted by <span className="rw-text-num">1500+ Indians</span>
        </p>

        <p className="rw-text-desc">Hear from real people across India about their healthcare experience</p>

        <div className="rw-review-card">
          <p className="rw-review-message">
            <span className="rw-text-quote1">“</span>
            {rMessage}
            <span className="rw-text-quote2"></span>
          </p>

          <div className="rw-review-footer">
            <div className="rw-review-author">
              <p className="rw-reviewer-name">{rName}</p>
              <p className="rw-reviewer-place">{rLocation}</p>
            </div>

            <div className="rw-btns">
              <button className="rw-next-btn" onClick={backBtnClick} aria-label="Previous review">←</button>
              <button className="rw-next-btn" onClick={frontBtnClick} aria-label="Next review">→</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
