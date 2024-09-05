import React, { useEffect, useState } from "react";

const ProductsCategory = ({ onCategorySelect }) => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          "https://strapi-182529-0.cloudclusters.net/api/Categories"
        );
        const data = await response.json();
        setCategories(data.data);
      } catch (error) {
        console.error("error fetching categories", error);
      }
    };
    fetchCategories();
  }, []);

  const handleCategorySelect = (categoryName) => {
    setSelectedCategory(categoryName);
    onCategorySelect(categoryName);
  };

  return (
    <div className="heading-right">
      <ul
        className="nav nav-pills nav-border-anim justify-content-center"
        role="tablist"
      >
        <li className="nav-item">
          <a
            className={`nav-link ${selectedCategory === "All" ? "active" : ""}`}
            id="new-all-link"
            data-toggle="tab"
            href="#new-all-tab"
            role="tab"
            aria-controls="new-all-tab"
            aria-selected={selectedCategory === "All"}
            onClick={() => handleCategorySelect("All")}
            style={{
              textDecoration: "none",
              color: selectedCategory === "All" ? "#c91a06" : "",
              cursor: "pointer",
              ":hover": {
                color: "#c91a06",
              },
            }}
          >
            All
          </a>
        </li>
        {categories.map((category) => (
          <li className="nav-item" key={category.id}>
            <a
              className={`nav-link ${
                selectedCategory === category.attributes.Name ? "active" : ""
              }`}
              id={`new-${category.attributes.Name}-link`}
              data-toggle="tab"
              href={`#new-${category.attributes.Name}-tab`}
              role="tab"
              aria-controls={`new-${category.attributes.Name}-tab`}
              aria-selected={selectedCategory === category.attributes.Name}
              onClick={() => handleCategorySelect(category.attributes.Name)}
              style={{
                textDecoration: "none",
                color:
                  selectedCategory === category.attributes.Name
                    ? "#c91a06"
                    : "",
                cursor: "pointer",
                ":hover": {
                  color: "#c91a06",
                },
              }}
            >
              {category.attributes.Name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsCategory;
