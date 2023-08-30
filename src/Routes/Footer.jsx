import { Link } from "react-scroll";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"

const Footer = () => {
    useEffect(() => {
        Aos.init({ duration:1000});
    }, [])
    return(
        <div id="footer">
            <div className="footer-mother">
                <h3 data-aos="fade-down">Interested in working with me?</h3>
                <p data-aos="zoom-in">OR</p>
                <h4 data-aos="fade-up">Do you have project to bring to live?</h4>
                <div data-aos="fade-right"
                className="talk-card">
                <Link to="contact" className="talk"><p>Let's Talk</p></Link>
                </div>
            <div className="footer-box">
                <a href="https://web.facebook.com/profile.php?id=100002423614028" className="foot-link" target="blank"><i className="fa-brands fa-facebook"></i></a>
                <a href='https://wa.me/08062142972' className="foot-link" target="blank"><i class="fa-brands fa-whatsapp"></i></a>
                <a href="https://twitter.com/adebayomyhope" className="foot-link" target="blank"><i className="fa-brands fa-twitter"></i></a>
                <a href='https://www.linkedin.com/in/oseni-wasiu-b787a9250/' className="foot-link" target="blank"><i className="fa-brands fa-linkedin"></i></a>
                <a href='https://github.com/osenifuture/' className="foot-link" target="blank"><i className="fa-brands fa-github"></i></a>
            </div>
            <p>
            &copy; 2023 All right reserved. WesttyCode
            </p>
            </div>
        </div>
    )
};

export default Footer;