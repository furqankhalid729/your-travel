import React, { useState, useEffect } from "react";
import FeatureCard from "../../User/snippets/FeatureCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation,EffectCoverflow,} from "swiper/modules";

// Import Swiper styles
import 'swiper/css/effect-coverflow';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function FeatureOffers() {
  const [hotels, setHotels] = useState([]);
  useEffect(() => { 
    axios.get(route("hotel.featured"), { params: { limit: 4 } })
      .then((response) => {
        console.log(response.data)
        setHotels(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

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
          {hotels.map((card, index) => (
            <SwiperSlide key={index}>
              <FeatureCard
                image={JSON.parse(card.images)[0]}
                id={card.id}
                name={card.name}
                rating={card.rating}
                reviews={card.reviews}
                price={card.rooms[0].price}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default FeatureOffers;
