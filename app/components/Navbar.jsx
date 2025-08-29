"use client";
import Link from 'next/link';
import React, { useState } from 'react'
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";


const navLinks = [
    {        title: "Home",
            path: "/"
    },
    {
        title: "About",
        path: "#about", 
    } ,
    {
        title: "Projects",
        path: "#projects",
    },
    {
        title: "Contact",
    path: "#contact",
    }
];


const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav>
        <div className='flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2'>
            {/* Logo section */}
        <Link
        href={"/"}
        className="text-xl md:text-3xl font-semibold">
        <span className="text-[#8245ec]">&lt;</span>
          <span className="text-white">Satish</span>
          <span className="text-[#8245ec]">/</span>
          <span className="text-white">Yadav</span>
          <span className="text-[#8245ec]">&gt;</span>
        </Link>
        {/* mobile menu */}
        <div className='mobile-menu block md:hidden'>
          {
            !navbarOpen ? (
                <button onClick={() => setNavbarOpen(true)}
                className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>
                    <Bars3Icon className='h-5 w-5' />
                </button>
            ) : (
                <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
            )
          }
        </div>
        {/* desktop menu */}
        <div className='menu hidden md:block md:w-auto' id='navbar'>
            <ul className='flex md:flex-row p-4 space-x8'>
                {
                  navLinks.map((link, index) => (
                    <li key={index} >
                        <Link
                        href={link.path}
                        className='text-slate-200 hover:text-white px-4 py-2 text-xl font-extrabold'
                        >
                            {link.title}
                        </Link>
                    </li>
               ))}
            </ul>
        </div>
        </div>
       {/* when */}
       {navbarOpen && (
         <div className='mobile-menu md:hidden'>
          <ul className='flex flex-col py-4 items-center'>
            {
              navLinks.map((link, index) => (
                <li key={index} className='py-2'>
                  <Link
                    href={link.path}
                    className='text-slate-200 hover:text-white px-4 py-2 text-xl font-extrabold'
                  >
                    {link.title}
                  </Link>
                </li>
              ))
            }
          </ul>
        </div>
       )}
    </nav>
  )
}

export default Navbar