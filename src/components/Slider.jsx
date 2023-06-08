import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import javascriptLogo from '../img/logo-javascript.svg'
import sassLogo from '../img/sass-logo.svg'
import cssLogo from '../img/css.svg'
import reactLogo from '../img/React-icon.svg'
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
            <img src={cssLogo} alt="JavaScript" className="w-20" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={javascriptLogo} alt="TypeScript" className="w-20" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={reactLogo} alt="PHP" className="w-20" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={sassLogo} alt="SASS" className="w-20" />
          </SwiperSlide>
          {/* <SwiperSlide>
            <img src={logo} alt="Docker" className="w-20" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={logo} alt="JetBrains" className="w-20" />
          </SwiperSlide> */}
        </Swiper>
      </div>
    </div>
  )
}

export { Slider }
