"use client";

import { Button } from "./ui/buttons/Button";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export function How() {
  return (
    <section id="how" className="pt-16 lg:pt-10">
      <div className="h-full w-full flex justify-center gap-10 items-center flex-col lg:flex-row">
        <div className="w-full text-start p-2  lg:mb-10">
          <h1 className="text-5xl lg:text-5xl font-semibold leading-tight font-raleway">
            How does it work?
          </h1>
        </div>
      </div>

      <div className="block lg:hidden space-y-10">
        <Slide1 />
        <Slide2 />
        <Slide3 />
      </div>

      <div className="hidden lg:block w-full">
        <Swiper
          modules={[Pagination, Autoplay, EffectFade]}
          pagination={{ clickable: true }}
          // autoplay={{ delay: 8000 }}
          loop={true}
          spaceBetween={30}
          // effect={"fade"}
          // fadeEffect={{ crossFade: true }}
          // speed={800}
          slidesPerView={1}
          className="w-full"
        >
          <SwiperSlide>
            <Slide1 />
          </SwiperSlide>
          <SwiperSlide>
            <Slide2 />
          </SwiperSlide>
          <SwiperSlide>
            <Slide3 />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="w-full h-full lg:flex gap-10 flex-col items-center justify-center my-20">
        <h2 className="text-4xl lg:text-5xl pb-6 font-semibold leading-12 font-raleway text-center 2xl:w-3/4">
          Head to our registration page and launch your own Superfan app today!
        </h2>
        <div className="w-full flex justify-center max-w-3xl my-3">
          <Button
            className="rounded-sm px-16 w-full sm:w-auto"
            variant="primary"
          >
            Sign Up
          </Button>
        </div>
      </div>
    </section>
  );
}

function Slide1() {
  return (
    <div className="slide1 flex flex-col lg:flex-row justify-center gap-8 items-center pt-14 2xl:pl-14  lg:pb-4">
      <div className="space-y-6 lg:max-w-1/2">
        <h2 className="text-3xl leading-12 font-raleway font-semibold">
          Artists & Superfans — Building It Together
        </h2>
        <p className="pb-8 leading-7">
          Superfans can shape their own profiles, interact directly with
          artists, and connect with like-minded fans across the world. Artists
          benefit from a community that not only listens, but actively engages,
          creating a deeper connection and a more meaningful fan experience.
        </p>
      </div>
      <SlideImage img1="/images/Stepper.png" img2="/images/android.png" />
    </div>
  );
}

function Slide2() {
  return (
    <div className="slide2 flex flex-col lg:flex-row justify-center gap-8 items-center pt-14 lg:pr-12  lg:pb-4">
      <div className="space-y-6 lg:max-w-1/2">
        <h2 className="text-3xl font-raleway font-semibold">
          Artists, Keep It Simple
        </h2>
        <p className="pb-8 leading-7">
          Artists can easily share and update content through a clean,
          login-based web interface. From uploading new material to keeping fans
          in the loop with announcements and exclusive content — everything is
          streamlined to help you focus on creativity and build stronger fan
          relationships.
        </p>
      </div>
      <SlideImage img1="/images/stepper2.png" img2="/images/android2.png" />
    </div>
  );
}

function Slide3() {
  return (
    <div className="slide3 flex flex-col lg:flex-row justify-center gap-8 items-center pt-14 lg:pr-12  lg:pb-4">
      <div className="space-y-6 lg:max-w-1/2 ">
        <h2 className="text-3xl font-raleway font-semibold">
          More Than Just a Fan
        </h2>
        <p className="pb-8 leading-7">
          Superfans can register their own accounts to create personalized
          versions of selected songs, collaborate with other fans, and take part
          in a vibrant community. They get early access to concert tickets,
          exclusive events, physical releases, and limited-edition merch — all
          designed for the most dedicated fans.
        </p>
      </div>
      <SlideImage img1="/images/Stepper3.png" img2="/images/android3.png" />
    </div>
  );
}

function SlideImage({ img1, img2 }: { img1: string; img2: string }) {
  return (
    <div className="relative flex justify-center items-center md:w-1/2">
      <div className="absolute transition-all duration-500 ease-out z-10 w-full md:w-1/2 h-[320px] sm:h-[350px] md:h-[300px] lg:h-[400px] xl:h-[550px] bottom-8 -left-12 sm:bottom-12 sm:-left-17 md:bottom-10 md:left-10 lg:bottom-10 lg:left-10 xl:bottom-6 xl:left-12">
        <Image src={img1} alt="Iphone " fill className="object-contain" />
      </div>
      <div className="rounded-full w-[350px] h-[350px] sm:w-[400px] sm:h-[400px] md:w-[350px] md:h-[350px] lg:w-[450px] lg:h-[450px] xl:w-[600px] xl:h-[600px] bg-light-purple mb-10 blur-xl"></div>
      <div className="absolute transition-all duration-500 ease-out w-full md:w-1/2 h-[320px] md:h-[300px] sm:h-[350px] lg:h-[400px] xl:h-[550px] -top-4 left-16 sm:-top-4 sm:left-17 md:-top-1 md:left-39 lg:-top-4 lg:left-48 xl:-top-5 xl:left-64">
        <Image src={img2} alt="mobilephone" fill className="object-contain" />
      </div>
    </div>
  );
}
