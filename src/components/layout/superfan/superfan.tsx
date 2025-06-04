import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export function Superfan() {
    return (
        <section className='w-full flex flex-col md:flex-row'>
            <Image
                className="rounded-full w-80 h-80 object-cover object-center self-center mt-10 "
                src="/Superfan.jpg"
                alt="Superfan"
                width={200}
                height={200}
                draggable={false}
            />

            <div className='md:w-1/2 flex flex-col'>
                <h1 className='text-6xl mt-10'>Hva er Superfan?</h1>
                <p className='text-lg mt-6'>The Superfan app powered by Oiid allows the artist to create a curated safe space, where the artist and their most dedicated fans meet.</p>
                <div className='mt-6'>
                    <div>
                        <h3 className='font-bold'>Våre fans og artister:</h3>
                    </div>
                    <div>
                        <p>Karusell (med komentar)</p>
                    </div>
                </div>
            </div>
        </section>

    );
}