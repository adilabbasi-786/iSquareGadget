// ShopContext.js
import React, { createContext, useState, useEffect } from "react";

export const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  const [shopDetails, setShopDetails] = useState({});

  useEffect(() => {
    const fetchShopDetails = async () => {
      try {
        const response = await fetch(
          "https://strapi-182529-0.cloudclusters.net/api/shop-detail?populate=*"
        );
        const data = await response.json();
        setShopDetails(data.data.attributes);
        console.log("shop", shopDetails);
      } catch (error) {
        console.error("Error fetching shop details:", error);
      }
    };

    fetchShopDetails();
  }, []);

  return (
    <ShopContext.Provider value={shopDetails}>{children}</ShopContext.Provider>
  );
};
