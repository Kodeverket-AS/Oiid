import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


export function Superfan() {
    return (
        <section className='flex flex-col items-center w-full md:flex-row md:justify-center '>           
                    <Image
                    className="fade-edge md:w-1/3"
                    src="/Superfan.jpg"
                    alt="Superfan"
                    width={320}
                    height={320}
                    draggable={false}
                     />                

                <div className='md:w-1/2 flex flex-col self-center md:ml-10'>
                    <h1 className='text-6xl  md:ml-10'>Hva er Superfan?</h1>
                    <p className='text-md mt-6 md:ml-11'>The Superfan app powered by Oiid allows the artist to create a curated safe space, where the artist and their most dedicated fans meet.</p>
                        <div className='mt-6 md:ml-11'>
                            <div>
                             <h3 className='font-bold'>Våre fans og artister:</h3>
                            </div>
                            <div>
                                <div className='flex flex-row'>
                                <Image
                                    className='border-3 p-1 border-indigo-600 rounded-full'
                                    src="/Rectangle 19.png"
                                    alt=""
                                    width={320}
                                    height={320}
                                    draggable={false}
                                    />
                                    <Image
                                    className='border-3 p-1 border-indigo-600 rounded-full'
                                    src="/Rectangle 20.png"
                                    alt=""
                                    width={320}
                                    height={320}
                                    draggable={false}
                                    />
                                    <Image
                                    className='border-3 p-1 border-indigo-600 rounded-full'
                                    src="/Rectangle 21.png"
                                    alt=""
                                    width={320}
                                    height={320}
                                    draggable={false}
                                    />
                                    <Image
                                    className='border-3 p-1 border-indigo-600 rounded-full'
                                    src="/Rectangle 22.png"
                                    alt=""
                                    width={320}
                                    height={320}
                                    draggable={false}
                                    />
                                    <Image
                                    className='border-3 p-1 border-indigo-600 rounded-full'
                                    src="/Rectangle 23.png"
                                    alt=""
                                    width={320}
                                    height={320}
                                    draggable={false}
                                    />
                                    <Image
                                    className='border-3 p-1 border-indigo-600 rounded-full'
                                    src="/Rectangle 24.png"
                                    alt=""
                                    width={320}
                                    height={320}
                                    draggable={false}
                                    />
                            </div>
                            <p>komentar felt</p>
                            </div>
                            
                    </div>
                </div>                        
        </section>
    );
}