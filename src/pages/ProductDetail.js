import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import Loader from "../components/Loader";

const ProductDetail = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [selectedImage, setSelectedImage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the component loads
  }, [id]);
  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      let req = await fetch(
        `https://strapi-182529-0.cloudclusters.net/api/Products?populate=*&[filters][id]=${id}`
      );
      let res = await req.json();
      const images = res.data[0]?.attributes?.Image?.data;
      if (images?.length > 0) {
        setSelectedImage(
          `https://strapi-182529-0.cloudclusters.net${images[0].attributes.url}`
        );
      }
      setLoading(false);
      setData(res.data);
    };
    getData();
  }, [id]);

  const handleImageClick = (url) => {
    setSelectedImage(`https://strapi-182529-0.cloudclusters.net${url}`);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <Header />
      <Navbar />
      <main className={`main ${isModalOpen ? "blur-background" : ""}`}>
        <nav aria-label="breadcrumb" className="breadcrumb-nav border-0 mb-0">
          <div className="container d-flex align-items-center">
            <div className="page-content">
              <div className="container">
                <div className="product-details-top">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="product-gallery product-gallery-vertical">
                        <div className="row">
                          <figure className="product-main-image">
                            <Zoom>
                              <img
                                alt="product image"
                                src={selectedImage}
                                style={{ width: "100%" }}
                              />
                            </Zoom>

                            <a
                              href="#"
                              id="btn-product-gallery"
                              className="btn-product-gallery"
                              onClick={toggleModal}
                            >
                              <i className="icon-arrows"></i>
                            </a>
                          </figure>

                          <div
                            id="product-zoom-gallery"
                            className="product-image-gallery"
                          >
                            {data[0]?.attributes?.Image?.data.map(
                              (image, index) => (
                                <a
                                  key={index}
                                  className={`product-gallery-item ${
                                    selectedImage.includes(image.attributes.url)
                                      ? "active"
                                      : ""
                                  }`}
                                  href="#"
                                  onClick={() =>
                                    handleImageClick(image.attributes.url)
                                  }
                                >
                                  <img
                                    src={`https://strapi-182529-0.cloudclusters.net${image.attributes.url}`}
                                    alt={`product ${index}`}
                                  />
                                </a>
                              )
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="product-details">
                        <h1 className="product-title">
                          {data[0]?.attributes?.Name}
                          <p>
                            {data[0]?.attributes?.brand.data.attributes.Name}
                          </p>
                        </h1>

                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "80%" }}
                            ></div>
                          </div>
                          <a
                            className="ratings-text"
                            href="#product-review-link"
                            id="review-link"
                          >
                            ( 2 Reviews )
                          </a>
                        </div>

                        <div
                          className="product-price"
                          style={{ color: "#e34e3d" }}
                        >
                          {data[0]?.attributes?.Price} RS
                        </div>

                        <div className="product-content">
                          <div className="product-details-tab">
                            <ul
                              className="nav nav-pills justify-content-center"
                              role="tablist"
                            >
                              <li className="nav-item">
                                <a
                                  className="nav-link"
                                  id="product-desc-link"
                                  data-toggle="tab"
                                  href="#product-desc-tab"
                                  role="tab"
                                  aria-controls="product-desc-tab"
                                  aria-selected="true"
                                >
                                  Description
                                </a>
                              </li>
                            </ul>
                            <p>{data[0]?.attributes?.Description}</p>
                          </div>
                        </div>

                        <div className="product-details-footer">
                          <div className="product-cat">
                            <span>Category:</span>
                            {data[0]?.attributes?.category.data.attributes.Name}
                          </div>

                          {/* <div className="social-icons social-icons-sm">
                            <span className="social-label">Share:</span>
                            <a
                              href="#"
                              className="social-icon"
                              title="Facebook"
                              target="_blank"
                            >
                              <i className="icon-facebook-f"></i>
                            </a>
                            <a
                              href="#"
                              className="social-icon"
                              title="Twitter"
                              target="_blank"
                            >
                              <i className="icon-twitter"></i>
                            </a>
                            <a
                              href="#"
                              className="social-icon"
                              title="Instagram"
                              target="_blank"
                            >
                              <i className="icon-instagram"></i>
                            </a>
                            <a
                              href="#"
                              className="social-icon"
                              title="Pinterest"
                              target="_blank"
                            >
                              <i className="icon-pinterest"></i>
                            </a>
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </main>
      {isModalOpen && (
        <div className="modal-overlay" onClick={toggleModal}>
          <div className="modal-content">
            <img
              src={selectedImage}
              alt="Enlarged product"
              className="enlarged-image"
            />
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default ProductDetail;
