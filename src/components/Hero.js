import React, { useEffect, useState } from "react";
import { Carousel, Container } from "react-bootstrap";
import axios from "axios";
import "./Swiper.css";
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

  return (
    <Container fluid className="p-0">
      <Carousel>
        {banners.map((banner, index) => {
          const backgroundImageUrl = `https://strapi-182529-0.cloudclusters.net${banner.image.data[0].attributes.url}`;
          return (
            <Carousel.Item key={index}>
              <div
                style={{
                  backgroundImage: `url(${backgroundImageUrl})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "50vh", // Adjust height for mobile
                  width: "100%",
                }}
              >
                <Carousel.Caption
                  style={{
                    textAlign: "left",
                    top: "30%",
                    transform: "translateY(-30%)",
                    position: "relative",
                  }}
                >
                  <div className="banner-text">
                    <h3
                      style={{
                        fontSize: "4rem",
                        color: "black",
                        marginLeft: "40%",
                      }}
                      className="banner-heading"
                    >
                      New Arrival
                    </h3>
                    <h1
                      style={{
                        fontSize: "2rem",
                        lineHeight: "1.2",
                        color: "red",
                        marginLeft: "40%",
                        whiteSpace: "pre-wrap", // Allows line breaks between words
                      }}
                      className="banner-text"
                    >
                      {banner.text}
                    </h1>
                  </div>
                </Carousel.Caption>
              </div>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </Container>
  );
};

export default Hero;
