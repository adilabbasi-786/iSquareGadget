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
                <div className="input-group input-group-round">
                  <input
                    type="email"
                    className="form-control form-control-white"
                    placeholder="Enter your Email Address"
                    aria-label="Email Adress"
                    required
                  />
                  <div className="input-group-append">
                    <button className="btn btn-primary" type="submit">
                      <span>Subscribe</span>
                      <i className="icon-long-arrow-right"></i>
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
                  <i className="icon-phone"></i>
                  Got Question? Call us 24/7
                  <a href="tel:#">
                    {PhoneNumber && PhoneNumber[0]?.PhoneNumber}
                  </a>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-3">
              <div className="widget">
                <h4 className="widget-title" style={{ color: "white" }}>
                  Useful Links
                </h4>

                <ul className="widget-list">
                  <li>
                    <a href="about.html">About I Gadget</a>
                  </li>
                  <li>
                    <a href="#">Our Services</a>
                  </li>
                  <li>
                    <a href="#">How to shop on I Gadget</a>
                  </li>
                  <li>
                    <a href="faq.html">FAQ</a>
                  </li>
                  <li>
                    <a href="contact.html">Contact us</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-sm-6 col-lg-3">
              <div className="widget">
                <h4 className="widget-title" style={{ color: "white" }}>
                  Customer Service
                </h4>

                <ul className="widget-list">
                  <li>
                    <a href="#">Payment Methods</a>
                  </li>
                  <li>
                    <a href="#">Money-back guarantee!</a>
                  </li>
                  <li>
                    <a href="#">Returns</a>
                  </li>
                  <li>
                    <a href="#">Shipping</a>
                  </li>
                  <li>
                    <a href="#">Terms and conditions</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-sm-6 col-lg-3">
              <div className="widget">
                <h4 className="widget-title" style={{ color: "white" }}>
                  My Account
                </h4>

                <ul className="widget-list">
                  <li>
                    <a href="#">Sign In</a>
                  </li>
                  <li>
                    <a href="cart.html">View Cart</a>
                  </li>
                  <li>
                    <a href="#">My Wishlist</a>
                  </li>
                  <li>
                    <a href="#">Track My Order</a>
                  </li>
                  <li>
                    <a href="#">Help</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p className="footer-copyright">
            Copyright © 2024 I2 Square gadgets. All Rights Reserved.
          </p>
          <figure className="footer-payments">
            <p>
              Design & Develop by{" "}
              <Link
                to="https://www.ftssolution.tech/"
                target="_blank"
                style={{
                  fontSize: "15px",
                  fontWeight: "bold",
                  color: "#007bff",
                }}
              >
                FTS Solution
              </Link>
            </p>
          </figure>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
