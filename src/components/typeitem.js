import React from "react";

export default function TypeItem({ title, img }) {
  return (
    <div className="product-small col has-hover product type-product status-publish first instock has-post-thumbnail shipping-taxable product-type-simple">
      <div className="col-inner">
        <div className="badge-container absolute left top z-1" />
        <div className="product-small box">
          <div className="box-image">
            <div className="image-zoom">
              {" "}
              <img
                width={450}
                height={338}
                src={img}
                data-src={img}
                className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail lazy-load-active"
                alt={title}
                loading="lazy"
              />
            </div>
          </div>
          <div className="box-text box-text-products text-center grid-style-2">
            <div className="title-wrapper">
              <p className="name product-title woocommerce-loop-product__title h-6">
                {title}
              </p>
            </div>
            <div className="price-wrapper h-0" />
          </div>
        </div>
      </div>
    </div>
  );
}
