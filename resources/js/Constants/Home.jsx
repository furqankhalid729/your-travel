import { BsBoxArrowLeft, BsBoxArrowRight } from "react-icons/bs";
import { CiLocationOn, CiUser } from "react-icons/ci";
import { IoCalendarOutline } from "react-icons/io5";
import { PiJeepThin } from "react-icons/pi";
export const formFields = [
    {
        icon: CiLocationOn,
        label: "Location",
        description: "Enter your destination",
        type:"text"
    },
    {
        icon: CiUser,
        label: "Guests",
        description: "Number of guests",
        type:"text"
    },
    {
        icon: BsBoxArrowRight,
        label: "Check-in",
        description: "Add date",
        type:"date"
    },
    {
        icon: BsBoxArrowLeft,
        label: "Check-out",
        description: "Add date",
        type:"date"
    },
];

export const formFieldsForTour = [
    {
        icon: CiLocationOn,
        label: "Destinations",
        description: "Destination",
        type:"text"
    },
    {
        icon: CiUser,
        label: "Guests",
        description: "Presons",
        type:"text"
    },
    {
        icon: BsBoxArrowRight,
        label: "Date",
        description: "Add date",
        type:"date"
    },
    {
        icon: BsBoxArrowLeft,
        label: "Duration",
        description: "Drop down",
        type:"ate"
    },
];

export const formFieldsForCar = [
    {
        icon: PiJeepThin,
        label: "From",
        description: "Start Location",
        type:"text"
    },
    {
        icon: PiJeepThin,
        label: "To",
        description: "End Location",
        type:"text"
    },
    {
        icon: IoCalendarOutline,
        label: "Start Time",
        description: "Add date",
        type:"datetime"
    },
    {
        icon: CiUser,
        label: "Passengers",
        description: "Add Passengers",
        type:"text"
    },
];