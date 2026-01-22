import React, { use, useEffect, useState } from "react";
import Appk from "./Appk";

const appPromise = fetch(
  "https://per-backends.vercel.app/services"
).then((res) => res.json());

const Home = () => {
  const homeApp = use(appPromise);


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


  const careTips = [
    {
      title: "Choosing Pet Food",
      desc: "Understand specific nutrition needs for different breeds and life stages.",
      icon: "🍖",
    },
    {
      title: "Pet Medicines",
      desc: "Expert guidance on safe usage, dosage, and preventive healthcare.",
      icon: "🩺",
    },
    {
      title: "Daily Care Habits",
      desc: "Simple habits that significantly improve your pet's happiness and longevity.",
      icon: "❤️",
    },
  ];


  return (
    <div className="bg-[#f7f1f1] min-h-screen">


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


              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />


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


      <section className="py-14 px-4 sm:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-rose-500 mb-6">
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

  
  {/* --- SMART PET TAG FEATURE --- */}
      <section className="py-24 px-4 sm:px-8 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-rose-500/10 rounded-[3rem] blur-3xl transform -rotate-6 group-hover:rotate-6 transition-transform duration-700" />
            <img
              src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/8218cf210855141.6718a53c922d8.jpg"
              alt="Smart Pet Tag"
              className="relative w-full max-w-md mx-auto rounded-[3rem] shadow-2xl transition-transform duration-700 hover:scale-105"
            />
          </div>

          <div className="text-left">
            <span className="inline-block px-3 py-1 bg-rose-50 text-rose-500 font-bold text-xs uppercase rounded-lg mb-4">New Innovation</span>
            <h2 className="text-4xl sm:text-6xl font-black text-gray-900 mb-6 leading-tight">
              AmarPet <span className="text-rose-500">Smart Tag</span>
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Never worry about losing your best friend. Our QR and NFC enabled tags store vital medical records and contact info accessible with just a tap.
            </p>

            <ul className="space-y-4 mb-10">
              {['QR Code Instant Access', 'NFC Proximity Scan', 'Digital Medical Profiles', 'Waterproof & Durable'].map((feat, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                  <div className="h-6 w-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                  </div>
                  {feat}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4">
              <button className="bg-slate-900 hover:bg-black text-white px-8 py-4 rounded-2xl font-bold shadow-xl transition-all active:scale-95">
                Get Smart Tag
              </button>
              <button className="border-2 border-gray-100 hover:border-rose-200 text-gray-900 px-8 py-4 rounded-2xl font-bold transition-all bg-white hover:bg-rose-50">
                How it Works
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* ........................... */}


      {/* --- HEALTH & CARE TIPS --- */}
      <section className="py-24 px-4 sm:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-4">
              Care Tips & <span className="text-rose-500">Knowledge</span>
            </h2>
            <p className="text-gray-500">Stay informed with the latest insights from professional veterinarians and pet care experts.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {careTips.map((item, index) => (
              <div
                key={index}
                className="group bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 border border-gray-100"
              >
                <div className="text-4xl mb-6 transform transition-transform group-hover:scale-125 duration-500 inline-block">{item.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-500 leading-relaxed mb-6">
                  {item.desc}
                </p>
                <button className="text-rose-500 font-bold flex items-center gap-2 group/btn">
                  Read Article
                  <svg className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* --- WHY CHOOSE US --- */}
      <section className="py-24 px-4 sm:px-8 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-black mb-4">
            Why Trust <span className="text-rose-500">AmarPet?</span>
          </h2>
          <p className="text-slate-400 mb-16 max-w-xl mx-auto">
            We've built our reputation on genuine care, authenticated products, and a community of over 50k pet owners.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Genuine Products", icon: "✅", desc: "100% authenticated" },
              { title: "Vet Approved", icon: "🩺", desc: "Verified healthcare" },
              { title: "Safe Delivery", icon: "🚚", desc: "Doorstep tracking" },
              { title: "Easy Returns", icon: "🔄", desc: "7-day policy" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-slate-800/50 p-8 rounded-3xl border border-slate-700 hover:bg-slate-800 transition-colors"
              >
                <div className="text-4xl mb-4 grayscale group-hover:grayscale-0 transition-all">{item.icon}</div>
                <h3 className="font-bold text-lg text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 uppercase tracking-widest">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



      <section className="py-24 px-4 sm:px-8 bg-white overflow-hidden relative">
        <div className="max-w-5xl mx-auto">
          <div className="bg-rose-500 rounded-[3rem] p-12 sm:p-20 relative overflow-hidden shadow-2xl shadow-rose-500/20">
            {/* Decorative background circle */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-32 -mt-32" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full -ml-12 -mb-12" />

            <div className="relative z-10 text-center max-w-2xl mx-auto">
              <h2 className="text-4xl sm:text-5xl font-black text-white mb-6 leading-tight">
                Give Your Pet the Care <br /> They Deserve 🐶🐱
              </h2>
              <p className="mb-10 text-rose-100 text-lg">
                Join our newsletter and receive exclusive discounts, health tips, and early access to new smart products.
              </p>

              <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="px-6 py-4 rounded-2xl text-gray-900 w-full focus:outline-none focus:ring-4 focus:ring-white/20"
                />
                <button className="bg-white text-rose-500 font-bold px-10 py-4 rounded-2xl hover:bg-rose-50 transition-colors shadow-lg shadow-black/10">
                  Subscribe
                </button>
              </form>
              <p className="mt-6 text-rose-200 text-xs">By subscribing you agree to our privacy policy and terms.</p>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
};

export default Home;
