import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Popup() {
  return (
    <div>
      <div className="container">
        <Swiper
          spaceBetween={50}
          slidesPerView={5}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          loop={true}
        >
          <SwiperSlide>
            <Image src={char1} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={char2} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={char3} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={char4} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={char5} />
          </SwiperSlide>
        </Swiper>
      </div>

      <style jsx>{`
        .container {
          background-color: black;
        }
      `}</style>
    </div>
  );
}
