import React, { use, useEffect, useState } from "react";
import Appk from "./Appk";

const appPromise = fetch(
  "https://per-backends.vercel.app/services"
).then((res) => res.json());

const Home = () => {
  const homeApp = use(appPromise);

  /* =======================
      BANNER SLIDES
  ======================== */
  const slides = [
    {
      title: "Find Your Furry Friend Today!",
      subtitle: "Adopt with love, care with responsibility",
      img: "https://image.chukouplus.com/upload/C_1127/file/20220616/56e529b7e08f5c52d56407b79c49a0d5.jpg",
    },
    {
      title: "Adopt, Don't Shop",
      subtitle: "Give a pet a forever home",
      img: "https://cdn.vectorstock.com/i/500p/97/69/playful-pet-shop-discount-banner-vector-53919769.jpg",
    },
    {
      title: "Every Pet Deserves Love",
      subtitle: "Because they are family",
      img: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/pet-shop-banner-design-template-4c29604da3e3601ec0a5d464e2cbeb4b_screen.jpg?ts=1737954014",
    },
    {
      title: "Premium Food for Healthy Pets",
      subtitle: "Nutrition that keeps tails wagging",
      img: "https://storage.pixteller.com/designs/designs-images/2021-01-01/02/dog-food-premium-pet-food-1-5fef0f3a6cebb.png",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#F0E4D3] min-h-screen">

      {/* =======================
          FULL WIDTH BANNER
      ======================== */}
      <section className="w-full relative overflow-hidden">
        <div className="relative w-full h-[240px] sm:h-[320px] md:h-[420px] lg:h-[520px]">

          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ${index === currentSlide ? "opacity-100" : "opacity-0"
                }`}
            >
              <img
                src={slide.img}
                alt="banner"
                className="w-full h-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

              {/* LEFT BOTTOM TEXT */}
              <div className="absolute bottom-6 left-4 sm:left-8 md:left-16 text-left max-w-[90%] sm:max-w-xl">
                <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                  {slide.title}
                </h1>
                <p className="mt-2 text-sm sm:text-base md:text-lg text-gray-200">
                  {slide.subtitle}
                </p>
              </div>
            </div>
          ))}

          {/* Indicators */}
          <div className="absolute bottom-4 right-4 sm:right-8 flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full transition ${index === currentSlide
                    ? "bg-white"
                    : "bg-white/50 hover:bg-white"
                  }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* =======================
          TRENDING PETS
      ======================== */}
      <section className="py-14 px-4 sm:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-pink-600 mb-6">
          Trending Pets
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {homeApp.slice(0, 3).map((app) => (
            <div
              key={app.id}
              data-aos="fade-up"
              data-aos-duration="1000"
              className="hover:scale-[1.02] transition"
            >
              <Appk app={app} />
            </div>
          ))}
        </div>
      </section>

      {/* =======================
          SMART PET TAG
      ======================== */}
      <section className="py-16 px-4 sm:px-8 bg-[#E8F5E9]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          <div className="flex justify-center">
            <img
              src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/8218cf210855141.6718a53c922d8.jpg"
              alt="Smart Pet Tag"
              className="w-[260px] sm:w-[320px] md:w-[380px]"
            />
          </div>

          <div className="text-center lg:text-left">
            <p className="text-pink-500 font-semibold italic mb-2">Smart</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              AmarPet Tag
            </h2>
            <p className="text-gray-600 mb-6 max-w-lg mx-auto lg:mx-0">
              Secure your loving pet with QR code & NFC based smart pet tag.
            </p>

            <div className="flex justify-center lg:justify-start gap-4">
              <button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-xl font-semibold">
                Buy Now
              </button>
              <button className="border border-pink-500 text-pink-500 px-6 py-3 rounded-xl font-semibold hover:bg-pink-50">
                View Details
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
