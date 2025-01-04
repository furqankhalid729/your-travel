import React from "react";
import ContactForm from "../../Components/User/Contact/ContantForm";
import MapCard from "../../Components/User/Contact/MapCard";
import ContactBanner from "../../Components/User/Contact/ContactBanner";
import UserLayout from "../../Layout/UserLayout";
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
Contact.layout = page => <UserLayout children={page} title="Contact" />
export default Contact;
