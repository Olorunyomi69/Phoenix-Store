import { Link } from "react-router-dom";
import FormatQuoteRoundedIcon from "@mui/icons-material/FormatQuoteRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

const Hero = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{ pauseOnMouseEnter: true }}
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
        <section className="bg-blue-200  lg:h-[510px] xl:lg:h-[705px] bg-cover bg-center py-24 ">
          <div className="container mx-auto flex justify-between h-full">
            <div className="flex flex-col justify-center">
              <h1 className="text-7xl leading-[1.1] font-light mb-4">
                Tech That Turns Heads. <br />
              </h1>
              <p className="text-2xl text-semibold">
                Level up your looks with the hottest electronics
              </p>
              <Link to="/">
                <button className="mt-8 ml-5 w-[180px] py-3 rounded-md shadow-2xl bg-[#5cdb95] rotate-6 origin-center transition-all duration-300 cubic-bezier active:translate-y-2">
                  <span className="uppercase ">Shop now</span>
                </button>
              </Link>
            </div>
            <div className="hidden lg:block">
              <img src="./Hero2.png" alt="hero1" />
            </div>
          </div>
        </section>
      </SwiperSlide>

      <SwiperSlide>
        <section className="bg-sky-100  lg:h-[515px] xl:lg:h-[705px] bg-cover bg-center py-24">
          <div className="container mx-auto flex justify-between h-full ">
            <div className="flex flex-col justify-center">
              <h1 className="text-7xl leading-[1.1] font-light mb-4">
                Drip So Fresh, <br /> It's Criminal
              </h1>
              <p className="text-2xl text-semibold">
                Shop new arrivals in men's and women's clothing
              </p>
            </div>
            <div className="hidden lg:block items-end">
              <img
                className="w-full h-[680px]  "
                src="./hero3.png"
                alt="hero1"
              />
            </div>

            <div className="hidden lg:flex flex flex-col justify-around">
              <div className="border border-red-200 p-12 bg-orange-200 rounded-full" >
                <div className=" -skew-y-12">
                  <FormatQuoteRoundedIcon />
                  <p className="text-xl ">
                    You won't regret it.I was amazed at
                    <br /> the quality, I am really satisfied <br /> with the
                    quality of my fit
                  </p>
                  <Link to="/">
                <button className="mt-6 ml-5 w-[180px] py-3 rounded-md shadow-2xl bg-[#5cdb95] active:translate-y-1">
                  <span className="uppercase ">Shop now <ArrowForwardRoundedIcon/></span>
                </button>
              </Link>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </section>
      </SwiperSlide>
    </Swiper>
  );
};

export default Hero;
