"use client";

import Container from "@/components/Container";
import Header from "./components/Header";
import { useState } from "react";
import { Eye, EyeOff } from "react-feather";
import google from "@/assets/google-g-2015.svg";
import facebook from "@/assets/facebook-2020-2-1.svg";
import apple from "@/assets/apple-14.svg";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section className="page-section">
      <Header />
      <main className="py-4">
        <Container className="h-full flex items-center justify-center">
          <div className="max-w-md w-full bg-[#FAFCFD] dark:bg-[#0D0D0D] p-4 py-6">
            <form className="w-full  ">
              <h2 className="text-center mb-8 text-2xl font-semibold">Login</h2>
              <div className="h-16 mb-4">
                <input
                  type="email"
                  className="h-full w-full focus:outline-none bg-lightest_bg dark:bg-darkest_bg  border rounded border-last_light_bg dark:border-darker_bg px-2"
                  placeholder="E-mail"
                />
              </div>
              <div className="h-16 relative mb-5">
                <input
                  type={showPassword ? "text" : "password"}
                  className="h-full w-full focus:outline-none bg-lightest_bg dark:bg-darkest_bg  border rounded border-last_light_bg dark:border-darker_bg px-2 pr-[7%]"
                  placeholder="Password"
                />
                {!showPassword && (
                  <Eye
                    className="absolute top-1/2 right-[2.5%] -translate-y-1/2 cursor-pointer w-4"
                    onClick={() => setShowPassword(true)}
                  />
                )}
                {showPassword && (
                  <EyeOff
                    className="absolute top-1/2 right-[2.5%] -translate-y-1/2 cursor-pointer w-4"
                    onClick={() => setShowPassword(false)}
                  />
                )}
              </div>
              <button className="bg-light_button dark:bg-dark_button text-dark_text dark:text-light_text uppercase text-[0.9rem] w-full h-16 rounded px-5 hover:bg-light_button_second transition-all duration-200 ease-linear tracking-wider">
                LOG IN
              </button>
            </form>
            <div className="my-6 flex items-center gap-1">
              <div className="h-[1.5px] flex-[3] bg-[#3366FF59] opacity-35" />{" "}
              <span className="flex-1 flex items-center justify-center">
                or
              </span>{" "}
              <div className="flex-[3] h-[1.5px] bg-[#3366FF59] opacity-35" />
            </div>
            <button className="h-14 flex items-center justify-center gap-3 w-full border rounded border-[#D8DAE5] mb-2">
              <Image
                src={google}
                alt="Google"
                height={50}
                width={50}
                className="w-10"
              />
              Log in with Google
            </button>
            <button className="h-14 flex items-center justify-center gap-3 w-full border rounded border-[#D8DAE5] mb-2">
              <Image
                src={facebook}
                alt="Facebook"
                height={50}
                width={50}
                className="w-10"
              />
              Log in with Facebook
            </button>
            <button className="h-14 flex items-center justify-center gap-3 w-full border rounded border-[#D8DAE5] mb-4">
              <Image
                src={apple}
                alt="Apple"
                height={50}
                width={50}
                className="w-10"
              />
              Log in with Apple
            </button>
            <p className="my-4 text-center">
              <span className="underline">Forgot your password?</span>
            </p>
            <p className="mt-4 text-[0.9rem] text-center">
              Don&apos;t have an account?{" "}
              <Link href="/login" className="text-light_button">
                Signup
              </Link>
            </p>
          </div>
        </Container>
      </main>
    </section>
  );
}
