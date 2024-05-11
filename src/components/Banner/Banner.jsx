import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Banner.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export function Banner() {
  return (
    <div className="relative -z-10">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://assets-247moms.sfo2.cdn.digitaloceanspaces.com/2018/12/299730-P7FMOH-553.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://upgradedpoints.com/wp-content/uploads/2019/10/Volunteers-and-seedlings.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://assets-global.website-files.com/5f55ff47b6d23a11cb496a69/62c4541187a98590ace22962_dDuZJxDYJIYQ1EbdEEcfCUsRjpM9rfB8kjTKqCN4Cdzv6_FtlHIQjondoGBIDwsC3hb-BFCMMvbkPPkqX1yV8-YI0cmjjfKvKQW60AdUveT0AkCTM3nM4BcTxYrKbdUuamr6yrl37MpE16i6iA.jpeg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://luckclub.ru/images/luckclub/2020/09/dobro-2.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.squarespace-cdn.com/content/v1/58057c43f5e231690375c419/5d799d27-c1f9-460f-8f43-f4ecce0194c6/Gardening-Volunteer-Work+1120.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
