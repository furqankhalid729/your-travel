import React, { useState, useEffect } from 'react';
import CarBanner from '../../Components/User/Car/CarBanner';
import CarTab from '../../Components/User/Car/CarTab';
import UserLayout from "../../Layout/UserLayout";
import { useDispatch } from 'react-redux';
import LocationDetail from '@/Components/User/Car/LocationDetail';
import { usePage, router } from '@inertiajs/react';
import { addBooking } from '../../store/bookingSlice';

const Car = ({ cars, filters, modelsFilter, brandFilter }) => {
  const { auth } = usePage().props;
  const dispatch = useDispatch();
  const [filteredCars, setFilteredCars] = useState(cars);
  const { url } = usePage();
  const queryString = url.split('?')[1] || '';
  const params = Object.fromEntries(new URLSearchParams(queryString));
  const [distance, setDistance] = useState(0);
  const [duration, setDuration] = useState(0);
  const [originCoords, setOriginCoords] = useState(null);
  const [destinationCoords, setDestinationCoords] = useState(null);

  const getDistance = () => {
    return axios.post(route("getDistance"), {
      origin: params.from,
      destination: params.to,
    })
      .then(response => {
        const data = response.data;
        const parsedDistance = parseInt(data.rows[0].elements[0].distance.text.replace("km", "").trim());
        setDistance(parsedDistance);
        const seconds = data.rows[0].elements[0].duration.value;
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        setDuration(`${hours}h ${minutes}m`);
        console.log("Distance:", `${hours}h ${minutes}m`);
        return parsedDistance;
      })
      .catch(error => {
        console.error("Axios error:", error);
      });
  };

  const getCoordinates = (address) => {
    return axios.post(route("getCordinates"), {
      address: address,
    })
      .then(response => {
        const data = response.data;
        console.log(data)
        return data
      })
      .catch(error => {
        console.error("Axios error:", error);
      });
  }

  useEffect(() => {
    if (filteredCars !== cars) {
      setFilteredCars(cars);
    }

    getDistance();

    if (params.from && params.to) {
      getCoordinates(params.from).then(setOriginCoords);
      getCoordinates(params.to).then(setDestinationCoords);
    }
  }, [cars, params.from, params.to]);

  const handleSubmit = (carId,carName,price,timeEnabled) => {
    if (!auth.user) {
      router.visit('/login');
      return;
    }
    const bookingData = {
      type: 'car',
      id: carId,
      name: carName,
      price: parseFloat(price),
      additional_info: {
        pickup_location: params.from,
        dropout_location: params.to,
        pickup_date: params.start_date,
        dropout_date: '',
        pricingType: timeEnabled ? "hourly" : "km",
        distance: distance,
        duration: duration,
        passengers: params.passengers,
        time: 8,
        car_id: carId
      },
    };
    console.log("Booking Data:", bookingData);
    dispatch(addBooking(bookingData));
    router.visit(route('checkout'));
  }


  return (
    <div>
      <CarBanner />
      <div className='flex flex-col-reverse md:flex-row justify-between gap-5 mx-4 md:mx-16 '>
        <div className='block md:block md:w-[30%] lg:w-1/4 mt:10 lg:mt-24'>
          {/* <CarCategory onFilter={handleFilter} filters={filters} modelsFilter={modelsFilter} brandFilter={brandFilter}/> */}
          <LocationDetail
            from={params.from}
            to={params.to}
            startDate={params.start_date}
            passengers={params.passengers}
            distance={distance}
            duration={duration}
            originCoords={originCoords}
            destinationCoords={destinationCoords}
          />
        </div>
        <div className='w-full md:w-3/4 mt:10 lg:mt-24'>
          <CarTab cars={filteredCars} distance={distance} handleSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  );
};

Car.layout = page => <UserLayout children={page} title="Car Details" />;
export default Car;