import { useRef } from "react";
import "./App.css";

import Header from "./components/header";
import Title from "./components/title";
import Item from "./components/item";
import TypeItem from "./components/typeitem";
import NewsItem from "./components/newsitem";

import { granite, marble, categoryGranite, serviceStone } from "./constants";

function App() {
  const introSection = useRef(null);

  return (
    <div className="App">
      <Header />
      <main className="bg-white">
        <div className="container mx-auto">
          <Title title="GIỚI THIỆU" />
          <div className="row" ref={introSection}>
            <div className="col small-12 large-12">
              <div className="col-inner">Chi tiết giới thiệu công ty</div>
            </div>
          </div>
          <Title title="ĐÁ GRANITE" />
          <div className="row">
            <div className="col small-12 large-12">
              <div className="col-inner">
                <ul className="mb-0">
                  <li>Thông tin về đá Granite</li>
                  <li>Ưu</li>
                  <li>Nhược</li>
                  <li>Ứng dụng</li>
                </ul>
              </div>
            </div>
            <div className="col small-12 large-12">
              <div className="col-inner">
                <div className="row equalize-box large-columns-4 medium-columns-3 small-columns-2 row-small has-shadow row-box-shadow-1 row-box-shadow-2-hover">
                  {granite.map((item, idx) => (
                    <TypeItem key={idx} title={item.title} img={item.img} />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <Title title="ĐÁ MARBLE" />
          <div className="row">
            <div className="col small-12 large-12">
              <div className="col-inner">
                <ul className="mb-0">
                  <li>Thông tin về đá Marble</li>
                  <li>Ưu</li>
                  <li>Nhược</li>
                  <li>Ứng dụng</li>
                </ul>
              </div>
            </div>
            <div className="col small-12 large-12">
              <div className="col-inner">
                <div className="row equalize-box large-columns-4 medium-columns-3 small-columns-2 row-small has-shadow row-box-shadow-1 row-box-shadow-2-hover">
                  {marble.map((item, idx) => (
                    <TypeItem key={idx} title={item.title} img={item.img} />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <Title title="HẠNG MỤC ĐÁ ỐP LÁT" />
          <div className="row">
            <div className="col small-12 large-12">
              <div className="col-inner">
                <div className="row equalize-box large-columns-4 medium-columns-3 small-columns-2 row-xsmall row-full-width">
                  {categoryGranite.map((item, idx) => (
                    <div key={idx} className="col">
                      <div className="col-inner">
                        <div className="badge-container absolute left top z-1" />
                        <Item title={item.title} img={item.img} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <Title title="DỊCH VỤ NGÀNH ĐÁ" />
          <div className="row">
            <div className="col small-12 large-12">
              <div className="col-inner">
                <div className="row large-columns-4 medium-columns-1 small-columns-2 has-shadow row-box-shadow-1 row-box-shadow-2-hover">
                  {serviceStone.map((item, idx) => (
                    <NewsItem
                      key={idx}
                      title={item.title}
                      img={item.img}
                      desc={item.desc}
                      zoom={true}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <Title title="CÔNG TRÌNH TIÊU BIỂU" />
          <div className="row">
            <div className="col small-12 large-12">
              <div className="col-inner">
                <div className="row large-columns-4 medium-columns-1 small-columns-2 has-shadow row-box-shadow-1 row-box-shadow-2-hover">
                  <NewsItem
                    title="Giới Thiệu Về Công Ty ATC stone"
                    img="https://atcstone.vn/wp-content/uploads/2021/08/MAU-DA-QUARTZ-TU-NHIEN-2-1-537x400.jpg"
                    desc="Giới Thiệu Về Công Ty Đá Hoa Cương Cao Cấp ATC stone "
                    zoom={true}
                  />
                </div>
              </div>
            </div>
          </div>
          <Title title="LIÊN HỆ" />
          <div className="row">
            <div className="col small-12 large-12">
              <div className="col-inner">
                <form>
                  <div>
                    <label
                      htmlFor="username"
                      className="block text-sm font-medium text-slate-700"
                    >
                      Họ Tên
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="username"
                        id="username"
                        className="px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:shadow-none"
                        defaultValue=""
                      />
                    </div>
                  </div>
                  <div className="mt-6">
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-slate-700"
                    >
                      Điện Thoại
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="phone"
                        id="phone"
                        className="px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:shadow-none"
                        defaultValue=""
                        placeholder=""
                      />
                    </div>
                  </div>
                  <div className="mt-6">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-slate-700"
                    >
                      Email
                    </label>
                    <div className="mt-1">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:shadow-none"
                        defaultValue=""
                        placeholder=""
                      />
                    </div>
                  </div>
                  <div className="mt-6 text-center">
                    <button className="bg-sky-500 hover:bg-sky-700 px-5 py-2.5 text-sm leading-5 rounded-md font-semibold text-white">
                      Gửi
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
