import React, { forwardRef, useRef, useState, useEffect } from "react";
import "../assets/css/common.css";
import "../assets/css/iconsae34.css";

import Navbar from "./navbar";

export default forwardRef(function Header(props, ref) {
  const [headerClassName, setHeaderClassName] = useState("");
  const navRef = useRef(null);
  const {
    introRef,
    graniteRef,
    marbleRef,
    categoryRef,
    serviceRef,
    contactRef,
  } = props;

  const handleScroll = (headerClassName) => {
    const position = navRef.current.offsetTop + navRef.current.offsetHeight;

    if (headerClassName !== "stuck" && window.pageYOffset >= position) {
      setHeaderClassName("stuck");
    } else if (headerClassName === "stuck" && window.pageYOffset < position) {
      setHeaderClassName("");
    }
  };

  useEffect(() => {
    window.onscroll = () => handleScroll(headerClassName);
  }, [headerClassName]); // IMPORTANT, This will cause react to update depending on change of this value

  return (
    <header id="header" className="header has-sticky sticky-jump">
      <div className="header-wrapper">
        <div
          id="top-bar"
          className="header-top hide-for-sticky nav-dark uppercase text-3xl py-4"
          ref={navRef}
        >
          <div className="flex-row container justify-center">
            <div className="flex-col">
              <ul className="nav nav-small nav-divided">
                <li className="html custom html_topbar_left text-center">
                  <strong>
                    Đá Ốp Châu Âu - Thể Hiện Đẳng Cấp Ngôi Nhà Bạn
                  </strong>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Navbar
          introRef={introRef}
          graniteRef={graniteRef}
          marbleRef={marbleRef}
          categoryRef={categoryRef}
          serviceRef={serviceRef}
          contactRef={contactRef}
          headerClassName={headerClassName}
        />
        <div className="header-bg-container fill">
          <div className="header-bg-image fill" />
          <div className="header-bg-color fill" />
        </div>
      </div>
    </header>
  );
});
