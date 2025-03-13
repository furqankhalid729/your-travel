import React, { useEffect, useState } from "react";
import axios from "axios";
import FleetCard from "../Snippets/FleetCard";
import { ALT_TAGS } from '../../../Constants/Global';

const FeaturedFleets = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    axios.get(route("cars.featured"), { params: { limit: 4 } })
      .then((response) => {
        setCars(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <>
      <div className="mx-8 sm:mx-20 mt-16 ">
        <h2 className="text-2xl md:text-5xl font-bold text-black text-start">Our <span className="underlined underline-mask">Fleet</span></h2>
        <p className="text-xs md:text-sm text-gray-600 text-start mt-8">
          Select from Our Range of Elite Vehicles for a First-Class Driving
          Experience.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          {cars.slice(0, 4).map((car, index) => (
            <FleetCard
              key={index}
              id={car.id}
              imageSrc={JSON.parse(car.car_images)[0]}
              car_name={car.car_name}
              brand={car.brand}
              model={car.model}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default FeaturedFleets;