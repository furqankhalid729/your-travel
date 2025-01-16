import React from "react";
import { FaFacebook, FaApple } from "react-icons/fa";
import { useForm, Head, Link } from "@inertiajs/react";

export default function Register() {
  const { data, setData, post, processing, errors, reset } = useForm({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    password: "",
    password_confirmation: "",
  });

  const submit = (e) => {
    e.preventDefault();
    post(route("register"), {
      onFinish: () => reset("password", "password_confirmation"),
    });
  };

  return (
    <>
      <Head title="Register" />

      <div className="flex flex-col bg-white p-8 rounded-[50px] shadow-lg lg:w-[830px] h-auto 2xl:w-[930px] 2xl:h-[580px] mx-auto mt-36 mb-6">
        <h2 className="text-2xl font-bold text-center mb-6">Create an Account</h2>

        <form onSubmit={submit}>
          <div className="flex space-x-4 mb-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full border rounded-[50px] p-4 focus:outline-none focus:ring-2 focus:ring-red-500 flex-1 text-black"
              value={data.name}
              onChange={(e) => setData("name", e.target.value)}
              required
            />
            {/* <input
              type="text"
              placeholder="Last Name"
              className="w-full border rounded-[50px] p-4 focus:outline-none focus:ring-2 focus:ring-red-500 flex-1"
              value={data.last_name}
              onChange={(e) => setData("last_name", e.target.value)}
              required
            /> */}
          </div>
          <div className="flex flex-col sm:flex-row sm:space-x-4 mb-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full border rounded-[50px] p-4 focus:outline-none focus:ring-2 focus:ring-red-500 sm:flex-[110px] text-black"
              value={data.email}
              onChange={(e) => setData("email", e.target.value)}
              required
            />
            {/* <input
              type="tel"
              placeholder="Phone Number"
              className="border rounded-[50px] p-2 flex-1 focus:outline-none focus:ring-2 focus:ring-red-500"
              value={data.phone}
              onChange={(e) => setData("phone", e.target.value)}
            /> */}
          </div>
          <div className="flex space-x-4 mb-4">
            <input
              type="password"
              placeholder="Password"
              className="w-full border rounded-[50px] p-4 focus:outline-none focus:ring-2 focus:ring-red-500 text-black"
              value={data.password}
              onChange={(e) => setData("password", e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full border rounded-[50px] p-4 focus:outline-none focus:ring-2 focus:ring-red-500 text-black"
              value={data.password_confirmation}
              onChange={(e) => setData("password_confirmation", e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            disabled={processing}
            className="w-1/3 bg-red-600 text-white py-3 rounded-2xl font-semibold hover:bg-red-700 mb-6 mx-auto"
          >
            Sign Up
          </button>
        </form>

        <div className="flex justify-center space-x-20 mb-6">
          <FaFacebook className="text-blue-600 text-4xl cursor-pointer hover:opacity-80" />
          <img src="/google.png" className="w-9 h-9 cursor-pointer" alt="Google" />
          <FaApple className="text-black text-4xl cursor-pointer" />
        </div>

        <p className="text-base text-black text-center">
          Already have an account?{" "}
          <Link
            href={route("login")}
            className="text-red-500 font-semibold hover:underline"
          >
            Login
          </Link>
        </p>
        <p className="text-xs text-gray-500 text-center">
          By signing in or creating an account, you agree with our{" "}
          <a href="#" className="text-red-500 hover:underline">
            Terms & conditions
          </a>{" "}
          and{" "}
          <a href="#" className="text-red-500 hover:underline">
            Privacy statement
          </a>
          .
        </p>
      </div>
    </>
  );
}
