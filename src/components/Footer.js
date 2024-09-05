import React, { useContext, useEffect, useState } from "react";
import logo from "../assests/logo (1).png";
import payment from "../assests/payments.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../ShopContext";

const Footer = () => {
  const { PhoneNumber, Logo, Address } = useContext(ShopContext);
  return (
    <footer className="footer bg-dark " style={{ color: "white" }}>
      <div
        className="cta bg-image bg-dark pt-4 pb-5 mb-0"
        // style={{background-image: "url(assets/images/demos/demo-4/bg-5.jpg)"}}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-sm-10 col-md-8 col-lg-6">
              <div className="cta-heading text-center">
                <h3 className="cta-title text-white">Get The Latest Deals</h3>
                <p className="cta-desc text-white">
                  and receive{" "}
                  <span className="font-weight-normal">$20 coupon</span> for
                  first shopping
                </p>
              </div>

              <form action="#">
                <div class="input-group input-group-round">
                  <input
                    type="email"
                    class="form-control form-control-white"
                    placeholder="Enter your Email Address"
                    aria-label="Email Adress"
                    required
                  />
                  <div class="input-group-append">
                    <button
                      class="btn btn-primary"
                      type="submit"
                      style={{ backgroundColor: "#E33334", border: "#E33334" }}
                    >
                      <span>Subscribe</span>
                      <i class="icon-long-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-middle">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-lg-3">
              <div className="widget widget-about">
                <img
                  src={`https://strapi-182529-0.cloudclusters.net${Logo?.data?.attributes?.url}`}
                  className="footer-logo"
                  style={{
                    width: "150px",
                    height: "84px",
                  }}
                  alt="Footer Logo"
                  width="105"
                  height="25"
                />
                <p style={{ color: "white" }}>
                  <span style={{ fontWeight: "bold" }}>Address: </span>
                  {Address}
                </p>

                <div className="widget-call">
                  <i className="icon-phone" style={{ color: "white" }}></i>
                  Got Question? Call us 24/7
                  <a href="tel:#" style={{ color: "#e33434" }}>
                    {PhoneNumber && PhoneNumber[0]?.PhoneNumber}
                  </a>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-3">
              <div className="widget">
                <h4
                  className="widget-title"
                  style={{
                    color: "white",
                    marginLeft: "5%",
                  }}
                >
                  Useful Links
                </h4>

                <ul>
                  <li style={{ marginBottom: "10px" }}>
                    <a href="#" style={{ textDecoration: "none" }}>
                      Our Services
                    </a>
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    <a href="#" style={{ textDecoration: "none" }}>
                      How to shop on I Gadget
                    </a>
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    <a href="faq.html" style={{ textDecoration: "none" }}>
                      FAQ
                    </a>
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    <a href="contact.html" style={{ textDecoration: "none" }}>
                      Contact us
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-sm-6 col-lg-3">
              <div className="widget">
                <h4
                  className="widget-title"
                  style={{ color: "white", marginLeft: "5%" }}
                >
                  Customer Service
                </h4>

                <ul>
                  <li style={{ marginBottom: "10px" }}>
                    <a href="#" style={{ textDecoration: "none" }}>
                      Payment Methods
                    </a>
                  </li>

                  <li style={{ marginBottom: "10px" }}>
                    <a href="#" style={{ textDecoration: "none" }}>
                      Terms and conditions
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-sm-6 col-lg-3">
              <div className="widget">
                <h4
                  className="widget-title"
                  style={{ color: "white", marginLeft: "5%" }}
                >
                  My Account
                </h4>

                <ul>
                  <li style={{ marginBottom: "10px" }}>
                    <a href="#" style={{ textDecoration: "none" }}>
                      Sign In
                    </a>
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    <a href="cart.html" style={{ textDecoration: "none" }}>
                      View Cart
                    </a>
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    <a href="#" style={{ textDecoration: "none" }}>
                      My Wishlist
                    </a>
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    <a href="#" style={{ textDecoration: "none" }}>
                      Track My Order
                    </a>
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    <a href="#" style={{ textDecoration: "none" }}>
                      Help
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p className="footer-copyright" style={{ color: "white" }}>
            Copyright © 2024 I2 Square gadgets. All Rights Reserved.
          </p>
          <figure className="footer-payments">
            <p style={{ color: "white" }}>
              Design & Develop by{" "}
              <Link
                to="https://www.ftssolution.tech/"
                target="_blank"
                style={{
                  fontSize: "15px",
                  fontWeight: "bold",
                  color: "#e33434",
                }}
                onMouseOver={(e) => {
                  e.target.style.color = "#e34e3d";
                }}
                onMouseOut={(e) => {
                  e.target.style.color = "#e33434";
                }}
              >
                FTS Solution Tech
              </Link>
            </p>
          </figure>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
