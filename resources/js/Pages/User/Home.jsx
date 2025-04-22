import React from "react";
import UserLayout from "../../Layout/UserLayout";
import BannerWithTabs from "../../Components/User/Home/BannerWithTabs";
import FeaturedFleets from "../../Components/User/Home/FeaturedFleets";
import FeatureOffers from "../../Components/User/Home/FeatureOffers";
import FeatureDestination from "../../Components/User/Home/FeatureDestination";
import Testimonials from "../../Components/User/Home/Testimonials";
import Gallery from "../../Components/User/Home/Gallery";
import Blog from "../../Components/User/Home/Blog";
const Home = () => {
  return (
    <>
      <BannerWithTabs />
      {/* <FeaturedFleets /> */}
      <FeatureOffers/>
      <FeatureDestination/>
      <Blog/>
      <Testimonials/>

    </>
  );
};
Home.layout = page => <UserLayout children={page} title="Home" />
export default Home;
