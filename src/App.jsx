import React from "react";
import Nav from "./components/Navbar/Nav";
import About from "./components/Hero/About";
import Service from "./components/Hero/Service";
import Time from "./components/Hero/Time";
import ServiceAccordion from "./components/ServiceAccordion";
import Footer from "./components/Footer";

const App = () => { 
  return (
    <main className="overflow-x-hidden">
      <Nav />
      <About />
      <Service />
      <ServiceAccordion />
      <Time />
      <Footer />
    </main>
  )
}

export default App;
