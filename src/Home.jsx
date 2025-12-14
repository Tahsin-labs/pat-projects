import React, { use } from "react";
import Appk from "./Appk";
// import { AuthContext } from "../Provider/AuthProvider";

const appPromise = fetch('http://localhost:3000/services').then((res) => res.json());

const Home = () => {
  const homeApp = use(appPromise);
  console.log(homeApp)
  // const { user } = use(AuthContext);

  return (
    <div className="pb-20 bg-[#E8F5E9]  text-white min-h-screen">


      <section
        className="max-w-6xl mx-auto px-4 py-10"
        data-aos="zoom-in"
        data-aos-duration="1200"
      >
        {/* <p className="text-right text-gray-400 text-sm">
                    {user && user.email}
                </p> */}

        <div className="carousel w-full rounded-xl overflow-hidden shadow-[0_0_25px_rgba(255,0,255,0.3)]">

          <div id="slide1" className="carousel-item relative w-full">
            <img
              src="https://storage.pixteller.com/designs/designs-images/2021-01-01/02/dog-food-premium-pet-food-1-5fef0f3a6cebb.png"
              className="w-full object-cover"
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between">
              <a href="#slide4" className="btn btn-circle">❮</a>
              <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
          </div>


          <div id="slide2" className="carousel-item relative w-full">
            <img
              src="https://i.ibb.co/JFC1ympY/free-fortnite-winter-christmas-game-banner-photoshop-template-990x330.jpg"
              className="w-full object-cover"
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between">
              <a href="#slide1" className="btn btn-circle">❮</a>
              <a href="#slide3" className="btn btn-circle">❯</a>
            </div>
          </div>


          <div id="slide3" className="carousel-item relative w-full">
            <img
              src="https://i.ibb.co/99kKh8Q3/free-esports-competition-video-game-themed-banner-psd-template.jpg"
              className="w-full object-cover"
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between">
              <a href="#slide2" className="btn btn-circle">❮</a>
              <a href="#slide4" className="btn btn-circle">❯</a>
            </div>
          </div>


          <div id="slide4" className="carousel-item relative w-full">
            <img
              src="https://i.ibb.co/FbGCzxGm/istockphoto-1308185301-170667a.jpg"
              className="w-full object-cover"
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between">
              <a href="#slide3" className="btn btn-circle">❮</a>
              <a href="#slide1" className="btn btn-circle">❯</a>
            </div>
          </div>
        </div>
      </section>


      <section className="py-16 px-15">
        <div className="container mx-auto">
          <h2 className="text-4xl font-extrabold text-center mb-4 text-purple-300 drop-shadow-md tracking-wide">
            Trending Pet
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {homeApp.slice(0, 3).map((app) => (
              <div
                key={app.id}
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={app.id * 100}
                className="hover:scale-[1.02] transition-transform duration-300"
              >
                <Appk app={app}></Appk>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* ================= SMART PET TAG PROMO SECTION ================= */}
      <section className="pb-20 bg-[#E8F5E9]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT IMAGE */}
          <div className="flex justify-center">
            <img
              src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/8218cf210855141.6718a53c922d8.jpg"
              alt="Smart Pet Tag"
              className="w-[280px] sm:w-[340px] md:w-[380px] drop-shadow-xl"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <p className="text-pink-500 font-semibold mb-2 italic">
              Smart
            </p>

            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
              AmarPet Tag
            </h2>

            <p className="text-gray-600 mb-6 max-w-lg">
              Secure your loving pet with QR code & NFC based smart pet tag.
            </p>

            {/* FEATURES */}
            <ul className="space-y-4 mb-8">
              <li className="flex gap-3">
                <span className=" text-gray-900 text-xl">✔</span>
                <span className=" text-gray-900">
                  <strong>Boosts Reunion Chances:</strong> Increases the likelihood
                  of a quick and happy reunion.
                </span>
              </li>

              <li className="flex gap-3">
                <span className=" text-gray-900 text-xl">✔</span>
                <span className=" text-gray-900">
                  <strong>Helps Strangers Help Your Pet:</strong> Anyone can scan and
                  contact you instantly.
                </span>
              </li>

              <li className="flex gap-3">
                <span className="text-green-500 text-xl">✔</span>
                <span className=" text-gray-900">
                  <strong>Weatherproof Durability:</strong> Handles all outdoor
                  adventures.
                </span>
              </li>

              <li className="flex gap-3">
                <span className="text-green-500 text-xl">✔</span>
                <span className=" text-gray-900">
                  <strong>Hassle-Free Design:</strong> No batteries needed.
                </span>
              </li>
            </ul>

            {/* PRICE */}
            <div className="flex items-center gap-4 mb-6">
              <span className="text-gray-400 line-through text-xl">
                ৳499
              </span>
              <span className="text-3xl font-extrabold text-gray-900">
                ৳390
              </span>
            </div>

            {/* BUTTONS */}
            <div className="flex gap-4">
              <button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-xl font-semibold">
                Buy Now
              </button>
              <button className="border border-pink-500 text-pink-500 px-8 py-3 rounded-xl font-semibold hover:bg-pink-50">
                View Details
              </button>
            </div>
          </div>
        </div>
      </section>


      {/* ================= PETS LIFESTYLE SECTION ================= */}
      <section className="pb-60 px-15 bg-[#E8F5E9]">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="text-center mb-14">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-3">
              Pets Lifestyle
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Track and explore your amazing pet’s lifestyle with AmarPet
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Card 1 */}
            <div className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden">
              <img
                src="https://www.fearfreehappyhomes.com/wp-content/uploads/2021/03/bigstock-Domestic-Cat-Drinks-Water-From-401173676.jpg"
                alt="Pet Hydration"
                className="w-full h-56 object-cover"
              />

              <div className="p-6">
                <p className="text-sm text-gray-400 mb-2">
                  Jul 21, 2025
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  10 Effective Ways to Keep Your Pet Hydrated
                </h3>

                <p className="text-gray-600 text-sm mb-5">
                  Proper hydration is essential for your pet’s health. Learn simple
                  and effective ways to ensure your pet drinks enough water every day.
                </p>

                <button className="text-pink-500 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                  Read More <span>→</span>
                </button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp62Os3jzmlkbCaCVdcLItUh33hkvF2yu86w&s"
                alt="Cat and Dog Together"
                className="w-full h-56 object-cover"
              />

              <div className="p-6">
                <p className="text-sm text-gray-400 mb-2">
                  Jan 08, 2025
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  How to Raise Cats and Dogs Together Peacefully
                </h3>

                <p className="text-gray-600 text-sm mb-5">
                  Cats and dogs can live happily together with the right approach.
                  Discover tips to build harmony and reduce conflicts at home.
                </p>

                <button className="text-pink-500 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                  Read More <span>→</span>
                </button>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden">
              <img
                src="https://www.amfthings.com/wp-content/uploads/2024/06/IMG_9883.jpeg"
                alt="Homemade Pet Food"
                className="w-full h-56 object-cover"
              />

              <div className="p-6">
                <p className="text-sm text-gray-400 mb-2">
                  Jan 07, 2025
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Healthy Homemade Winter Food for Your Pet
                </h3>

                <p className="text-gray-600 text-sm mb-5">
                  Winter nutrition is important for pets. Learn how to prepare safe,
                  nutritious homemade meals to keep your pet warm and healthy.
                </p>

                <button className="text-pink-500 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                  Read More <span>→</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>



      <section className="py-20 bg-[#F7FAF7] px-4">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="text-center mb-14">
            <h2 className="text-4xl font-extrabold text-gray-800 mb-3">
              What Pet Parents Say
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Real reviews from happy pet owners who trust AmarPet
            </p>
          </div>

          {/* Reviews */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Review Card */}
            <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFxAWIAieZA6JbMqZZMFUAd3gczm2gaLNJ7Q&s"
                  alt="User"
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h4 className="font-bold text-gray-800">Rahim Ahmed</h4>
                  <p className="text-sm text-gray-500">Dog Owner</p>
                </div>
              </div>

              <p className="text-gray-600 mb-4">
                “AmarPet helped me find the perfect food for my dog. The delivery was
                fast and the quality is amazing!”
              </p>

              <div className="text-yellow-400 text-lg">
                ★★★★★
              </div>
            </div>

            {/* Review Card */}
            <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src="https://media.istockphoto.com/id/92987120/photo/boy-with-dog.jpg?s=612x612&w=0&k=20&c=efLBmFnEfeLpkpxl1cM3hbc6euXQzlGH-xJSki98Gio="
                  alt="User"
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h4 className="font-bold text-gray-800">Nusrat Jahan</h4>
                  <p className="text-sm text-gray-500">Cat Lover</p>
                </div>
              </div>

              <p className="text-gray-600 mb-4">
                “I love how easy it is to find pet products and tips. My cat is happier
                and healthier now.”
              </p>

              <div className="text-yellow-400 text-lg">
                ★★★★★
              </div>
            </div>

            {/* Review Card */}
            <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src="https://as2.ftcdn.net/v2/jpg/00/52/43/41/1000_F_52434114_b1JuqUESWd4liEkxnhMSjykdHQYlELbg.jpg"
                  alt="User"
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h4 className="font-bold text-gray-800">Tanvir Hasan</h4>
                  <p className="text-sm text-gray-500">Pet Shop Owner</p>
                </div>
              </div>

              <p className="text-gray-600 mb-4">
                “As a seller, AmarPet gives me great exposure. The platform is smooth,
                secure, and very user-friendly.”
              </p>

              <div className="text-yellow-400 text-lg">
                ★★★★☆
              </div>
            </div>

          </div>
        </div>
      </section>






    </div>
  );
};

export default Home;
