"use client";
import { Button } from "./ui/buttons/Button";
import Image from "next/image";

export function How() {
  return (
    <section>
      <div className="mt-20 h-full w-full flex justify-center gap-10 items-center  flex-col lg:flex-row  ">
        <div className="w-full text-start p-2  space-y-10 mb-10">
          <h1 className="text-4xl lg:text-5xl font-semibold leading-tight ">
            Hvordan funker det?
          </h1>

          <div className="space-y-6">
            <h2 className="text-4xl font-semibold">
              Bli kunstneren i din fankultur
            </h2>
            <p className="md:w-4/5  ">
              Superfansen kan registrere seg med sin egen bruker for å lage sine
              egne versjoner av artistens utvalgte sanger, samhandle og
              samarbeide med andre superfans samt få tidlig tilgang til
              konsertbilletter, spesielle arrangementer, fysiske utgivelser og
              merchandise.
            </p>
          </div>
        </div>
        <div className="relative w-full h-full flex items-center justify-center ">
          <div className=" rounded-full w-[400px] lg:w-[500px] h-[400px] lg:h-[500px] bg-purple-900 mb-10 blur-xl"></div>
          <div
            className="absolute z-10
          transition-all duration-500 ease-out 
          w-full h-[310px] lg:h-[500px] bottom-30 -right-14  lg:bottom-25  lg:-right-30"
          >
            <Image
              src="/images/android.png"
              alt="mobilephone"
              fill
              className="object-contain "
            />
          </div>
          <div
            className=" 
          absolute transition-all duration-500 ease-out z-10
          w-full h-[310px] lg:h-[500px]
          bottom-18 -left-16 lg:bottom-5 lg:-left-19"
          >
            <Image
              src="/images/Stepper.png"
              alt="androidphone"
              fill
              className="object-contain "
              priority
            />
          </div>
        </div>
      </div>
      <div className="w-full h-full gap-10 inline-block lg:flex  flex-col lg:flex-row items-center justify-center my-20 ">
        <h1 className="text-5xl  lg:w-2/3">
          Gå til registreringssiden vår for å starte din egen superfan-app i
          dag!
        </h1>
        <div className="">
          <Button className="mt-10 lg:mt-6 px-16 w-full lg:w-auto">
            Sign-Up
          </Button>
        </div>
      </div>
    </section>
  );
}
