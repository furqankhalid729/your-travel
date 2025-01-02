import { FcGoogle } from "react-icons/fc";
import { Link } from "@inertiajs/react";
// import { useNavigate } from "react-router-dom";
// import logo from "../assets/atello.jpg";
import { FaHandsClapping } from "react-icons/fa6";

const Login = () => {
  // const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    navigate("/dashboard");
  };
  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      <div className="lg:w-1/2 bg-[#2e231b] flex flex-col justify-center text-left text-white p-6 lg:p-12">
        <img
          src="storage/images/atello.jpg"
          alt="Logo"
          className="w-16 lg:w-24 h-16 lg:h-24 m-3 lg:m-6 lg:mb-10 rounded-full"
        />
        <h1 className="text-2xl lg:text-4xl font-semibold lg:mb-3 mx-5">
          Hello Atello
        </h1>
        <p className="text-2xl lg:text-4xl font-semibold flex items-center mx-5 lg:mb-5">
          to Welcome back! <FaHandsClapping className="ml-2 text-white" />
        </p>
        <p className="text-sm mt-2 opacity-80 mx-5">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
          eius! Ipsa, corrupti sequi magnam aut perspiciatis quas omnis quam
          placeat voluptatum qui eveniet deleniti, inventore maxime nobis quis
          dolorum saepe possimus quaerat facere similique molestiae quisquam,
          ratione vitae. At commodi.
        </p>
      </div>
      <div className="lg:w-1/2 flex justify-center items-center p-8">
        <div className="rounded-lg w-full md:max-w-xl lg:max-w-sm">
          <h2 className="text-2xl font-semibold mb-1">Log In</h2>
          <p className="text-gray-400 text-sm">
            Don&lsquo;t have account?
            <Link className="underline text-black">
              Create a new account now
            </Link>{" "}
          </p>
          <p className="text-gray-400">
            It&lsquo;s FREE! Takes less than a minute.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4 px-8 pt-8 pb-3">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-lg transition"
            >
              Login Now
            </button>
          </form>
          <Link href="/dashboard" className="border w-full flex items-center justify-center gap-2 py-2 rounded-lg transition">
            <FcGoogle className="text-xl" />
            Login with Google
          </Link>
          <p className="text-sm text-center mt-4">
            Forgot your password?{" "}
            <a href="#" className="text-red-500 underline">
              Click here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
