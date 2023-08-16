
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
            <div  className="footer-box">
                <Link className="foot-link"><i className="fa-brands fa-facebook"></i></Link>
                <Link to='https://wa.me/08062142972' className="foot-link" target="blank"><i class="fa-brands fa-whatsapp"></i></Link>
                <Link to="https://twitter.com/adebayomyhope" className="foot-link"><i className="fa-brands fa-twitter"></i></Link>
                <Link className="foot-link"><i className="fa-brands fa-linkedin"></i></Link>
                <Link className="foot-link"><i className="fa-brands fa-github"></i></Link>
            </div>
            <p>
            &copy; 2023 All right reserved. WesttyCode
            </p>
            </div>
        </div>
    )
};

export default Footer;