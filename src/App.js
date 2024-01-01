import { BrowserRouter as Router } from "react-router-dom";
import { Element } from "react-scroll";
import Home from "./Routes/Home";
import About from "./Routes/About";
import Contact from "./Routes/Contact";
import Navigation from "./navbar/Navigation";
import Portfolio from "./Routes/Portfolio";
import Skill from "./Routes/Skill";
// import Services from "./Routes/Services";
import Footer from "./Routes/Footer";
import ScrollToTop from "./spinner/ScrollToTop";
// import SocialLink from "./spinner/SocialLink";




function App() {
  return (
    <div>
      <Router>
        <Navigation/>
        <Element name="home"><Home/></Element>
        <Element name="about"><About/></Element>
        <Element name="skill"><Skill/></Element>
        {/* <Element name="services"><Services/></Element> */}
        <Element name="portfolio"><Portfolio/></Element>
        <Element name="contact"><Contact/></Element>
        {/* <SocialLink/> */}
        <Footer/>
        <ScrollToTop/>
      </Router>
    </div>
  );
}

export default App;
