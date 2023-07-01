import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import "./assets/css/callNow-22950065d5743df4ac43858dc53777e9.css";

import Header from "./components/header";
import Title from "./components/title";
import Item from "./components/item";
import TypeItem from "./components/typeitem";
import NewsItem from "./components/newsitem";

import banner1 from "./assets/img/banner-1.jpeg";
import banner2 from "./assets/img/banner-2.jpeg";
import banner3 from "./assets/img/banner-3.jpeg";

import { granite, marble, categoryGranite, serviceStone } from "./constants";

function App() {
  const introSection = useRef(null);
  const graniteSection = useRef(null);
  const marbleSection = useRef(null);
  const categorySection = useRef(null);
  const serviceSection = useRef(null);
  const contactSection = useRef(null);

  const settings = {
    autoplay: true,
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

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
        <div className="mb-3">
          <Slider {...settings}>
            <img src={banner1} data-src={banner1} alt="Banner 1" />
            <img src={banner2} data-src={banner2} alt="Banner 2" />
            <img src={banner3} data-src={banner3} alt="Banner 3" />
          </Slider>
        </div>
        <div className="container mx-auto">
          <Title title="GIỚI THIỆU" ref={introSection} />
          <div className="row">
            <div className="col small-12 large-12">
              <div className="col-inner">
                <h3>
                  NHỮNG ĐIỀU LÀM BẠN LO LẮNG KHI LỰA CHỌN ĐƠN VỊ THI CÔNG ĐÁ TỰ
                  NHIÊN CAO CẤP
                </h3>
                <ul>
                  <li>Đâu là đơn vị uy tín trong ngành?</li>
                  <li>Nên lắp loại đá nào phù hợp với nội thất trong nhà? </li>
                  <li>Nên ốp đá tự nhiên hay nhân tạo? </li>
                  <li>Khi lắp đặt có rủi ro không, mức độ an toàn tới đâu? </li>
                  <li>Đá tự nhiên ốp có bền màu, có chống thấm tốt không? </li>
                  <li>
                    Giá cả trên thị trường thế nào, có phù hợp với giá trị chất
                    lượng không?
                  </li>
                  <li>
                    Tiến độ thi công có nhanh không, có chất lượng, vệ sinh an
                    toàn, đúng kỹ thuật không?
                  </li>
                  Những nỗi lo trên của khách hàng là điều mà chúng tôi luôn
                  thấu hiểu và cùng đưa ra những phương án tối ưu.
                </ul>
                <ul className="mb-0">
                  <li>
                    <b className="text-lg">CÔNG TY TNHH XNK ĐÁ CHÂU ÂU</b> và{" "}
                    <b className="text-lg">CÔNG TY TNHH DECOR NỘI THẤT Á ÂU</b>{" "}
                    tự hào là nhà cung cấp, tư vấn, thiết kế, thi công ốp lát đá
                    Châu Âu cao cấp hàng đầu Việt Nam hiện nay. Chúng tôi cung
                    cấp và thi công ốp lát các loại đá tự nhiên cao cấp như đá
                    Granite (hoa cương), đá Marble (cẩm thạch), đá Onyx, đá
                    thạch anh tự nhiên, đá Limestone, đá Travertine,…
                  </li>
                  <li>
                    Hơn 15 năm làm việc với những khách hàng và dự án cao cấp về
                    sản phẩm đá tự nhiên, cùng đội ngũ kỹ sư và công nhân tay
                    nghề cao chúng tôi đã giải quyết tốt tất cả các vướng mắc
                    trên.
                  </li>
                  <li>
                    Các dự án đều được hoàn thành đúng tiến độ, chất lượng và
                    đạt độ chuẩn xác cao tới khách hàng.
                  </li>
                  <li>
                    Công ty chúng tôi với hệ thống Showroom và kho xưởng lớn, đa
                    dạng nguồn hàng. Sản phẩm đá tự nhiên được chọn lọc, nhập
                    khẩu trực tiếp từ Italy, Brazil, Tây Ban Nha, Thổ Nhĩ Kỳ…
                    đem tới sự lựa chọn phong phú và chất lượng.
                  </li>
                  <li>
                    Qua đó chúng tôi tự hào là đối tác chiến lược của các đơn vị
                    thiết kế, hoàn thiện nội ngoại thất với hàng nghìn dự án lớn
                    nhỏ và trên 100 dự án cao cấp mỗi năm ở khắp cả nước.
                  </li>
                  <li>
                    Sự hài lòng của Quý khách hàng chính là mục tiêu lớn nhất mà
                    tập thể công ty chúng tôi luôn hướng tới và gầy dựng mỗi
                    ngày.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <Title title="ĐÁ GRANITE" ref={graniteSection} />
          <div className="row">
            <div className="col small-12 large-12">
              <div className="col-inner">
                Đá granite tự nhiên có độ cứng, độ bền cao cùng khả năng chịu
                lực tốt. Bề mặt đá khá nhẵn và không bị trầy xước, nứt vỡ, biến
                dạng do lực tác động mạnh. Màu sắc của đá tự nhiên rất đẹp mắt
                và độc đáo tạo nên vẻ đẹp thẩm mỹ ấn cao cho công trình.
                <ul className="list-none">
                  <li>
                    <b>- Về kết cấu:</b>
                    <ul className="list-none mt-0 ml-0 mb-3">
                      <li>
                        + Vì kết cấu tinh thể, đá hoa cương có độ cứng cao – đạt
                        7 điểm theo thang điểm Mohs.
                      </li>
                      <li>
                        + Độ dày của đá cho phép chịu được sự va đập mạnh.
                      </li>
                      <li>
                        + Đá hoa cương hầu hết có cấu tạo khối, cứng và xù xì,
                        và được sử dụng rộng rãi làm đá xây dựng.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <b>- Về màu sắc:</b>
                    <ul className="list-none mt-0 ml-0 mb-3">
                      <li>
                        + Đá hoa cương có màu sắc đa dạng tùy vào khoáng vật học
                        của chúng. Ngoài màu sắc đa dạng nhiều dòng đá hoa cương
                        cao cấp còn có sự pha trộn màu sắc và các giải vân đá ấn
                        tượng
                      </li>
                    </ul>
                  </li>
                  <li>
                    <b>- Về tính chất:</b>
                    <ul className="list-none mt-0 ml-0 mb-3">
                      <li>+ Độ bền cao, chống trầy xước và chịu lực tốt. </li>
                      <li>+ Dễ dàng vệ sinh bề mặt giữ được độ sáng bóng. </li>
                      <li>+ Có tính chống thấm và chịu nhiệt tốt. </li>
                    </ul>
                  </li>
                  <li>
                    <b>- Về chi phí giá cả :</b>
                    <ul className="list-none mt-0 ml-0 mb-3">
                      <li>
                        + Chi phí phí tuỳ thuộc vào từng hạng mục và từng loại
                        đá. Giá dao động từ 1.000.000vnđ – 3.000.000vnđ.
                      </li>
                      <li>
                        + Đá hoa cương cao cấp tự nhiên không có mức giá cố định
                        cho từng tấm đá mà phụ thuộc vào kích thước khổ đá, loại
                        đá, yêu cầu cắt xẻ theo kích thước thực tế của công
                        trình, xử lý chống thấm và đánh bóng… Do đó để có mức
                        giá chi tiết tránh phát sinh thêm chi phí trong quá
                        trình thi công .
                      </li>
                      <li>
                        + Đá Granite thường có mức giá rẻ hơn đá Marble và đá
                        Thạch Anh.
                      </li>
                      <li>
                        + Khổ đá : Giá thành đá granite cao cấp phụ thuốc vào
                        khổ đá mà quý khách muốn sử dụng. Slab đá có khổ lớn chi
                        phí và rủi ro cao nên giá thành sẽ cao hơn khổ đá nhỏ.
                      </li>
                      <li>
                        + Lọại đá : Tuỳ thuộc vào loại đá mà đá granite có giá
                        thành khác nhau. Dòng đá nhập khẩu tù các nước như :
                        Brazil, Italia, Ấn Độ,… sẽ có giá thành cao hơn so với
                        những dòng đá của Việt Nam.
                      </li>
                      <li>
                        + Ngoài ra còn tuỳ thuộc vào chi phí gia công chỉ, chống
                        thấm, đánh bóng đá.
                      </li>
                    </ul>
                  </li>
                </ul>
                <b>Những điều cần lưu ý khi thi công đá hoa cương cao cấp. </b>
                <p>
                  Có rất nhiều loại đá hoa cương từ chất lượng cao cấp tới trung
                  bình. Tuy nhiên chất lượng của tay nghề thợ và uy tín đơn vị
                  thi công đá đóng vai trò quan trọng từ giai đoạn lựa chọn đá
                  đến việc đảm bảo độ sắc nét, tinh tế của đá.
                </p>
                <ul className="list-none">
                  <li>
                    <b>
                      <i>- Trước thi công:</i>
                    </b>
                    <p>
                      Khách hàng cần lựa chọn đơn vị tư vấn bán hàng có nhiều
                      kinh nghiệm, uy tín để đảm bảo lựa chọn được loại đá phù
                      hợp có chất lượng tốt, giá thành phù hợp, màu sắc theo
                      mong muốn của gia chủ, kết hợp với lối kiến trúc thiết kế
                      tạo ấn tượng cho toàn bộ không gian. Xử lý thật kỹ bước
                      chống thấm cho đá và đánh bóng đá. Đảm bảo đá có khả năng
                      chống thấm nước tốt, bền bỉ với thời gian và khó bị xước
                      bề mặt.
                    </p>
                  </li>
                  <li>
                    <b>
                      <i>- Trong thi công đá hoa cương:</i>
                    </b>
                    <p>
                      Trong quá trình thi công việc lựa chọn đơn vị thi công có
                      đội kĩ thuật đo đạc, khảo sát công trình có nhiều năm kinh
                      nghiệm giúp giảm thiểu tối đa sai sót trong quá trình gia
                      công, cắt đá, đảm bảo độ hoàn mỹ của các chi tiết ghép, bo
                      vát, cạnh. Việc chống thấm đá cực kỳ quan trọng, đặc biệt
                      là chống thấm cạnh. Rất nhiều đơn vị thi công cắt đá hoa
                      cương tại công trình không xử lý chống thấm cạnh tốt hoặc
                      chống thấm quá nhanh, dung dịch chống thấm không kịp
                      khô…gây ảnh hưởng lớn đến chất lượng công trình. Đối với
                      đá hoa cương, đặc biệt là các dòng đá hoa cương đen kiểu
                      vân như đá Marble khi khách hàng lựa chọn thiết kế theo
                      kiểu sắp xếp đường vân đá hay các loại đá như: cầu thang
                      trải thảm, nền ghép điểm…cần có đội ngũ có kỹ thuật đảm
                      bảo tay nghề để ốp lát theo đúng thiết kế yêu cầu ban đầu.
                    </p>
                  </li>
                  <li>
                    <b>
                      <i>- Sau thi công:</i>
                    </b>
                    <p>
                      Sau thời gian thi công, đá có thể không còn độ bóng, bị
                      thấm, tệ hơn là đá bị bể, vỡ. Vì vậy công tác bảo dưỡng và
                      chăm sóc đá định kỳ là công việc hết sức quan trọng. Khách
                      hàng cần lựa chọn đơn vị thi công đá uy tín, đội ngũ kỹ
                      thuật chắc tay nghề có hệ thống máy móc hiện đại, quy
                      trình, hóa chất xử lý tiên tiến để đảm bảo bề mặt đá luôn
                      được sạch đẹp và sáng bóng.
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
                    title="BÁN ĐÁ HOA CƯƠNG CAO CẤP"
                    img="https://atcstone.vn/wp-content/uploads/2023/02/BAN-DA-HOA-CUONG-CAO-CAP-1-600x375.jpg"
                    desc="“Ở đâu bán đá hoa cương cao cấp chất lượng” là câu "
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
                <h3>
                  <b>ĐÁ ỐP CHÂU ÂU – THỂ HIỆN ĐẲNG CẤP NGÔI NHÀ BẠN !</b>
                </h3>
                <ul className="list-none">
                  <li>
                    - Cung cấp, tư vấn, thiết kế, thi công ốp lát đá Châu Âu cao
                    cấp hàng đầu Việt Nam.
                  </li>
                  <li>
                    - Hotline:{" "}
                    <a href="tel:0908333111">
                      <b>0908.333.111</b>
                    </a>
                  </li>
                  <li>
                    - Website:{" "}
                    <a href="https://daopchauau.vn">https://daopchauau.vn</a>
                  </li>
                  <li>
                    - Email:{" "}
                    <a href="mailto:daopchauau@gmail.com">
                      daopchauau@gmail.com
                    </a>
                  </li>
                  <li>
                    -{" "}
                    <span className="text-lg">
                      CTY TNHH XNK ĐÁ CHÂU ÂU và CTY TNHH DECOR NỘI THẤT Á ÂU
                    </span>
                  </li>
                  <li>
                    - Văn Phòng: 56/3A Văn Chung, Phường 13, Quận Tân Bình, Tp
                    Hồ Chí Minh
                  </li>
                  <li>
                    - Showroom: Số 1, Tam Đa, Phường Long Trường, Tp Thủ Đức, Tp
                    Hồ Chí Minh
                  </li>
                  <li>
                    - Kho xưởng, nhà máy: Cầu Long Đại, Phước Thiện, Phường Long
                    Phước, Tp Thủ Đức, Tp Hồ Chí Minh.
                  </li>
                </ul>
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
      <div className="hotline-phone-ring-wrap">
        <div className="hotline-phone-ring">
          <div className="hotline-phone-ring-circle" />
          <div className="hotline-phone-ring-circle-fill" />
          <div className="hotline-phone-ring-img-circle">
            {" "}
            <a href="tel:0908333111" className="pps-btn-img">
              {" "}
              <img
                src="https://atcstone.vn/wp-content/plugins/floating-click-to-contact-buttons/phone.png"
                alt="Gọi điện thoại"
                width={50}
                data-lazy-src="https://atcstone.vn/wp-content/plugins/floating-click-to-contact-buttons/phone.png"
                className="lazyloaded"
                data-was-processed="true"
              />{" "}
            </a>
          </div>
        </div>{" "}
        <div className="hotline-bar">
          <a href="tel:0908333111"> </a>
          <a href="tel:0908333111">
            {" "}
            <span className="text-hotline">0908.333.111</span>{" "}
          </a>
        </div>{" "}
      </div>
    </div>
  );
}

export default App;
