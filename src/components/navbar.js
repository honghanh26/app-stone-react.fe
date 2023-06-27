import React from "react";
import { categories } from "../constants";

export default function Navbar(props) {
  const scrollToPosition = (element) => {
    window.scrollTo({
      top:
        element.offsetTop -
        (props.headerClassName
          ? document.getElementById("wide-nav").clientHeight
          : document.getElementById("wide-nav").clientHeight * 2),
      behavior: "smooth",
    });
  };

  return (
    <div
      id="wide-nav"
      className={`header-bottom wide-nav nav-dark ${props.headerClassName}`}
    >
      <div className="flex-row container">
        <div className="flex-col flex-left">
          <ul className="nav header-nav header-bottom-nav nav-left nav-box nav-size-medium nav-spacing-xsmall nav-uppercase">
            {categories.map((category, idx) => (
              <li
                key={idx}
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-624"
                onClick={() =>
                  null !== category.url
                    ? scrollToPosition(props[category.url].current)
                    : ""
                }
              >
                <span className="p-2 cursor-pointer text-white uppercase">
                  {category.title}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
