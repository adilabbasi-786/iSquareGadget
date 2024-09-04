import React, { useEffect, useState } from "react";

const ProductsCategory = ({ onCategorySelect }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          "https://strapi-182529-0.cloudclusters.net/api/Categories"
        );
        const data = await response.json();
        setCategories(data.data);
      } catch (error) {
        console.error("error fetching error", error);
      }
    };
    fetchCategories();
  }, []);

  return (
    <div className="heading-right">
      <ul
        className="nav nav-pills nav-border-anim justify-content-center"
        role="tablist"
      >
        <li className="nav-item">
          <a
            className="nav-link "
            id="new-all-link"
            data-toggle="tab"
            href="#new-all-tab"
            role="tab"
            aria-controls="new-all-tab"
            aria-selected="true"
            onClick={() => onCategorySelect("All")}
          >
            All
          </a>
        </li>
        {categories.map((category) => (
          <li className="nav-item" key={category.id}>
            <a
              className="nav-link"
              id={`new-${category.attributes.Name}-link`}
              data-toggle="tab"
              href={`#new-${category.attributes.Name}-tab`}
              role="tab"
              aria-controls={`new-${category.attributes.Name}-tab`}
              aria-selected="false"
              onClick={() => onCategorySelect(category.attributes.Name)}
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
