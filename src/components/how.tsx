"use client";

import { Button } from "./ui/buttons/Button";
import Image from "next/image";

export function How() {
  return (
    <section>

      <div className="mt-20 h-full w-full flex justify-center gap-10 items-center flex-col lg:flex-row ">
        <div className="w-full text-start p-2 space-y-10 mb-10">
          <h1 className="text-5xl lg:text-5xl font-semibold leading-tight font-raleway ">
            How does it work?

          </h1>
          <div className="space-y-6">
            <h2 className="text-3xl font-raleway font-semibold">

              Unleash your inner artist within your fan culture

            </h2>
            <p className="md:w-4/5 ">
              Superfans can register with their own user account to create their
              own versions of the artist's selected songs, interact and
              collaborate with other superfans, and get early access to concert
              tickets, special events, physical releases, and merchandise.
            </p>
          </div>
        </div>
        <div className="relative flex justify-center items-center md:w-1/2">
          <div

            className="
          absolute transition-all duration-500 ease-out z-10
          w-full h-[320px] sm:h-[350px] md:h-[300px] lg:h-[400px] xl:h-[550px]
          bottom-8 -left-12 sm:bottom-12 sm:-left-16 md:bottom-10 md:-left-12 lg:bottom-10 lg:-left-20 xl:bottom-6 xl:-left-22"

          >
            <Image
              src="/images/Stepper.png"
              alt="androidphone"
              fill
              className="object-contain "
            />
          </div>
          <div className="rounded-full w-[350px] h-[350px] sm:w-[400px] sm:h-[400px] md:w-[350px] md:h-[350px] lg:w-[450px] lg:h-[450px] xl:w-[600px] xl:h-[600px] bg-purple-900 dark:bg-gray-500 mb-10 blur-xl"></div>
          <div

            className="absolute
          transition-all duration-500 ease-out
          w-full h-[320px] md:h-[300px] sm:h-[350px] lg:h-[400px] xl:h-[550px] -top-4 left-16 sm:-top-4 sm:left-18 md:-top-1 md:left-16 lg:-top-4 lg:left-20 xl:-top-5 xl:left-24 "

          >
            <Image
              src="/images/android.png"
              alt="mobilephone"
              fill
              className="object-contain "
            />
          </div>
        </div>
      </div>

      <div className="w-full h-full lg:flex gap-10 flex-col lg:flex-row items-center justify-center my-20 ">
        <h1 className="text-4xl lg:text-5xl p-2 font-semibold font-raleway lg:w-2/3">
          Go to our registration page to start your own superfan app today!

        </h1>
        <div className="">
          <Button
            className="mt-5 rounded-sm lg:mt-6 px-16 w-full lg:w-auto"
            variant={"primary"}
          >
            Sign-Up
          </Button>
        </div>
      </div>
    </section>
  );
}
