import React from "react";
import Nav from "./components/Navbar/Nav";
import About from "./components/Hero/About";
import Service from "./components/Hero/Service";

const App = () => { 
  return (
    <main className="overflow-x-hidden">
      <Nav />
      <About />
      <Service />
    </main>
  )
}

export default App;
