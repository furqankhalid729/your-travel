import React from "react";
import Banner from "../../Components/User/Hotel/Banner";
import HotelCards from "../../Components/User/Hotel/HotelCards";
import HotelRating from "../../Components/User/Hotel/HotelRating";
import UserLayout from "../../Layout/UserLayout";
const Hotel = () => {
  return (
    <>
      <Banner />
      <div className="flex px-4 lg:gap-7 md:my-12 sm:px-4 mx-auto max-w-[1400px]">
        <div className="lg:w-1/4">
          <HotelRating />
        </div>
        <div className="w-full lg:w-3/4">
          <HotelCards />
        </div>
      </div>
    </>
  );
};
Hotel.layout = page => <UserLayout children={page} title="Hotel"/>
export default Hotel;