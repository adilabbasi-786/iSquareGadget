import React, { useEffect, useState } from "react";
import product1 from "../assests/demo-4/products/product-1.jpg";
import product2 from "../assests/demo-4/products/product-2.jpg";
import product3 from "../assests/demo-4/products/product-3.jpg";
import { Link, useNavigate } from "react-router-dom";
import ProductsCategory from "./ProductsCategory";

const Products = () => {
  const navigate = useNavigate();
  const [AllProducts, setAllProducts] = useState([]);
  useEffect(() => {
    const fetProducts = async () => {
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
    fetProducts();
  }, []);
  return (
    <div className="container new-arrivals">
      <div className="heading heading-flex mb-3">
        <div className="heading-left">
          <h2 className="title">All Products</h2>
        </div>

        <ProductsCategory />
      </div>
      <div className="tab-content tab-content-carousel just-action-icons-sm">
        <div
          className="tab-pane p-0 fade show active"
          id="new-all-tab"
          role="tabpanel"
          aria-labelledby="new-all-link"
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "20px",
            }}
          >
            {AllProducts.map((product) => (
              <div
                className="product product-2"
                style={{
                  flex: "1 1 22%",
                  cursor: "pointer",
                }}
                key={product.id}
                onClick={() => navigate(`/productDetails/${product.id}`)}
              >
                <figure className="product-media">
                  <span className="product-label label-circle label-top">
                    Top
                  </span>
                  <img
                    src={product1}
                    alt="Product image"
                    className="product-image"
                  />

                  <div className="product-action-vertical">
                    <a
                      href="#"
                      className="btn-product-icon btn-wishlist"
                      title="Add to wishlist"
                    ></a>
                  </div>

                  <div className="product-action">
                    <a
                      href="#"
                      className="btn-product btn-cart"
                      title="Add to cart"
                    >
                      <span>add to cart</span>
                    </a>
                    <a
                      href="popup/quickView.html"
                      className="btn-product btn-quickview"
                      title="Quick view"
                    >
                      <span>quick view</span>
                    </a>
                  </div>
                </figure>

                <div className="product-body">
                  <div className="product-cat">
                    {console.log(
                      "priduct",
                      product.attributes.category.data.attributes.Name
                    )}
                    <a href="#">
                      {product.attributes.category.data.attributes.Name}
                    </a>
                  </div>
                  <h3 className="product-title">
                    <a href="product.html">{product.attributes.Name}</a>
                  </h3>
                  <div className="product-price">
                    {product.attributes.Price} RS
                  </div>
                  <div className="ratings-container">
                    <div className="ratings">
                      <div
                        className="ratings-val"
                        style={{ width: "100%" }}
                      ></div>
                    </div>
                    <span className="ratings-text">( 4 Reviews )</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>
        {`
          @media (max-width: 768px) {
            .container.new-arrivals {
              display: block;
            }
            .container.new-arrivals .product-2 {
              flex: 1 1 100%;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Products;
