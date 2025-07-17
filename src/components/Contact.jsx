// src/pages/Contact.jsx
import React from "react";
import { FaWhatsapp, FaInstagram, FaLinkedin, FaGithubSquare, FaFirefoxBrowser } from "react-icons/fa";
import { GrUserAdmin } from "react-icons/gr";
import { TiShoppingCart } from "react-icons/ti";
import { MdMan3 } from "react-icons/md";
import { MdMilitaryTech } from "react-icons/md";
import { GiBookmarklet } from "react-icons/gi";
import { MdOutlineDesignServices } from "react-icons/md";
import { ImLab } from "react-icons/im";

export default function Contact() {
  return (
    <div 
  id="contact" 
  className="min-h-screen w-full md:h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-black text-white px-4 py-10 md:px-24 md:pt-24 z-10 md:snap-start"
>
  <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">Contact Us</h1>

  <div className="flex flex-col md:flex-row gap-6">
    {/* Section 1: Own Products */}
    <div className="w-full bg-white/10 rounded-2xl p-6 shadow-lg backdrop-blur-md transition-all hover:scale-[1.02] hover:bg-white/20">
      <h2 className="text-xl md:text-2xl font-semibold mb-4" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 1)' }}>Own Products</h2>
      <ul className="space-y-2 text-gray-200" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 1)' }}>
        <li><span className="flex items-center gap-2"><FaFirefoxBrowser />Custom Web Apps</span></li>
        <li><span className="flex items-center gap-2"><GrUserAdmin />Admin Dashboards</span></li>
        <li><span className="flex items-center gap-2"><TiShoppingCart />E-Commerce Platforms</span></li>
        <li><span className="flex items-center gap-2"><MdMan3 />Digital Portfolios</span></li>
      </ul>
    </div>

    {/* Section 2: Find Us On */}
    <div className="w-full bg-white/10 rounded-2xl p-6 shadow-lg backdrop-blur-md transition-all hover:scale-[1.02] hover:bg-white/20">
      <h2 className="text-xl md:text-2xl font-semibold mb-4" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 1)' }}>Find Us On</h2>
      <ul className="space-y-2 text-gray-200" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 1)' }}>
        <li><a href="https://github.com/ndc-doodles/" target="_blank" rel="noopener noreferrer"><span className="flex items-center gap-2"><FaGithubSquare />Github</span></a></li>
        <li><a href="https://in.linkedin.com/company/cybexel" target="_blank" rel="noopener noreferrer"><span className="flex items-center gap-2"><FaLinkedin />LinkedIn</span></a></li>
        <li><a href="https://wa.me/9048066767" target="_blank" rel="noopener noreferrer"><span className="flex items-center gap-2"><FaWhatsapp />Whatsapp</span></a></li>
        <li><a href="https://www.instagram.com/cybexel_pvtltd?igsh=dTdraDRkZnY4NWQ3" target="_blank" rel="noopener noreferrer"><span className="flex items-center gap-2"><FaInstagram />Instagram</span></a></li>
      </ul>
    </div>

    {/* Section 3: Our Big Customers */}
    <div className="w-full bg-white/10 rounded-2xl p-6 shadow-lg backdrop-blur-md transition-all hover:scale-[1.02] hover:bg-white/20">
      <h2 className="text-xl md:text-2xl font-semibold mb-4" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 1)' }}>Our Big Customers</h2>
      <ul className="space-y-2 text-gray-200" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 1)' }}>
        <li><span className="flex items-center gap-2"><MdMilitaryTech />Tech Corp</span></li>
        <li><span className="flex items-center gap-2"><GiBookmarklet />EduSoft Solutions</span></li>
        <li><span className="flex items-center gap-2"><MdOutlineDesignServices />DesignForge</span></li>
        <li><span className="flex items-center gap-2"><ImLab />CloudNine Labs</span></li>
      </ul>
    </div>
  </div>
</div>

  );
}
