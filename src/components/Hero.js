import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import axios from "axios";
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
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    responsive: [
      {
        breakpoint: 768, // Mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 1024, // Tablet
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
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

                      position: "relative",
                    }}
                  >
                    <div
                      className="container intro-content"
                      style={{
                        position: "absolute",
                        top: "30%",
                        left: "60%",
                        right: "10%",
                        textAlign: "left",
                      }}
                    >
                      <div className="row">
                        <div className="col-12">
                          <h3
                            className="intro-subtitle text-primary"
                            style={{ fontSize: "2rem" }} // Responsive font size
                          >
                            New Arrival
                          </h3>
                          <h1
                            className="intro-title"
                            style={{
                              fontSize: "3rem", // Responsive font size
                              lineHeight: "1.2",
                            }}
                          >
                            {banner.text}
                          </h1>
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
