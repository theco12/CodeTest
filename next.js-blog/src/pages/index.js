import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import char1 from "../image/char1.png";
import char2 from "../image/char2.png";
import char3 from "../image/char3.png";
import char4 from "../image/char4.png";
import char5 from "../image/char5.png";
import forest1 from "../image/forest1.png";
import forest2 from "../image/forest2.png";
import forest3 from "../image/forest3.png";
import forest4 from "../image/forest4.png";
import forest5 from "../image/forest5.png";
import banner1 from "../image/banner1.png";
import banner2 from "../image/banner2.png";
import banner3 from "../image/banner3.png";

export default function Home() {
  return (
    <div>
      <div> character 소개 </div>

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

      <Swiper
        spaceBetween={50}
        slidesPerView={5}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        loop={true}
      >
        <SwiperSlide>
          <Image src={forest1} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={forest2} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={forest3} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={forest4} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={forest5} />
        </SwiperSlide>
      </Swiper>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        loop={true}
      >
        <SwiperSlide>
          <Image src={banner1} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={banner2} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={banner3} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
