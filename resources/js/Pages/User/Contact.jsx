import React from "react";
import ContactForm from "../../Components/User/Contact/ContantForm";
import MapCard from "../../Components/User/Contact/MapCard";
import ContactBanner from "../../Components/User/Contact/ContactBanner";
const Contact = () => {
  return (
    <>
      <div>
        <ContactBanner />
      </div>
      <div className="flex flex-col lg:flex-row gap-1 my-10   md:px-36 px:4">
        <ContactForm />
        <MapCard />
      </div>
    </>
  );
};

export default Contact;
