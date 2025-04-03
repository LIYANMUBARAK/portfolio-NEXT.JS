"use client"
import Link from "next/link"
import React,{useState} from "react"
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"
import {motion} from 'framer-motion'




const Navbar = () => {
    const navlinks = [
      { title: "About", path: "" },
      { title: "Portfolio", path: "" }
  
    ];

    const [nav, setNav] = useState(false)

    const toggleNav = () => {
        setNav(!nav)
    }

    const closeNav = () =>{
        setNav(false)
    }

  
    return (
      <div className="text-white/70 pt6">
        <div className="md:flex items-center px-4 py-2 mx-auto max-w-[400px]">
          <ul className = "flex flex-row p-4 space-x-8">
            {navlinks.map((link, index) => (
              <li key={index}>
                <Link href={link.path}>
                  <p>{link.title}</p>
                </Link>
              </li>
            ))}
            <li>
                <a>
                    <h1 className="text-lg font-bold text-white/70 cursor-pointer">Contact Me</h1>
                    <div className="relative">
                        <div className="absolute w-2/3 h-1 transition-all duration-300 ease-out
                         bg-irange-400 rounded-full group-hover:w-full"></div>
                        <div className="mt-1 absolute w-2/3 h-1 transition-all duration-300 ease-out
                         bg-irange-600 rounded-full group-hover:w-full">
                        </div>
                    </div>
                </a>
            </li>
          </ul>
        </div>

        <div onClick = {toggleNav} className="md:hidden absolute top-5 right border rounded border-white/70 p-2 z-50">
            {nav ?  <AiOutlineClose size={30}/> : <AiOutlineMenu size={30}/>}
        </div>

      </div>
    );
  };
export default Navbar