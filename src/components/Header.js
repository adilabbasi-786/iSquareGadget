import React, { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { faPhone, faBars, faSearch } from "@fortawesome/free-solid-svg-icons";
import { ShopContext } from "../ShopContext";
import Search from "./Search";
import Loader from "./Loader"; // Import your Loader component

const Header = () => {
  const { PhoneNumber, Logo, EMail } = useContext(ShopContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [showSearch, setShowSearch] = useState(false); // State to control Search component visibility
  const [logoLoaded, setLogoLoaded] = useState(false); // Track logo load status
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://strapi-182529-0.cloudclusters.net/api/Products?populate=*"
        );
        const data = await response.json();
        setAllProducts(data.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  const handleSearchClick = () => {
    setShowSearch(true); // Show the Search component when the input is clicked
  };

  const handleProductClick = (product) => {
    setSearchTerm(""); // Clear search input
    setFilteredProducts([]); // Clear search results
    navigate(`/productDetails/${product.id}`);
    setShowSearch(false); // Hide the Search component after a product is selected
  };

  return (
    <div className="page-wrapper">
      <header className="header header-intro-clearance header-4">
        <div className="header-top " style={{ marginTop: "5px" }}>
          <div className="container">
            <div className="header-left">
              <a
                href="tel:#"
                style={{
                  cursor: "pointer",
                  textDecoration: "none",
                  color: "#333",
                  ":hover": {
                    color: "#c91a06",
                  },
                }}
                onMouseOver={(e) => {
                  e.target.style.color = "#c91a06";
                }}
                onMouseOut={(e) => {
                  e.target.style.color = "#333";
                }}
              >
                <FontAwesomeIcon icon={faPhone} /> Call:{" "}
                {PhoneNumber && PhoneNumber[0]?.PhoneNumber}
              </a>
            </div>

            <div className="header-right">
              <ul className="top-menu">
                <ul>
                  <li>
                    <a
                      href="#signin-modal"
                      data-toggle="modal"
                      style={{
                        cursor: "pointer",
                        textDecoration: "none",
                        color: "#333",
                        ":hover": {
                          color: "#c91a06",
                        },
                      }}
                      onMouseOver={(e) => {
                        e.target.style.color = "#c91a06";
                      }}
                      onMouseOut={(e) => {
                        e.target.style.color = "#333";
                      }}
                    >
                      {EMail && EMail[0].Email}
                    </a>
                  </li>
                </ul>
              </ul>
            </div>
          </div>
        </div>

        <div className="header-middle bg-dark">
          <div
            className="container"
            style={{
              maxHeight: "90px",
            }}
          >
            <div className="header-left">
              <a href="/" className="logo">
                {!logoLoaded && (
                  <div style={{ width: "50px", height: "50px" }}>
                    {" "}
                    {/* Adjust the loader size here */}
                    <Loader />
                  </div>
                )}
                {/* Show loader while the logo is loading */}
                <img
                  src={`https://strapi-182529-0.cloudclusters.net${Logo?.data?.attributes?.url}`}
                  alt="Molla Logo"
                  style={{
                    width: "210px",
                    height: "110px",
                    // marginBottom: "10%",
                    display: logoLoaded ? "block" : "none", // Hide image until it's loaded
                  }}
                  onLoad={() => setLogoLoaded(true)} // Set logoLoaded to true when image is loaded
                />
              </a>
            </div>

            <div className="header-center">
              <div className="header-search header-search-extended header-search-visible d-none d-lg-block">
                <form action="#" method="get">
                  <div className="header-search-wrapper search-wrapper-wide">
                    <label htmlFor="q" className="sr-only">
                      Search
                    </label>
                    <input
                      type="search"
                      className="form-control"
                      name="q"
                      id="q"
                      placeholder="Search product ..."
                      onClick={handleSearchClick} // Trigger the Search component on click
                      readOnly // Prevent typing directly in this input
                    />
                    <button className="btn btn-primary" type="submit">
                      <FontAwesomeIcon icon={faSearch} />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Conditionally render the Search component based on showSearch state */}
      {showSearch && <Search setShowSearch={setShowSearch} />}
    </div>
  );
};

export default Header;
