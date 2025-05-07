import { BsBoxArrowLeft, BsBoxArrowRight,BsClock } from "react-icons/bs";
import { CiLocationOn, CiUser } from "react-icons/ci";
import { IoCalendarOutline } from "react-icons/io5";
import { PiJeepThin } from "react-icons/pi";
export const formFields = [
    {
        icon: CiLocationOn,
        label: "Location",
        description: "Enter your destination",
        type:"text",
        name:"location"
    },
    {
        icon: CiUser,
        label: "Guests",
        description: "Number of guests",
        type:"text",
        name:"guests"
    },
    {
        icon: BsBoxArrowRight,
        label: "Check-in",
        description: "Add date",
        type:"date",
        name:"checkin"
    },
    {
        icon: BsBoxArrowLeft,
        label: "Check-out",
        description: "Add date",
        type:"date",
        name:"checkout"
    },
];

export const formFieldsForTour = [
    {
        icon: CiLocationOn,
        label: "Destinations",
        description: "Destination",
        type:"text",
        name:"destination"
    },
    {
        icon: CiUser,
        label: "Guests",
        description: "Presons",
        type:"text",
        name:"guests"
    },
    {
        icon: BsBoxArrowRight,
        label: "Date",
        description: "Add date",
        type:"date",
        name:"date"
    },
    {
        icon: BsBoxArrowLeft,
        label: "Duration",
        description: "Drop down",
        type:"number",
        name:"duration"
    },
];

export const formFieldsForCar = [
    {
        icon: PiJeepThin,
        label: "From",
        description: "Start Location",
        type:"text",
        name:"from"
    },
    {
        icon: PiJeepThin,
        label: "To",
        description: "End Location",
        type:"text",
        name:"to"
    },
    {
        icon: IoCalendarOutline,
        label: "Start Time",
        description: "Add date",
        type:"date",
        name:"start_date"
    },
    {
        icon: CiUser,
        label: "Passengers",
        description: "Add Passengers",
        type:"number",
        name:"passengers"
    },
    {
        icon: BsClock,
        label: "Hours",
        description: "8",
        type: "number",
        name: "hours"
    }
];