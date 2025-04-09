import React from 'react';

const TourItinerary = ({ tour }) => {
  console.log(tour.tour_itinerary)
 
  return (
    <div className="mt-12">
      <h1 className="text-lg md:text-xl font-bold mb-6 ">Tour Itinerary</h1>
      {JSON.parse(tour.tour_itinerary).map((itinerary, index) => (
        <div
          key={index}
          className="md:flex gap-6 mb-8"
        >
          <div className='w-full md:w-7/12 lg:w-10/12'><p className='text-base md:text-lg font-semibold'>Day: {index + 1}</p>
            <p className="text-xs md:text-sm text-gray-800">{itinerary?.day}</p>
          </div>
          <div className='w-full md:w-5/12 lg:w-2/12 mt-4 md:mt-0'>
            <img
              src={itinerary?.image.length>0 ? "/storage/"+itinerary.image : '/storage/images/tour.jpeg'}
              alt={itinerary?.image}
              className="w-full h-[150px] object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TourItinerary;
