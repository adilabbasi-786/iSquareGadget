import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ProductsCategory from "./ProductsCategory";

const Products = () => {
  const navigate = useNavigate();
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://strapi-182529-0.cloudclusters.net/api/Products?populate=*"
        );
        const data = await response.json();
        setAllProducts(data.data);
        setFilteredProducts(data.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredProducts(allProducts);
    } else {
      const filtered = allProducts.filter(
        (product) =>
          product.attributes.category.data.attributes.Name === selectedCategory
      );
      setFilteredProducts(filtered);
    }
  }, [selectedCategory, allProducts]);

  return (
    <div className="container new-arrivals">
      <div className="heading heading-flex mb-3">
        <div className="heading-left">
          <h2 className="title">All Products</h2>
        </div>
        <ProductsCategory onCategorySelect={setSelectedCategory} />
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
            {filteredProducts.map((product) => (
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
                  <img
                    src={`https://strapi-182529-0.cloudclusters.net${product.attributes.Image.data[0].attributes.url}`}
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
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
