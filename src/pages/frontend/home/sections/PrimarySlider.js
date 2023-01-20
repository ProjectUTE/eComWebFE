import { Pagination, Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function PrimarySlider() {
  return (
    <Swiper
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      loop={true}
      spaceBetween={0}
      slidesPerView={1}
      navigation={true}
      pagination={true}
      modules={[Navigation, Pagination, Autoplay]}
    >
      {[...Array(3).keys()].map((item) => (
        <SwiperSlide key={item}>
          <div className="hero-slide hero-slide--1">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="slider-content slider-content--animation">
                    <span className="content-span-1 u-c-secondary">
                      Latest Update Stock
                    </span>
                    <span className="content-span-2 u-c-secondary">
                      30% Off On Electronics
                    </span>
                    <span className="content-span-3 u-c-secondary">
                      Find electronics on best prices, Also Discover most
                      selling products of electronics
                    </span>
                    <span className="content-span-4 u-c-secondary">
                      Starting At
                      <span className="u-c-brand">$1050.00</span>
                    </span>
                    <a
                      className="shop-now-link btn--e-brand"
                      hrefLang="shop-side-version-2.html"
                    >
                      SHOP NOW
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default PrimarySlider;
