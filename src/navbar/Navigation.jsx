
import { useState } from "react";
import { Link } from "react-scroll";

const Navigation = () => {
    const [isMobile, setIsMobile] = useState(false)

    const handleMenu = () => {
        setIsMobile(!isMobile)
    };

    const closeMenu = () => {
        setIsMobile(false)
    };


    return(
        <div className="navbar-container">
            <Link to='home' smooth={true} offset={-70} duration={500} spy={true} className="logo">
            <div class="wrapper">
	<svg>
		<text x="50%" y="50%" dy=".35em" text-anchor="middle">
			WesttyCode
		</text>
	</svg>
</div>
            </Link>

            <div className={isMobile ? "mobile-link" : "nav-link"} onClick={closeMenu}>
                <li>
                <Link to='home' smooth={true} offset={-70} duration={500} spy={true}  onClick={closeMenu} >HOME</Link>
                </li>
                <li>
                <Link to='about' smooth={true} offset={-70} duration={500} spy={true}   onClick={closeMenu}>ABOUT</Link>
                </li>
                <li>
                <Link to='skill' smooth={true} offset={-70} duration={500} spy={true}   onClick={closeMenu}>SKILLS</Link>
                </li>
                <li>
                <Link to='services' smooth={true} offset={-70} duration={500} spy={true}   onClick={closeMenu}>SERVICES</Link>
                </li>
                <li>
                <Link to='portfolio' smooth={true} offset={-70} duration={500} spy={true}  onClick={closeMenu}>PORTFOLIO</Link>
                </li>
                <li>
                <Link to='contact' smooth={true} offset={-70} duration={500} spy={true}  onClick={closeMenu}>CONTACT</Link>  
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