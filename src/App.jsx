import Nav from "./components/Navbar/Nav";
import About from "./components/Hero/About";
import Service from "./components/Service/Service";
import LocationHours from "./components/LocationHours/LocationHours";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-white bg-[url('/line-in-motion.svg')] bg-repeat bg-[size:600px]">
      <Nav />
      <About />
      <Service />
      <LocationHours />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
