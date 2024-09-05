import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ProductsCategory from "./ProductsCategory";
import Loader from "./Loader";

const Products = () => {
  const navigate = useNavigate();
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loading, setLoading] = useState(true); // Loader state

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true); // Show loader while fetching
      try {
        const response = await fetch(
          "https://strapi-182529-0.cloudclusters.net/api/Products?populate=*"
        );
        const data = await response.json();
        setAllProducts(data.data);
        setFilteredProducts(data.data);
        setLoading(false); // Hide loader after fetching
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false); // Hide loader in case of error
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

  // Show loader while loading
  if (loading) {
    return <Loader />;
  }

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
          <div className="row">
            {filteredProducts.map((product) => (
              <div
                className="col-md-3 col-sm-6 mb-4"
                key={product.id}
                style={{ cursor: "pointer" }}
                onClick={() => navigate(`/productDetails/${product.id}`)}
              >
                <div className="product product-2" style={{ height: "400px" }}>
                  <figure
                    className="product-media"
                    style={{ height: "250px", overflow: "hidden" }}
                  >
                    <img
                      src={`https://strapi-182529-0.cloudclusters.net${product.attributes.Image.data[0].attributes.url}`}
                      alt="Product image"
                      className="product-image"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover", // Ensures the image covers the container without distortion
                      }}
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
              </div>
            ))}

            {/* Ensure 4 columns per row with empty placeholders */}
            {filteredProducts.length % 4 !== 0 &&
              Array.from(
                { length: 4 - (filteredProducts.length % 4) },
                (_, index) => (
                  <div
                    className="col-md-3 col-sm-6 mb-4"
                    key={`empty-${index}`}
                  >
                    <div className="product-placeholder"></div>
                  </div>
                )
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
