import React from "react";
import { FaApple, FaFacebook } from "react-icons/fa";
import { useForm, Link } from "@inertiajs/react";

const Login = ({ onSwitchToSignup, setShowLogin }) => {
  const { data, setData, post, processing, errors } = useForm({
    email: "",
    password: "",
  });

  const submit = (e) => {
    e.preventDefault();
    post(route("login"),{
      preserveScroll: true,
      onSuccess: () => {
        setShowLogin(false);
      },
      onError: (errors) => {
        console.error(errors);
      }
    });
  };

  return (
    <div className="bg-white rounded-[50px] z-50 xl:w-[450px] h-auto 2xl:w-[500px] 2xl:h-[600px] mx-auto mt-36 mb-8 p-8 flex flex-col items-start space-y-4 shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-4 text-black">
        Sign in or create an account
      </h2>

      <form onSubmit={submit} className="w-full space-y-4">
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={data.email}
            onChange={(e) => setData("email", e.target.value)}
            className="w-full border rounded-[50px] p-4 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email}</span>
          )}
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={data.password}
            onChange={(e) => setData("password", e.target.value)}
            className="w-full border rounded-[50px] p-4 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          {errors.password && (
            <span className="text-red-500 text-sm">{errors.password}</span>
          )}
        </div>
        <button
          type="submit"
          disabled={processing}
          className="w-full bg-red-500 text-white rounded-[50px] p-4 font-semibold hover:bg-red-600 transition"
        >
          {processing ? "Logging in..." : "Login"}
        </button>
      </form>

      <div className="w-full text-right">
        <a href="#" className="text-red-500 text-sm hover:underline">
          Forgotten Password?
        </a>
      </div>
      <p className="text-base text-black">
        Don't have an account?
        <span className="mr-2"></span>
        <Link
          href="/register"
          onClick={onSwitchToSignup}
          className="text-red-500 font-semibold hover:underline"
        >
          Sign up
        </Link>
      </p>

      {/* Social Login */}
      <div className="text-center my-2 mx-auto">
        <p className="text-base my-4 text-black text-center">
          or use one of these options
        </p>
        <div className="flex justify-center space-x-16 mt-2">
          <FaFacebook className="text-blue-600 text-4xl cursor-pointer hover:opacity-80" />
          <img src="/google.png" className="w-9 h-9 cursor-pointer" alt="Google" />
          <FaApple className="text-black text-4xl cursor-pointer" />
        </div>
      </div>

      {/* Terms and Conditions */}
      <p className="text-xs text-gray-500 text-center mt-4 px-4">
        By signing in or creating an account, you agree with our
        <a href="#" className="text-red-500 hover:underline">
          Terms & conditions
        </a>
        &nbsp;and&nbsp;
        <a href="#" className="text-red-500 hover:underline">
          Privacy statement.
        </a>
      </p>
    </div>
  );
};

export default Login;
