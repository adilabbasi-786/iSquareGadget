// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./Swiper.css";

// import required modules
import { Navigation } from "swiper/modules";
import slide from "../assests/slide-1.png";
import axios from "axios";
import React, { useEffect, useState } from "react";

const MySwiperComponent = () => {
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
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          {banners.map((banner, index) => {
            <img src={slide} alt="" />;
          })}
          <h1>hello</h1>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default MySwiperComponent;
