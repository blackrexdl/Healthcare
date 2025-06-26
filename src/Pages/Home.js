import React from "react";
import About from "../Components/About";
import BookAppointment from "../Components/BookAppointment";
import Doctors from "../Components/Doctors";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import Info from "../Components/Info";
import Navbar from "../Components/Navbar";
import Reviews from "../Components/Reviews";

function Home() {
  return (
    <div className="home-section">
      <Navbar />
      <Hero />
      <Info />
      <About />
      <BookAppointment />
      <Reviews />
      <Doctors />
      <Footer />
    </div>
  );
}

export default Home;
