import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Responsive extends Component {
  render() {
    var settings = {
      autoplay: true,
      dots: true,
      infinite: true,
      arrows: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      lazyLoad: "ondemand",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="slider-container">
        <Slider {...settings} className="slide">
          <div className="slider">
            <div className="slider-box1">
              <i className="fa-solid fa-quote-left"></i>
              <p>
                The web service exceeded expectations,delivering seamless
                functionality and boosting our online presence. Highly
                recommend.
              </p>
            </div>
            <div className="slider-box2">
              <img
                src="https://media.istockphoto.com/id/613531310/photo/young-and-handsome.jpg?s=612x612&w=0&k=20&c=RJVt3sQQ6uhh9JPSBjgTnnKrYlexIJHLsYMHOr_Dskg="
                alt=""
              />
              <div className="slider-tag">
                <h4>Anifowose G.T</h4>
                <h3>"Agoa Power Smile Limited"</h3>
              </div>
            </div>
          </div>

          <div className="slider">
            <div className="slider-box1">
              <i className="fa-solid fa-quote-left"></i>
              <p>
                The software service transformed our operations, enhancing
                efficiency and accuracy. Grateful for the exceptional support
                and results achieved. 
              </p>
            </div>
            <div className="slider-box2">
              <img
                src="https://www.shutterstock.com/shutterstock/photos/2312294275/display_1500/stock-photo-handsome-hispanic-man-wearing-suit-and-tie-showing-palm-hand-and-doing-ok-gesture-with-thumbs-up-2312294275.jpg"
                alt=""
              />
              <div className="slider-tag">
                <h4>Festus M.J</h4>
                <h3> "Assalaf Global Venture"</h3>
              </div>
            </div>
          </div>

          <div className="slider">
            <div className="slider-box1">
              <i className="fa-solid fa-quote-left"></i>
              <p>
                This software service streamlined our workflow, saving time and
                reducing errors. It's a valuable tool that has greatly improved
                our productivity. Highly satisfied!
              </p>
            </div>
            <div className="slider-box2">
              <img
                src="https://img.freepik.com/free-photo/portrait-expressive-young-man-wearing-formal-suit_273609-6941.jpg?w=2000"
                alt=""
              />
              <div className="slider-tag">
                <h4>Ejiwumi J.A</h4>
                <h3>"Hejitect and Associate"</h3>
              </div>
            </div>
          </div>

          <div className="slider">
            <div className="slider-box1">
              <i className="fa-solid fa-quote-left"></i>
              <p>
                Your web service elevated our online presence. User-friendly
                design and prompt support. Our customers love it. 
                
              </p>
            </div>
            <div className="slider-box2">
              <img
                src="https://i.cbc.ca/1.6699110.1672266615!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/1244905750.jpg"
                alt=""
              />
              <div className="slider-tag">
                <h4>Kelechi .M.J</h4>
                <h3>"Electrik Planet"</h3>
              </div>
            </div>
          </div>

          <div className="slider">
            <div className="slider-box1">
              <i className="fa-solid fa-quote-left"></i>
              <p>
                This software service is a game-changer! It streamlined our
                processes, improved collaboration, and increased efficiency!
              </p>
            </div>
            <div className="slider-box2">
              <img
                src="https://media.istockphoto.com/id/1262964434/photo/what-you-bring-determines-what-you-become.jpg?s=612x612&w=0&k=20&c=lap7B5n-Xik2a_hhB5Z0hRBgmY4pUdXf9OGh6ZZH3EE="
                alt=""
              />
              <div className="slider-tag">
                <h4>Alabewele I.J</h4>
                <h3> "Leeryjay and Resourse"</h3>
              </div>
            </div>
          </div>

          <div className="slider">
            <div className="slider-box1">
              <i className="fa-solid fa-quote-left"></i>
              <p>
                Impeccable web service! It has truly enhanced our operations.
                The user interface is intuitive, and the features are
                remarkable. 
                
              </p>
            </div>
            <div className="slider-box2">
              <img
                src="https://img.freepik.com/free-photo/young-male-entrepreneur-making-eye-contact-against-blue-background_662251-739.jpg"
                alt=""
              />
              <div className="slider-tag">
                <h4>Linus J.A</h4>
                <h3> "Petrolseal Energy Limited"</h3>
              </div>
            </div>
          </div>

          <div className="slider">
            <div className="slider-box1">
              <i className="fa-solid fa-quote-left"></i>
              <p>
                Your web service is a game-changer! It has streamlined our
                processes and elevated our efficiency and prompt customer support make it a top-notch
                solution.
              </p>
            </div>
            <div className="slider-box2">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIEyyVFksn28XREA4WiRbjvhUqr0dYlDRHow&usqp=CAU"
                alt=""
              />
              <div className="slider-tag">
                <h4>Rasheed.M.J</h4>
                <h3>"Ladoja Motors"</h3>
              </div>
            </div>
          </div>

          <div className="slider">
            <div className="slider-box1">
              <i className="fa-solid fa-quote-left"></i>
              <p>
                Your ICT service streamlined our operations, enhanced security,
                and ensured smooth communication. Grateful for the reliable
                support and expertise.
              </p>
            </div>
            <div className="slider-box2">
              <img
                src="https://media.istockphoto.com/id/1332373959/photo/very-happy-young-man-man.jpg?s=612x612&w=0&k=20&c=Du2cXmLD1Q19Ne_mTfO1lg5qr4h2lzZ7PljLNUQO94g="
                alt=""
              />
              <div className="slider-tag">
                <h4>Stephen .A.J</h4>
                <h3> "Millenium Microfinance"</h3>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
