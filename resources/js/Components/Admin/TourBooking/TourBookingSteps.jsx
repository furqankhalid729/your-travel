import { FaArrowLeft } from "react-icons/fa6";

// import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Link } from "@inertiajs/react";

const TourBookingSteps = () => {
  // const navigate = useNavigate();
  // const location = useLocation();

  // const getStepClass = (stepIndex) => {
  //   const stepPaths = [
  //     "/dashboard/tour-booking/steps",
  //     "/dashboard/tour-booking/steps/planner",
  //     "/dashboard/tour-booking/steps/timeline",
  //     "/dashboard/tour-booking/steps/pricing",
  //   ];

  //   return location.pathname === stepPaths[stepIndex]
  //     ? "step step-neutral"
  //     : "step";
  // };

  return (
    <div>
      <Link
        href="/dashboard/tour-booking"
        // onClick={() => navigate(-1)}
        className="flex items-center py-3 px-4 text-gray-600 hover:text-gray-800"
      >
        <FaArrowLeft className="mr-2" />
        <span>Back</span>
      </Link>
      <div className="mx-3 lg:mx-5 p-3 lg:p-5 bg-white space-y-6">
        <div className="w-full flex justify-center">
          <ul className="steps lg:w-1/2">
            <Link
              href="/dashboard/tour-booking/steps"
            // className={getStepClass(0)}
            >
              <li data-content="1">
                <span className="text-sm">Details</span>
              </li>
            </Link>
            <Link
              href="/dashboard/tour-booking/steps/planner"
            // className={getStepClass(1)}
            >
              <li>
                <span className="text-sm">Planner</span>
              </li>
            </Link>
            <Link
              href="/dashboard/tour-booking/steps/timeline"
            // className={getStepClass(2)}
            >
              <li>
                <span className="text-sm">Timeline</span>
              </li>
            </Link>
            <Link
              href="/dashboard/tour-booking/steps/pricing"
            // className={getStepClass(3)}
            >
              <li>
                <span className="text-sm">Pricing</span>
              </li>
            </Link>
          </ul>
        </div>
        {/* <Outlet /> */}
      </div>
    </div>
  );
};

export default TourBookingSteps;
