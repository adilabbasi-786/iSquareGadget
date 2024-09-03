import React, { useEffect, useState } from "react";

import cat1 from "../assests/demo-4/cats/1.png";
import cat2 from "../assests/demo-4/cats/2.png";
import cat3 from "../assests/demo-4/cats/3.png";
import cat4 from "../assests/demo-4/cats/4.png";

const Category = () => {
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
    <div className="container">
      <h2 className="title text-center mb-4">Explore Popular Categories</h2>

      <div className="cat-blocks-container">
        <div className="row">
          {categories.map((category) => (
            <div className="col-6 col-sm-4 col-lg-2" key={category.id}>
              <a href="category.html" className="cat-block">
                <figure>
                  <span>
                    <img src={cat1} alt="Category image" />
                  </span>
                </figure>

                <h3 className="cat-block-title">{category.attributes.Name}</h3>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
