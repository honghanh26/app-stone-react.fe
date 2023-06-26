import React from "react";

import styles from "./styles.module.css";

export default function NewsItem({ title, date, desc, img, zoom }) {
  return (
    <div className="col post-item">
      <div className="col-inner">
        {" "}
        <div className="box box-normal box-text-bottom box-blog-post has-hover">
          <div className="box-image">
            <div
              className={`${zoom ? "image-zoom " : ""}image-cover`}
              style={{ paddingTop: "80%" }}
            >
              {" "}
              <img
                width={400}
                height={400}
                src={img}
                data-src={img}
                className="attachment-medium size-medium wp-post-image lazy-load-active"
                alt="Da hoa cuong cao cap 400x400 - Trang chủ"
                loading="lazy"
                srcSet={`${img} 400w, https://atcstone.vn/wp-content/uploads/2021/12/Da-hoa-cuong-cao-cap-280x280.jpg 280w, https://atcstone.vn/wp-content/uploads/2021/12/Da-hoa-cuong-cao-cap-100x100.jpg 100w, https://atcstone.vn/wp-content/uploads/2021/12/Da-hoa-cuong-cao-cap.jpg 564w`}
                data-srcset={`${img} 400w, https://atcstone.vn/wp-content/uploads/2021/12/Da-hoa-cuong-cao-cap-280x280.jpg 280w, https://atcstone.vn/wp-content/uploads/2021/12/Da-hoa-cuong-cao-cap-100x100.jpg 100w, https://atcstone.vn/wp-content/uploads/2021/12/Da-hoa-cuong-cao-cap.jpg 564w`}
                sizes="(max-width: 400px) 100vw, 400px"
                title="Trang chủ"
              />
            </div>
          </div>
          <div className="box-text text-center">
            <div className="box-text-inner blog-post-inner">
              <h5 className="post-title is-large uppercase font-semibold">
                {title}
              </h5>
              <div className={`is-divider ${styles.divider}`} />
              <p className="from_the_blog_excerpt text-sm">
                {desc}
                [...]
              </p>
            </div>
          </div>
          {date && (
            <div className="badge absolute top post-date badge-outline">
              <div className="badge-inner">
                {" "}
                <span className="post-date-day">30</span>
                <br />
                <span className="post-date-month is-xsmall">Th12</span>
              </div>
            </div>
          )}
        </div>{" "}
      </div>
    </div>
  );
}
