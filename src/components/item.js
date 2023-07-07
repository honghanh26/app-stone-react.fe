import React from "react";

export default function Item({ title, img }) {
  return (
    <div className="product-small box has-hover box-bounce box-text-bottom">
      <div className="box-image">
        <div className="image-cover">
          {" "}
          <img
            width={450}
            height={338}
            src={img}
            data-src={img}
            className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail lazy-load-active"
            alt={title}
            loading="lazy"
            title="Trang chủ"
          />
        </div>
      </div>
      <div
        className="box-text text-center is-small dark"
        style={{ backgroundColor: "rgb(236, 120, 40)" }}
      >
        <div className="title-wrapper">
          <p className="name product-title woocommerce-loop-product__title h-5 font-bold">
            {title}
          </p>
        </div>
        <div className="price-wrapper h-0" />
      </div>
    </div>
  );
}
