
import { useEffect, useState } from "react";
import { Link } from "react-scroll";


const Navigation = () => {
    const [isMobile, setIsMobile] = useState(false)
    const [scrolling, setSrcrolling] = useState(false);

    const NavLinks = ({isActive}) => {
        return{
            color: isActive ? "#B2B492" : ""
        }
    };

    
    useEffect(() => {
        const handleSroll = () => {
            if (window.scrollY > 600) {
                setSrcrolling(true);
            } else {
                setSrcrolling(false)
            }
        };
        window.addEventListener('scroll', handleSroll);
        return () => {
            window.addEventListener('scroll', handleSroll);
        };
    }, []);

    const handleMenu = () => {
        setIsMobile(!isMobile)
    };

    return(
        <div className={`navbar ${scrolling ? 'scrolled' : ''}`}>
            <Link to='home' smooth={true} offset={-70} duration={500} spy={true} className="logo"  onClick={() => setIsMobile(false)}>
            <div className="wrapper">
	<Link to="/">
    <svg>
		<text x="50%" y="50%" dy=".35em" text-anchor="middle">
			WesttyCode
		</text>
	</svg></Link>
</div>
            </Link>
            <div className={`nav-link ${isMobile ? "mobile-link active" : ""}`}>
                <li>
                <Link style={NavLinks} to='home' smooth={true} offset={-70} duration={500} spy={true}   onClick={() => setIsMobile(false)}  >HOME</Link>
                </li>
                <li>
                <Link style={NavLinks}  to='about' smooth={true} offset={-70} duration={500} spy={true}    onClick={() => setIsMobile(false)} >ABOUT</Link>
                </li>
                <li>
                <Link style={NavLinks}  to='skill' smooth={true} offset={-70} duration={500} spy={true}    onClick={() => setIsMobile(false)} >SKILLS</Link>
                </li>
                <li>
                <Link style={NavLinks}  to='services' smooth={true} offset={-70} duration={500} spy={true}    onClick={() => setIsMobile(false)} >SERVICES</Link>
                </li>
                <li>
                <Link  style={NavLinks}  to='portfolio' smooth={true} offset={-70} duration={500} spy={true}   onClick={() => setIsMobile(false)}>PORTFOLIO</Link>
                </li>
                <li>
                <Link style={NavLinks} to='contact' smooth={true} offset={-70} duration={500} spy={true}   onClick={() => setIsMobile(false)}  >CONTACT</Link>  
                </li>
            </div>
            <div className="mobile-menu" onClick={handleMenu}>
                {
                    isMobile ? <i className="fa-solid fa-xmark"></i> : <i className="fa-solid fa-bars"></i>
                }
            </div>
        </div>
    )
};

export default Navigation;