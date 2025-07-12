"use client"

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { members } from "./members";

export function Superfan() {
    const [selected, setSelected] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setSelected((prev) => (prev + 1) % members.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [isAutoPlaying]);

    const handleAvatarClick = (index: number) => {
        setSelected(index);
        setIsAutoPlaying(false);
    };

    return (
      <section
        id="superfan"
        className="flex flex-col items-center w-full  md:flex-row md:justify-center "
      >
        <Image
          className="fade-edge md:w-1/3"
          src="/Superfan.jpg"
          alt="Superfan"
          width={300}
          height={300}
          draggable={false}
        />

        <div className="flex flex-col md:w-2/3 md:ml-15">
          <h1 className="text-5xl font-raleway font-semibold">
            What is Superfan app?
          </h1>
          <p className="mt-5 leading-7 ">
            The Superfan app, powered by Oiid, provides artists with a private,
            secure platform to build an exclusive community and directly engage
            with their most loyal fans, fostering deeper connections and
            interactions.
          </p>
          <div className="">
            <div>
              <h3 className="mt-8 mb-6">Our fans and artists:</h3>
            </div>
            <div>
              <div className="flex flex-row ml-2 my-4 justifycontent-center items-center gap-2">
                {members.map((m, i) => (
                  <span
                    key={m.name}
                    onClick={() => handleAvatarClick(i)}
                    className={`-m-3 cursor-pointer hover:shadow-lg transition-shadow duration-200 border-4 border-white dark:border-black rounded-full${
                      selected === i ? " outline-4 outline-light-purple" : ""
                    }`}
                  >
                    <Image
                      src={m.src}
                      alt={m.name}
                      width={80}
                      height={80}
                      draggable={false}
                      className="rounded-full"
                    />
                  </span>
                ))}
              </div>
              <div className="mt-6">
                <p className="mt-1 font-bold">{members[selected].name}</p>
                <p className="mt-1 italic">
                  &ldquo;{members[selected].opinion}&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}
