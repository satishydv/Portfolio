"use client";
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  return (
    <section className='lg:py-16'>
      <div className='grid grid-cols-1 sm:grid-cols-12'>
        {/* Text section */}
        <div className='col-span-8 place-self-center text-center sm:text-left justify-self-start'>
          <h1 className='text-white mb-4 text-4xl sm:text-5xl md:text-8xl font-extrabold lg:leading-normal'>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Satish",
                1000,
                "Web Developer",
                1000,
                "Mobile Developer",
                1000,
                "UI/UX Designer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className='text-[#ADB7BE] text-lg md:text-xl mb-6'>
            I'm a passionate web developer with a focus on creating dynamic and
            responsive web applications. I love coding and enjoy turning ideas
            into reality through technology.
          </p>
          {/* Links */}
          {/* <div>
            <Link>
               Hire Me
            </Link>
            <Link>
            Download Resume
            </Link>
          </div> */}
        </div>
        {/* img section */}
        <div className='col-span-4 place-self-center mt-4 md:mt-0'>
          <div className='rounded-full bg-[#181818] w-[250px] h-[250px] md:w-[300px] md:h-[400px] relative'>
              <Image
            src="/images/hero-img.png"
            alt="Hero Image"
            width={300}
            height={300}
            // this class is used to center the image relative to the parent div
            className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full'
          />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection