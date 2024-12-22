import React from "react";
import Nav from "./components/Navbar/Nav";
import About from "./components/Hero/About";

const App = () => { 
  return (
    <main className="overflow-x-hidden">
      <Nav />
      <About />
    </main>
  )
}

export default App;
