
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import AIServices from "./components/AIServices";
import Clients from "./components/Clients";
import Products from "./components/Products";
import Portfolio from "./components/Portfolio";
import HireDevelopers from "./components/HireDevelopers";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <AIServices />
      <Clients />
      <About />
      <Services />
      <Products />  
      <Portfolio /> 
      <HireDevelopers /> 
      <Contact />
      <Footer />
    </>
  );
}

export default App;
