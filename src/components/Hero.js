import React from "react";
import slider1 from "../assests/demo-4/slider/slide-1.png";
import slider2 from "../assests/demo-4/slider/slide-2.png";

const Hero = () => {
  return (
    <div class="page-wrapper">
      <main class="main">
        <div className="intro-slider-container mb-5">
          <div
            className="intro-slide"
            style={{
              backgroundImage: `url(${slider2})`,
            }}
          >
            <div className="container intro-content">
              <div className="row justify-content-end">
                <div className="col-auto col-sm-7 col-md-6 col-lg-5">
                  <h3 className="intro-subtitle text-primary">New Arrival</h3>
                  <h1 className="intro-title">
                    Apple iPad Pro <br />
                    12.9 Inch, 64GB{" "}
                  </h1>

                  <div className="intro-price">
                    <sup>Today:</sup>
                    <span className="text-primary">
                      $999<sup>.99</sup>
                    </span>
                  </div>

                  <a href="category.html" className="btn btn-primary btn-round">
                    <span>Shop More</span>
                    <i className="icon-long-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Hero;
