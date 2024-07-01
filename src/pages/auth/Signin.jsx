import React from "react";
import AnimatedBackground from "../../components/common/AnimatedBackground";
import { Email, Google, Padlock } from "../../services/svgs";
import { GiCrenelCrown } from "react-icons/gi";
import { Link } from "react-router-dom";

export default function Signin() {
  return (
    <section className=" pt-2">
      <AnimatedBackground />
      <div className="container flex items-center justify-center mt-14 px-2 mx-auto relative">
        <form className="w-full max-w-lg backdrop-blur p-2">
          <div className="flex flex-col  justify-center items-center">
            <div className="flex">
              <GiCrenelCrown size={60} className="text-slate-900 relative" />
              <GiCrenelCrown
                size={60}
                className="text-slate-900 absolute animate-ping"
              />
            </div>

            <h1 className="mt-3 text-3xl font-semibold text-zinc-900 capitalize sm:text-3xl ">
              LogIn
            </h1>
            <p className="text-center text-sm">Welcome to Modex Shopping, Login to have a better shopping experience</p>
          </div>
          <div className="relative flex items-center mt-4">
            <span className="absolute">
              <Email />
            </span>

            <input
              type="email"
              className="block w-full shadow-md py-3 text-zinc-700 bg-slate-200 border placeholder:text-zinc-600  rounded-lg px-11"
              placeholder="Email address"
            />
          </div>

          <div className="relative flex items-center mt-4">
            <span className="absolute">
              <Padlock />
            </span>

            <input
              type="password"
              className="block w-full px-10 py-3 text-zinc-700 bg-slate-200 border placeholder:text-zinc-600  rounded-lg"
              placeholder="Password"
            />
          </div>

          <div className="mt-6">
            <button className="w-full px-6 py-3 text-base font-medium tracking-wide text-slate-100 capitalize transition-colors duration-300 transform bg-zinc-900 rounded-lg hover:bg-zinc-800">
              Sign in
            </button>

            <p className="mt-4 text-center text-zinc-600">or sign in with</p>

            <a
              href="#"
              className="flex items-center justify-center px-6 border-1 border-zinc-900 py-3 mt-4 text-zinc-600 transition-colors duration-300 transform border rounded-lg"
            >
              <Google />

              <span className="mx-2 text-zinc-900">Sign in with Google</span>
            </a>

            <div className="mt-6 text-center ">
              <Link  to={'/signup'} className="text-base text-blue-500 hover:underline ">
                Don’t have an account yet? Sign up
              </Link>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
