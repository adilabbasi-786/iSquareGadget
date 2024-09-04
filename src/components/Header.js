import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faBars,
  faSearch,
  faRandom,
  faHeart,
  faShoppingCart,
  faTimes,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../assests/logo (1).png";
import product1 from "../assests/demo-4/products/product-5.jpg";
import product2 from "../assests/demo-4/products/product-6.jpg";
import { ShopContext } from "../ShopContext";

const Header = () => {
  const { PhoneNumber, Logo } = useContext(ShopContext);
  return (
    <div className="page-wrapper">
      <header className="header header-intro-clearance header-4">
        <div className="header-top" style={{ marginTop: "5px" }}>
          <div className="container">
            <div className="header-left">
              <a href="tel:#">
                <FontAwesomeIcon icon={faPhone} />{" "}
                {PhoneNumber && PhoneNumber[0]?.PhoneNumber}
              </a>
            </div>

            <div className="header-right">
              <ul className="top-menu">
                <li>
                  <a href="#">Links</a>
                  <ul>
                    <li>
                      <a href="#signin-modal" data-toggle="modal">
                        Sign in / Sign up
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Header2 */}
        <div className="header-middle">
          <div className="container">
            <div className="header-left">
              <button className="mobile-menu-toggler">
                <span className="sr-only">Toggle mobile menu</span>
                <FontAwesomeIcon icon={faBars} />
              </button>

              <a href="/" className="logo">
                <img
                  src={`https://strapi-182529-0.cloudclusters.net${Logo?.data?.attributes?.url}`}
                  alt="Molla Logo"
                  width="105"
                  height="25"
                />
              </a>
            </div>

            <div className="header-center">
              <div className="header-search header-search-extended header-search-visible d-none d-lg-block">
                <a href="#" className="search-toggle" role="button">
                  <FontAwesomeIcon icon={faSearch} />
                </a>
                <form action="#" method="get">
                  <div className="header-search-wrapper search-wrapper-wide">
                    <label htmlFor="q" className="sr-only">
                      Search
                    </label>
                    <button className="btn btn-primary" type="submit">
                      <FontAwesomeIcon icon={faSearch} />
                    </button>
                    <input
                      type="search"
                      className="form-control"
                      name="q"
                      id="q"
                      placeholder="Search product ..."
                      required
                    />
                  </div>
                </form>
              </div>
            </div>

            {/* <div className="header-right">
              <div className="dropdown compare-dropdown">
                <a
                  href="#"
                  className="dropdown-toggle"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  data-display="static"
                  title="Compare Products"
                  aria-label="Compare Products"
                >
                  <div className="icon">
                    <FontAwesomeIcon icon={faRandom} />
                  </div>
                  <p>Compare</p>
                </a>

                <div className="dropdown-menu dropdown-menu-right">
                  <ul className="compare-products">
                    <li className="compare-product">
                      <a href="#" className="btn-remove" title="Remove Product">
                        <FontAwesomeIcon icon={faTimes} />
                      </a>
                      <h4 className="compare-product-title">
                        <a href="product.html">Blue Night Dress</a>
                      </h4>
                    </li>
                    <li className="compare-product">
                      <a href="#" className="btn-remove" title="Remove Product">
                        <FontAwesomeIcon icon={faTimes} />
                      </a>
                      <h4 className="compare-product-title">
                        <a href="product.html">White Long Skirt</a>
                      </h4>
                    </li>
                  </ul>

                  <div className="compare-actions">
                    <a href="#" className="action-link">
                      Clear All
                    </a>
                    <a href="#" className="btn btn-outline-primary-2">
                      <span>Compare</span>
                      <FontAwesomeIcon icon={faArrowRight} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="wishlist">
                <a href="wishlist.html" title="Wishlist">
                  <div className="icon">
                    <FontAwesomeIcon icon={faHeart} />
                    <span className="wishlist-count badge">3</span>
                  </div>
                  <p>Wishlist</p>
                </a>
              </div>

              <div className="dropdown cart-dropdown">
                <a
                  href="#"
                  className="dropdown-toggle"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  data-display="static"
                >
                  <div className="icon">
                    <FontAwesomeIcon icon={faShoppingCart} />
                    <span className="cart-count">2</span>
                  </div>
                  <p>Cart</p>
                </a>

                <div className="dropdown-menu dropdown-menu-right">
                  <div className="dropdown-cart-products">
                    <div className="product">
                      <div className="product-cart-details">
                        <h4 className="product-title">
                          <a href="product.html">
                            Beige knitted elastic runner shoes
                          </a>
                        </h4>

                        <span className="cart-product-info">
                          <span className="cart-product-qty">1</span>x $84.00
                        </span>
                      </div>

                      <figure className="product-image-container">
                        <a href="product.html" className="product-image">
                          <img src={product1} alt="product" />
                        </a>
                      </figure>
                      <a href="#" className="btn-remove" title="Remove Product">
                        <FontAwesomeIcon icon={faTimes} />
                      </a>
                    </div>

                    <div className="product">
                      <div className="product-cart-details">
                        <h4 className="product-title">
                          <a href="product.html">
                            Blue utility pinafore denim dress
                          </a>
                        </h4>

                        <span className="cart-product-info">
                          <span className="cart-product-qty">1</span>x $76.00
                        </span>
                      </div>

                      <figure className="product-image-container">
                        <a href="product.html" className="product-image">
                          <img src={product2} alt="product" />
                        </a>
                      </figure>
                      <a href="#" className="btn-remove" title="Remove Product">
                        <FontAwesomeIcon icon={faTimes} />
                      </a>
                    </div>
                  </div>

                  <div className="dropdown-cart-total">
                    <span>Total</span>
                    <span className="cart-total-price">$160.00</span>
                  </div>

                  <div className="dropdown-cart-action">
                    <a href="cart.html" className="btn btn-primary">
                      View Cart
                    </a>
                    <a
                      href="checkout.html"
                      className="btn btn-outline-primary-2"
                    >
                      <span>Checkout</span>
                      <FontAwesomeIcon icon={faArrowRight} />
                    </a>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
