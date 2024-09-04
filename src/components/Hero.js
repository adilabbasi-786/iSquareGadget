import React, { useContext, useEffect, useState } from "react";
import Slider from "react-slick";
import axios from "axios";
import { ShopContext } from "../ShopContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
  const [bannerData, setBannerData] = useState(null);

  useEffect(() => {
    const fetchBannerData = async () => {
      try {
        const response = await axios.get(
          "https://strapi-182529-0.cloudclusters.net/api/shop-detail?populate[banner][populate]=*"
        );
        setBannerData(response.data);
      } catch (error) {
        console.error("Error fetching banner data:", error);
      }
    };

    fetchBannerData();
  }, []);

  if (!bannerData) {
    return <div>Loading...</div>;
  }

  const banners = bannerData?.data?.attributes?.banner;

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <div className="page-wrapper">
      <main className="main">
        <div className="intro-slider-container mb-5">
          <Slider {...settings}>
            {banners.map((banner, index) => {
              const backgroundImageUrl = `https://strapi-182529-0.cloudclusters.net${banner.image.data[0].attributes.url}`;
              return (
                <div key={index}>
                  <div
                    className="intro-slide"
                    style={{
                      backgroundImage: `url(${backgroundImageUrl})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      // height: "500px",
                      position: "relative",
                    }}
                  >
                    <div
                      className="container intro-content"
                      style={{
                        position: "absolute",
                        top: "30%",
                        left: "10%",
                      }}
                    >
                      <div
                        className="row justify-content-end"
                        style={{ marginLeft: "300px" }}
                      >
                        <div className="col-auto col-sm-7 col-md-6 col-lg-5">
                          <h3 className="intro-subtitle text-primary">
                            New Arrival
                          </h3>
                          <h1 className="intro-title">{banner.text}</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </main>
    </div>
  );
};

export default Hero;
