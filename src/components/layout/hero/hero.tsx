import React from 'react';
import Image from 'next/image';

export function Hero() {
  return (
    <section className='flex flex-col md:flex-row-reverse w-full'>
        <div className='w-full'>
            <Image className='w-full'
            src="/Hero-Img.png"
            alt="Hero Image"
            width={425}
            height={319}
            draggable={false}
            />
                
        </div>
        <div>
            <div className='flex flex-col gap-1'>
                <div>
                    <div className='flex flex-col md:flex-row'>
                        <h1 className='text-5xl'>Tettere på fansen enn noen gang før med <span className='font-bold'style={{ color: 'rgba(135, 72, 226, 1)' }}>Superfan</span> </h1>
                    </div>
                </div>
                
                <div>
                    <p className='mt-3'>Hjelper artister med å skape unike musikkrom med direkte tilgang til sine mest lidenskapelige fans.</p>
                </div>
            </div>
            <div className='flex flex-row gap-5 mt-5'>
                <div>
                    <Image
                    src="/App-stor.png"
                    alt="App stoer logo"
                    width={400}
                    height={300} 
                    />
                </div>
                <div>
                    <Image 
                    src="/Googl-play.png"
                    alt="Googl-play logo"
                    width={400}
                    height={300} 
                    />
                </div>
            </div>                
        </div> 
    </section>
  );
}