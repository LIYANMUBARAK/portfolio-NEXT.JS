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
  
    return (
      <div className="text-white/70 pt6">
        <div className="md:flex items-center px-4 py-2 mx-auto max-w-[400px]">
          <ul>
            {navlinks.map((link, index) => (
              <li key={index}>
                <Link href={link.path}>
                  <p>{link.title}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };
export default Navbar