import Nav from "./components/Navbar/Nav";
import About from "./components/Hero/About";
import Service from "./components/Service/Service";
import LocationHours from "./components/LocationHours/LocationHours";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <main>
      <Nav />
      <About />
      <Service />
      <LocationHours />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
