import React from "react";
import BannerWithTabs from "../components/home/BannerWithTabs";
import FeaturedFleets from "../Components/Home/FeaturedFleets";
import FeatureOffers from "../Components/Home/FeatureOffers";
import FeatureDestination from "../Components/Home/FeatureDestination";
import Testimonials from "../Components/Home/Testimonials";
import Gallery from "../Components/Home/Gallery";
import Blog from "../Components/Home/Blog";

const Home = () => {
  return (
    <>
      <BannerWithTabs />
      <FeaturedFleets />
      <FeatureOffers/>
      <FeatureDestination/>
      <Gallery/>
      <Blog/>
      <Testimonials/>

    </>
  );
};

export default Home;
