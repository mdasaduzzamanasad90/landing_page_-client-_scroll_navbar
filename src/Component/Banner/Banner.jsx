import "./Banner.css";
import { FaHandshake } from "react-icons/fa";
import { BiDollar } from "react-icons/bi";

const Banner = () => {
  return (
    <div className="banner-bg lg:rounded-[40px] mt-24 md:h-[600px] flex flex-col items-center justify-center text-white text-center p-6 relative overflow-hidden md:mb-20 mb-10">
      {/* Fade/slide animation */}
      <FaHandshake
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="300"
        data-aos-offset="0"
        size={100}
      />
      <h1 className="text-5xl md:text-6xl font-bold mb-4 opacity-0 animate-fadeInUp md:leading-tight">
        Get DAL at a high price, no barriers to entry. Act now!
      </h1>
      <p className="text-lg md:text-xl mb-8 opacity-0 animate-fadeInUp delay-300">
        Higher prices than exchanges, safe and fast, profits beyond your
        imagination.
      </p>
      <div
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="300"
        data-aos-offset="0"
      >
        <button className="btn btn-primary rounded-full md:px-6 py-4 text-lg font-semibold shadow-lg flex items-center gap-3 hover:scale-105 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
          <BiDollar className="text-xl " />
          Free Quote
        </button>
      </div>
    </div>
  );
};

export default Banner;
