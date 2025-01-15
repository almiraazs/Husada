import React from "react";
import Nav from "./components/Navbar/Nav";
import About from "./components/Hero/About";
import Service from "./components/Hero/Service";
import Time from "./components/Hero/Time";

const App = () => { 
  return (
    <main className="overflow-x-hidden">
      <Nav />
      <About />
      <Service />
      <Time />
    </main>
  )
}

export default App;
