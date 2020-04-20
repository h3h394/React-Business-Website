import React from "react";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Design from "./components/Design/Design";
import Build from "./components/Build/Build";
import Features from "./components/Features/Features";
import Pricing from "./components/Pricing/Pricing";
import Team from "./components/Team/Team";
import Client from "./components/Client/Client";
import Faq from "./components/FAQ/Faq";
import Sponsors from "./components/Sponsors/Sponsors";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/Contact";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Design />
      <Build />
      <Features />
      <Pricing />
      <Team />
      <Client />
      <Faq />
      <Sponsors />
      <Blog />
      <Contact />
    </div>
  );
};

export default App;
