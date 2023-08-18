import { Link } from "react-scroll";
import React, {Component} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default class Fade extends Component {
    render() {
      const settings = {
        dots: false,
        fade: true,
        infinite: true,
        arrows: false,
        autoplay: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      return (
        <div className="homeslider-container">
          
          <Slider {...settings} className="home-slide">
            <div className="home-slider">
        <h4><span>HEL</span>LO!, THIS IS WASIU </h4>
            <h1><span>CR</span>EATIVE <span>SOFTWARE ENGINEER</span></h1>
        <div className="home-button">
          <Link to="contact" className="button-link">
            <button className="button-1">Hire me</button>
          </Link>
          <Link to="contact" className="button-link">
            <button className="button-2">DOWNLOAD CV</button>
          </Link>
        </div>
            </div>
            
            <div className="home-slider">
            <h4><span>WE</span>B DESIGN AND DEVELOPMENT</h4>
        <h1><span>Hi</span>, I am <span>Wasiu</span>, <span>th</span>is is my <span>fa</span>vo<span>urite work</span> </h1>
        <div className="home-button">
          <Link to="contact" className="button-link">
            <button className="button-2">DOWNLOAD CV</button>
          </Link>
          <Link to="contact" className="button-link">
            <button className="button-1">Hire me</button>
          </Link>
        </div>
            </div>

          </Slider>
        </div>
      );
    }
  }