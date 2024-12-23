import React from "react";
import FeatureCard from "../../User/snippets/FeatureCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation,EffectCoverflow,} from "swiper/modules";

// Import Swiper styles
import 'swiper/css/effect-coverflow';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function FeatureOffers() {
  const cardData = [
    {
      image: "/hotel.png",
      name: "Avari Hotel Lahore",
      rating: "4.7",
      reviews: "13 rating",
      price: "717.94",
    },
    {
      image: "/hotel2.jpg",
      name: "Belvedere Hotel",
      rating: "4.5",
      reviews: "4 rating",
      price: "402.37",
    },
    {
      image: "/hotel6.jpg",
      name: "Dolder Grand Hotel",
      rating: "4.9",
      reviews: "15 rating",
      price: "1085.57",
    },
    {
      image: "/hotel4.png",
      name: "Des Alpes Hotel",
      rating: "4.8",
      reviews: "8 rating",
      price: "550.15",
    },
  ];

  return (
    <>
      <div className="mx-8 sm:mx-20 mt-8">
        <h2 className="text-2xl md:text-5xl font-bold text-black text-center">
          Special <span className="underlined underline-mask">Offers</span>
        </h2>
        <p className="text-xs md:text-sm text-gray-600 text-center mt-8">
          Destination can describe where you are going, like a traveler whose
          destination is Switzerland, or a place that is known for a particular purpose.
        </p>
      </div>

      {/* Swiper Slider */}
      <div className="py-10 mx-8 sm:mx-20">
        <Swiper
           effect={'coverflow'}
          slidesPerView={1}
          spaceBetween={20}
          
          loop={true}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          pagination={{ clickable: true }}
          navigation
          modules={[Pagination, Navigation,EffectCoverflow]}
          className="mySwiper"
        >
          {cardData.map((card, index) => (
            <SwiperSlide key={index}>
              <FeatureCard
                image={card.image}
                name={card.name}
                rating={card.rating}
                reviews={card.reviews}
                price={card.price}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default FeatureOffers;
