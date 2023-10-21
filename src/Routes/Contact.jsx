import Form from "./Form";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"


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
        <h2 data-aos="fade-up"
     >Have a Project?</h2>
      </div>
      <div className="formaddress-container">
        <div className="form-container">
          <Form />
        </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
