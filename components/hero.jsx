"use client";

import React from 'react'
import Link from 'next/link';
import { Button } from './ui/button';
import Image from 'next/image';
const HeroSec = () => {
  return <div className='pb-20 px-4'>
      <div className='container mx-auto text-center'>
        <h1 className="bg-gradient-to-br from-[#E63946] to-[#FF0000] font-extrabold tracking-tighter pr-2 pb-2 text-transparent bg-clip-text text-5xl md:text-8xl lg:text-[105px] pb-6">
  Manage Your Finance
</h1>
        <div className='flex justify-center space-x-4'>
          <Link href="/dashboard">
          <Button size="lg" className="px-8 my-4 py-4 rounded-full text-lg">
  Dive In
</Button>

          </Link>
        </div>
        <div>
           {/* <div>
            <Image src="/banner.jpeg" width={1280} height={520} alt ="banner" className='rounded-lg shadow-2xl border mx-auto' priority/>
           </div> */}
        </div>
      </div>
  </div>;
};

export default HeroSec
