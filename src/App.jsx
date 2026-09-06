import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutPreview from "./components/AboutPreview";
import Projects from "./components/Projects";
import ContactCTA from "./components/ContactCTA";
import Footer from "./components/Footer";
import './App.css';
function App() {
  return (
    <div>
      <Navbar />
      <Hero/>
      <AboutPreview/>
      <Projects/>
      <ContactCTA/>
      <Footer/>
    </div>
  )
};

export default App;
