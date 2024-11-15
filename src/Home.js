import React from "react";
import RegistrationCount from "./sections/RegistrationCount";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import CountDown from "./sections/CountDown";
import OurVisions from "./sections/OurVisions";
import PastEvents from "./sections/PastsEvents";
import Footer from "./components/Footer";
import AboutUs from "./sections/AboutUs";
import "./styles/Home.css";
import Speakers from "./sections/Speakers";
import Organizers from "./sections/Organizers";
import Teams from "./sections/Teams";
import Venue from "./sections/Venue";
import UpcomingEvents from "./sections/UpcomingEvents";
import Sponsors from "./sections/Sponsors";

function Home() {
  return (
    <div className="home-container">
      <Header />
      <Navbar />
      <CountDown />
      <RegistrationCount />
      <AboutUs />
      <OurVisions />
      <UpcomingEvents />
      <PastEvents />
      <Speakers />
      <Organizers />
      <Teams />
      <Venue />
      <Sponsors />
      <Footer />
    </div>
  );
}

export default Home;
