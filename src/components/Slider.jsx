import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import javascriptLogo from '../img/logo-javascript.png'
import sassLogo from '../img/sass-logo.png'
import cssLogo from '../img/css.png'
import reactLogo from '../img/React-icon.png'
import { Autoplay } from 'swiper'

function Slider() {
  return (
    
    <div className="absolute bottom-60 left-3/4 flex">
      <div className="w-96 h-96">
        <Swiper
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: true,
          }}
          speed={1000}
          slidesPerView={1}
          effect="fade"
          modules={[Autoplay]}
          className="h-full">
          <SwiperSlide>
            <img src={cssLogo} alt="CssLogo" className="w-20" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={javascriptLogo} alt="JSlogo" className="w-20" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={reactLogo} alt="reactLogo" className="w-20" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={sassLogo} alt="SASS" className="w-20" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export { Slider }
