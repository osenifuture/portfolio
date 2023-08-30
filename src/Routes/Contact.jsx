import Form from "./Form";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"
import { Link } from "react-scroll";

const Contact = () => {
  useEffect(() => {
    Aos.init({ duration:1000});
  }, [])
  return (
    <div id="contact">
      <div className="contact-mother">
      <div className="contact-container">
        <h3 data-aos="fade-down"
     >CONTACT </h3>
        <h1 data-aos="fade-up"
     >Have a Project?</h1>
      </div>
      <div className="formaddress-container">
        <div className="form-container">
          <Form />
        </div>
        <div className="address-container">
          <div  data-aos="zoom-out-right"
     className="address-box">
            <div className="contact-fontbox">
              <i class="fa-solid fa-location-dot"></i>
            </div>
            <p>40, Folawiyo Bankole Str Lagos</p>
          </div>
          <div  data-aos="zoom-out-left"
      className="address-box">
            <div className="contact-fontbox">
              <i class="fa-solid fa-phone"></i>
            </div>
            <Link to="telto:" className="call-link"><p>+2348062142972</p></Link>
            
          </div>
          <div data-aos="zoom-out-down"
       className="address-box">
            <div className="contact-fontbox">
              <i class="fa-solid fa-paper-plane"></i>
            </div>
            <p>adebayomyhope@gmail.com</p>
          </div>
          <div data-aos="fade-down"
     
      className="address-box">
            <div className="contact-fontbox">
              <i class="fa-solid fa-globe"></i>
            </div>
            <div data-aos="fade-down"
  
     className="contact-social">
              <a href="https://web.facebook.com/profile.php?id=100002423614028"  className="social-link" target="blank">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="https://wa.me/08062142972"className="social-link" target="blank" >
                <i className="fa-brands fa-whatsapp"></i>
              </a>
              <a href="https://twitter.com/adebayomyhope"  className="social-link" target="blank">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href='https://www.linkedin.com/in/oseni-wasiu-b787a9250/' className="social-link"target="blank">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href='https://github.com/osenifuture/' className="social-link" target="blank">
                <i className="fa-brands fa-github"></i>
              </a>
           
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
