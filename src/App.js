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
  const graniteSection = useRef(null);
  const marbleSection = useRef(null);
  const categorySection = useRef(null);
  const serviceSection = useRef(null);
  const contactSection = useRef(null);

  return (
    <div className="App">
      <Header
        introRef={introSection}
        graniteRef={graniteSection}
        marbleRef={marbleSection}
        categoryRef={categorySection}
        serviceRef={serviceSection}
        contactRef={contactSection}
      />
      <main className="bg-white">
        <div className="container mx-auto">
          <Title title="GIỚI THIỆU" ref={introSection} />
          <div className="row">
            <div className="col small-12 large-12">
              <div className="col-inner">
                <p>
                  Enim assumenda sed fusce sint quos id officia, adipisicing.
                  Fermentum vel bibendum! Sunt habitasse! Morbi corrupti
                  officia! Consectetuer? Fuga nullam! Dicta tortor quidem mi
                  corrupti varius fermentum quam nobis dui pharetra viverra
                  aliquid, incidunt, aperiam faucibus. Error perferendis saepe,
                  nullam convallis eum, sit. Tristique, feugiat purus
                  consequuntur blanditiis eius quam dui litora adipisicing
                  congue explicabo mauris, recusandae platea eget mattis amet
                  assumenda inceptos sociosqu earum rhoncus risus felis,
                  vehicula congue. Placerat, parturient sint sequi excepturi
                  elementum, vestibulum, consectetur. Hendrerit, perferendis,
                  potenti. Accumsan parturient et ad, atque repellendus nullam
                  quisque ex hendrerit explicabo harum qui blandit atque minim
                  nisi libero delectus.
                </p>

                <p>
                  Autem quo? Laudantium integer proident hendrerit pariatur
                  corporis laboriosam debitis mollis tellus proident phasellus,
                  necessitatibus. Luctus tempore nisi rhoncus ea animi rhoncus
                  delectus similique quod aptent unde cillum congue blandit
                  lacinia asperiores. Blanditiis hac eu? Accumsan venenatis
                  feugiat, nobis iusto pretium parturient torquent pretium
                  adipiscing dolorem itaque maxime eveniet vestibulum leo, optio
                  aut suspendisse suscipit consectetuer taciti volutpat tellus
                  impedit? Ultricies beatae inceptos, sollicitudin, curae montes
                  praesentium molestiae quam est, irure est bibendum repudiandae
                  adipisicing similique esse auctor hymenaeos quos, occaecati?
                  Perferendis lacus fermentum! Lacinia, porro porttitor
                  consequat volutpat lacinia? Ante rhoncus. Eveniet saepe
                  consequatur dui, iste eget rhoncus! Eget.
                </p>

                <p>
                  Elementum viverra delectus natoque officia tenetur explicabo
                  posuere ut commodo senectus mattis morbi feugiat? Montes
                  exercitation! Cras habitant deserunt wisi torquent nostra
                  accusantium quibusdam accusantium lacus facilisis non!
                  Officiis porta maxime, duis quae eu quisque eligendi, sociosqu
                  ullamco justo pede soluta blanditiis, tenetur aenean, deleniti
                  aliquet luctus laudantium. Quisque vehicula fames, sapien
                  natoque mus proident corrupti. Minus tempore, possimus
                  expedita magnam eveniet! Consequuntur ea? Impedit dolorum
                  autem cillum cillum nostrum! Earum nemo, dictum, magna omnis
                  assumenda aenean, eum quia aut velit wisi? Dolores metus!
                  Consequatur? Dis quod natoque? Condimentum, officia minus
                  corrupti. Bibendum aliquip tempus, perferendis! Euismod fuga!
                  Luctus dignissim.
                </p>
              </div>
            </div>
          </div>
          <Title title="ĐÁ GRANITE" ref={graniteSection} />
          <div className="row">
            <div className="col small-12 large-12">
              <div className="col-inner">
                <ul className="mb-0">
                  <li>
                    <p>
                      Enim assumenda sed fusce sint quos id officia,
                      adipisicing. Fermentum vel bibendum! Sunt habitasse! Morbi
                      corrupti officia! Consectetuer? Fuga nullam! Dicta tortor
                      quidem mi corrupti varius fermentum quam nobis dui
                      pharetra viverra aliquid, incidunt, aperiam faucibus.
                      Error perferendis saepe, nullam convallis eum, sit.
                      Tristique, feugiat purus consequuntur blanditiis eius quam
                      dui litora adipisicing congue explicabo mauris, recusandae
                      platea eget mattis amet assumenda inceptos sociosqu earum
                      rhoncus risus felis, vehicula congue. Placerat, parturient
                      sint sequi excepturi elementum, vestibulum, consectetur.
                      Hendrerit, perferendis, potenti. Accumsan parturient et
                      ad, atque repellendus nullam quisque ex hendrerit
                      explicabo harum qui blandit atque minim nisi libero
                      delectus.
                    </p>
                  </li>
                  <li>
                    <p>
                      Enim assumenda sed fusce sint quos id officia,
                      adipisicing. Fermentum vel bibendum! Sunt habitasse! Morbi
                      corrupti officia! Consectetuer? Fuga nullam! Dicta tortor
                      quidem mi corrupti varius fermentum quam nobis dui
                      pharetra viverra aliquid, incidunt, aperiam faucibus.
                      Error perferendis saepe, nullam convallis eum, sit.
                      Tristique, feugiat purus consequuntur blanditiis eius quam
                      dui litora adipisicing congue explicabo mauris, recusandae
                      platea eget mattis amet assumenda inceptos sociosqu earum
                      rhoncus risus felis, vehicula congue. Placerat, parturient
                      sint sequi excepturi elementum, vestibulum, consectetur.
                      Hendrerit, perferendis, potenti. Accumsan parturient et
                      ad, atque repellendus nullam quisque ex hendrerit
                      explicabo harum qui blandit atque minim nisi libero
                      delectus.
                    </p>
                  </li>
                  <li>
                    <p>
                      Enim assumenda sed fusce sint quos id officia,
                      adipisicing. Fermentum vel bibendum! Sunt habitasse! Morbi
                      corrupti officia! Consectetuer? Fuga nullam! Dicta tortor
                      quidem mi corrupti varius fermentum quam nobis dui
                      pharetra viverra aliquid, incidunt, aperiam faucibus.
                      Error perferendis saepe, nullam convallis eum, sit.
                      Tristique, feugiat purus consequuntur blanditiis eius quam
                      dui litora adipisicing congue explicabo mauris, recusandae
                      platea eget mattis amet assumenda inceptos sociosqu earum
                      rhoncus risus felis, vehicula congue. Placerat, parturient
                      sint sequi excepturi elementum, vestibulum, consectetur.
                      Hendrerit, perferendis, potenti. Accumsan parturient et
                      ad, atque repellendus nullam quisque ex hendrerit
                      explicabo harum qui blandit atque minim nisi libero
                      delectus.
                    </p>
                  </li>
                  <li>
                    <p>
                      Enim assumenda sed fusce sint quos id officia,
                      adipisicing. Fermentum vel bibendum! Sunt habitasse! Morbi
                      corrupti officia! Consectetuer? Fuga nullam! Dicta tortor
                      quidem mi corrupti varius fermentum quam nobis dui
                      pharetra viverra aliquid, incidunt, aperiam faucibus.
                      Error perferendis saepe, nullam convallis eum, sit.
                      Tristique, feugiat purus consequuntur blanditiis eius quam
                      dui litora adipisicing congue explicabo mauris, recusandae
                      platea eget mattis amet assumenda inceptos sociosqu earum
                      rhoncus risus felis, vehicula congue. Placerat, parturient
                      sint sequi excepturi elementum, vestibulum, consectetur.
                      Hendrerit, perferendis, potenti. Accumsan parturient et
                      ad, atque repellendus nullam quisque ex hendrerit
                      explicabo harum qui blandit atque minim nisi libero
                      delectus.
                    </p>
                  </li>
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
          <Title title="ĐÁ MARBLE" ref={marbleSection} />
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
          <Title title="HẠNG MỤC ĐÁ ỐP LÁT" ref={categorySection} />
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
          <Title title="DỊCH VỤ NGÀNH ĐÁ" ref={serviceSection} />
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
          <Title title="LIÊN HỆ" ref={contactSection} />
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
