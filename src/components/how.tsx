"use client";

import { Button } from "./ui/buttons/Button";
import Image from "next/image";

export function How() {
    return (
        <section id='how' className='pt-10'>
            <div className='h-full w-full flex justify-center gap-10 items-center flex-col lg:flex-row '>
                <div className='w-full text-start p-2 space-y-10 mb-10'>
                  <div id="scrollsection" className="max-h-1/3 flex flex-col gap-40">
                     <h1 className='text-5xl lg:text-5xl font-semibold leading-tight font-raleway '>
                        How does it work?
                    </h1>
                    <div className='space-y-6'>
                        <h2 className='text-3xl font-raleway font-semibold'>
                            Unleash your inner artist and become part of the
                            fan-driven experience.
                        </h2>
                        <p className='md:w-4/5 '>
                            Superfans can register their own accounts to create
                            personalized versions of selected songs, interact
                            and collaborate with other superfans, and get early
                            access to concert tickets, exclusive events,
                            physical releases, and merch.
                        </p>
                    </div>
 <div className='space-y-6 '>
                            <h2 className='text-3xl font-raleway font-semibold'>
                                Collaborate with others
                            </h2>
                            <p className='md:w-4/5'>
                                Connect with fellow superfans, share your creations,
                                and build your own community within the fanbase.
                            </p>
                        </div>
                        <div className='space-y-6 '>
                            <h2 className='text-3xl font-raleway font-semibold'>
                                Get exclusive rewards
                            </h2>
                            <p className='md:w-4/5'>
                                Access early-bird tickets, special merchandise,
                                and fan-only physical releases.
                            </p>
                        </div>

  </div>
                    

                </div>
                <div className='relative flex justify-center items-center md:w-1/2'>
                    <div
                        className=' 
    absolute transition-all duration-500 ease-out z-10
    w-full md:w-1/2 h-[320px] sm:h-[350px] md:h-[300px] lg:h-[400px] xl:h-[550px] 
    bottom-8 -left-12 sm:bottom-12 sm:-left-17 md:bottom-10 md:left-10  lg:bottom-10 lg:left-10 xl:bottom-6 xl:left-12'
                    >
                        <Image
                            src='/images/Stepper.png'
                            alt='androidphone'
                            fill
                            className='object-contain '
                        />
                    </div>

                    <div className='rounded-full w-[350px] h-[350px] sm:w-[400px] sm:h-[400px] md:w-[350px] md:h-[350px] lg:w-[450px] lg:h-[450px] xl:w-[600px] xl:h-[600px]  bg-light-purple  mb-10 blur-xl'></div>
                    <div
                        className='absolute 
    transition-all duration-500 ease-out 
    w-full md:w-1/2 h-[320px] md:h-[300px] sm:h-[350px] lg:h-[400px] xl:h-[550px] -top-4 left-16 sm:-top-4  sm:left-17 md:-top-1  md:left-39  lg:-top-4  lg:left-48 xl:-top-5  xl:left-64 '
                    >
                        <Image
                            src='/images/android.png'
                            alt='mobilephone'
                            fill
                            className='object-contain '
                        />
                    </div>
                </div>
            </div>

            <div className='w-full h-full lg:flex gap-10 flex-col lg:flex-col items-center justify-center my-20 '>
                <h1 className='text-4xl lg:text-5xl p-2 font-semibold font-raleway lg:w-2/3'>
                    Head to our registration page and launch your own Superfan
                    app today!
                </h1>
                <div className='w-full flex justify-center max-w-3xl my-3'>
                    <Button
                        className='rounded-sm px-16 w-full sm:w-auto'
                        variant='primary'
                    >
                        Sign Up
                    </Button>
                </div>
            </div>
        </section>
    );
}
