import React from 'react';
import ContactCard from '../snippets/ContactCard';
import { MdOutlineAttachEmail } from "react-icons/md";
import { TbPhonePlus } from "react-icons/tb";
import { SlLocationPin } from "react-icons/sl";
import { CiHeart } from "react-icons/ci";
const ContactBanner = () => {
    const cardData = [
        {
          id: 1,
          icon:CiHeart,
          title: "We worry",
          paragraph1: "Your experience is very important to us.",
          paragraph2: " Please share your thoughts with us.",
        },
        {
          id: 2,
          icon: MdOutlineAttachEmail,
          title: "Email us",
          paragraph1: "We are available to assist.",
          paragraph2: "info@yourtrip24.com",
        },
        {
          id: 3,
          icon: TbPhonePlus,
          title: "Contact us",
          paragraph1: "We are available to assist you. 24/7",
          paragraph2: "+41 44 523 75 64",
         
        },
        {
          id: 4,
          icon: SlLocationPin,
          title: "Visit us",
          paragraph1: "Our crew is available to assist you.",
          paragraph2: "Weihermattstrasse 75, 5000 Aarau",
        },
      ];
  return (
    <>
    <div className="text-center mt-16 mb-8">
    <h1 className=" text-red-600 text-2xl font-semibold">Contact us </h1>
    <h3 className="text-black text-base sm:text-4xl  font-semibold mt-2">We would love hearing from you </h3>
    <p className="mt-1 text-sm sm:text-xl">We are always here to assist you with any questions.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4 md:px-36 px:4">
  {cardData.map((card) => (
    <ContactCard
      key={card.id}
      icon={card.icon}
      title={card.title}
      paragraph1={card.paragraph1}
      paragraph2={card.paragraph2}
    />
  ))}
</div>
</>
  )
}

export default ContactBanner;