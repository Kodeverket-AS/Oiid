import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Members } from '@/components/Members';


export function Superfan() {
    return (
        <section className='flex flex-col items-center w-full md:flex-row md:justify-center '>           
                    <Image
                    className="fade-edge md:w-1/3"
                    src="/Superfan.jpg"
                    alt="Superfan"
                    width={300}
                    height={300}
                    draggable={false}
                     />                

                <div className='flex flex-col md:w-1/2 md:ml-15'>
                    <h1 className='text-5xl'>Hva er Superfan?</h1>
                    <p className='mt-5'>The Superfan app powered by Oiid allows the artist to create a curated safe space, where the artist and their most dedicated fans meet.</p>
                        <div className=''>
                            <div>
                             <h3 className='mt-8 mb-1'>Våre fans og artister:</h3>
                            </div>
                            <div>
                                <div className='flex flex-row'>
                                <Members />
                                <Members />
                                <Members />
                                <Members />
                                <Members />
                                <Members />                                    
                            </div>
                            <p className='mt-1'>[komentar felt]</p>
                        </div>                            
                    </div>
                </div>                        
        </section>
    );
}