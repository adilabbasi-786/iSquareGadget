import React, { useEffect, useState } from "react";

const ProductsCategory = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          "https://strapi-182529-0.cloudclusters.net/api/Categories"
        );
        const data = await response.json();
        console.log("category", data.data[0].attributes.Name);
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
            className="nav-link active"
            id="new-all-link"
            data-toggle="tab"
            href="#new-all-tab"
            role="tab"
            aria-controls="new-all-tab"
            aria-selected="true"
          >
            All
          </a>
        </li>
        {categories.map((category) => (
          <li className="nav-item" key={category.id}>
            <a
              className="nav-link"
              id="new-tv-link"
              data-toggle="tab"
              href="#new-tv-tab"
              role="tab"
              aria-controls="new-tv-tab"
              aria-selected="false"
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
