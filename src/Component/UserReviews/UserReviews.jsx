import { Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";

const reviews = [
  {
    id: 1,
    name: "Former financial advisor",
    role: "Financial Advisor (Former)",
    quote:
      "The promise of advance payment gives my clients immense trust, significantly increasing our closing rate.",
    highlight: "Advance payment builds trust",
  },
  {
    id: 2,
    name: "Mr. Zhang",
    role: "Private Client",
    quote:
      "The price is indeed higher than on exchanges, and the funds arrive quickly. Very reliable!",
    highlight: "Fast & reliable funds",
  },
  {
    id: 3,
    name: "A community owner",
    role: "Community Owner",
    quote:
      "Utilizing my community resources, I now earn a substantial monthly passive income that's higher than my main business.",
    highlight: "Higher passive income",
  },
  {
    id: 4,
    name: "A community owner",
    role: "Community Owner",
    quote:
      "Utilizing my community resources, I now earn a substantial monthly passive income that's higher than my main business.",
    highlight: "Higher passive income",
  },
];

const UserReviews = () => {
  return (
    <section
      data-aos="fade-zoom-in"
      data-aos-easing="ease-in-back"
      data-aos-delay="300"
      data-aos-offset="0"
      className="max-w-6xl mx-auto p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg/50 shadow-primary my-10 border border-primary md:my-20"
    >
      {/* Header */}
      <header className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-3">
        <div>
          <h2 data-aos="fade-up"  className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-gray-100">
            User Reviews
          </h2>
          <p data-aos="fade-up" data-aos-delay="600" className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Hand-picked testimonials highlighting trust, speed, and passive
            income.
          </p>
        </div>
        <div data-aos="fade-up" className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
            <Star className="w-4 h-4" />
            Trusted
          </span>
        </div>
      </header>

      {/* Swiper Carousel */}
      <Swiper
        slidesPerView={3}
        spaceBetween={24}
        loop={true}
        freeMode={true}
        navigation={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[FreeMode, Autoplay, Navigation]}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="pb-8 h-[350px] md:h-[400px] lg:h-[450px]"
      >
        {reviews.map((r) => (
          <SwiperSlide key={r.id}>
            <article
              className="group relative flex flex-col justify-between 
        h-full md:h-[300px] lg:h-[360px] 
        xl:h-[380px] 2xl:h-[400px]
        p-6 rounded-2xl hover:border-primary border border-gray-100 dark:border-gray-800 
        bg-white dark:bg-gray-900 shadow-md hover:shadow-2xl 
        hover:-translate-y-2 transition-all duration-500 overflow-hidden"
            >
              {/* Gradient Hover Layer */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/10 via-primary/20 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              {/* Top Section */}
              <div className="flex items-start gap-4 relative z-10">
                {/* Avatar */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-lg group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    {r.name
                      .split(" ")
                      .map((n) => n[0])
                      .slice(0, 2)
                      .join("")}
                  </div>
                </div>

                {/* Info */}
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 group-hover:text-primary transition-colors duration-300">
                        {r.name}
                      </h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {r.role}
                      </p>
                    </div>
                    <span className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      {r.highlight}
                    </span>
                  </div>
                </div>
              </div>

              {/* Quote Section */}
              <blockquote className="mt-4 text-sm text-gray-700 dark:text-gray-300 leading-relaxed italic group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300 flex-grow">
                “{r.quote}”
              </blockquote>

              {/* Buttons */}
              <div className="mt-6 flex items-center gap-3 relative z-10">
                <button className="text-xs font-medium px-3 py-1.5 rounded-lg bg-primary text-white hover:bg-primary-focus transition-all duration-300">
                  Read story
                </button>
                <button className="text-xs underline text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors duration-300">
                  Contact {r.name.split(" ")[0]}
                </button>
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Footer */}
      <footer className="mt-6 text-center">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Want this style adjusted? Pass a custom{" "}
          <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">
            items
          </code>{" "}
          array to the{" "}
          <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">
            UserReviews
          </code>{" "}
          component.
        </p>
      </footer>
    </section>
  );
};

export default UserReviews;
