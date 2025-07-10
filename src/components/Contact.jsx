// src/pages/Contact.jsx
import React from "react";

export default function Contact() {
  return (
    <div className="min-h-screen w-full pt-24 pl-24 bg-gradient-to-br from-blue-900 via-purple-900 to-black text-white px-6 py-10">
      <h1 className="text-4xl font-bold text-center mb-10">Contact Us</h1>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Section 1: Own Products */}
        <div className="flex-1 bg-white/10 rounded-2xl p-6 shadow-lg backdrop-blur-md transition-all hover:scale-[1.02] hover:bg-white/20">
          <h2 className="text-2xl font-semibold mb-4">Own Products</h2>
          <ul className="space-y-2 text-gray-200">
            <li>Custom Web Apps</li>
            <li>Admin Dashboards</li>
            <li>E-Commerce Platforms</li>
            <li>Digital Portfolios</li>
          </ul>
        </div>

        {/* Section 2: Find Us On */}
        <div className="flex-1 bg-white/10 rounded-2xl p-6 shadow-lg backdrop-blur-md transition-all hover:scale-[1.02] hover:bg-white/20">
          <h2 className="text-2xl font-semibold mb-4">Find Us On</h2>
          <ul className="space-y-2 text-gray-200">
            <li>GitHub</li>
            <li>LinkedIn</li>
            <li>Twitter</li>
            <li>Dribbble</li>
          </ul>
        </div>

        {/* Section 3: Our Big Customers */}
        <div className="flex-1 bg-white/10 rounded-2xl p-6 shadow-lg backdrop-blur-md transition-all hover:scale-[1.02] hover:bg-white/20">
          <h2 className="text-2xl font-semibold mb-4">Our Big Customers</h2>
          <ul className="space-y-2 text-gray-200">
            <li>TechCorp Inc.</li>
            <li>EduSoft Solutions</li>
            <li>DesignForge</li>
            <li>CloudNine Labs</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
