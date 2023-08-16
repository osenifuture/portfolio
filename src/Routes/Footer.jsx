
import { Link } from "react-scroll";

const Footer = () => {
    return(
        <div id="footer">
            <div className="footer-mother">
            <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="footer-box">
                <Link className="foot-link"><i className="fa-brands fa-facebook"></i></Link>
                <Link to='https://wa.me/08062142972' className="foot-link" target="blank"><i class="fa-brands fa-whatsapp"></i></Link>
                <Link to="https://twitter.com/adebayomyhope" className="foot-link"><i className="fa-brands fa-twitter"></i></Link>
                <Link className="foot-link"><i className="fa-brands fa-linkedin"></i></Link>
                <Link className="foot-link"><i className="fa-brands fa-github"></i></Link>
            </div>
            <p data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
            &copy; 2023 All right reserved. WesttyCode
            </p>
            </div>
        </div>
    )
};

export default Footer;