import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styles from "../styles/popup.module.css";
import Image from "next/image";
import char1 from "../image/char1.png";
import char2 from "../image/char2.png";
import char3 from "../image/char3.png";
import char4 from "../image/char4.png";
import char5 from "../image/char5.png";

export default function Popup() {
  return (
    <div>
      <div className={styles.container}>
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
    </div>
  );
}
