import React from "react";

const LocationSection = () => {
  return (
    <section className="min-h-screen md:pt-24 pt-5 px-5 pb-20 bg-gradient-to-br from-blue-900 via-purple-900 to-black text-white">
      <div className="flex flex-col-reverse md:flex-row max-w-7xl mx-auto gap-6">
        {/* Left side: Location and Social Links stacked */}
        <div className="w-full md:w-1/2 flex flex-col gap-6 md:pl-[7%]">
          {/* Location Box */}
          <div className="bg-white/10 rounded-2xl p-6 shadow-lg backdrop-blur-md">
            <a href="https://maps.app.goo.gl/fMRVRpC3BzgXx2bK9" target="_blank" rel="noopener noreferrer">
              <h2 className="text-xl font-bold mb-4">Head Office - Cochin</h2>
              <p className="text-gray-300 mb-1">Cybexel Technologies Pvt Ltd.</p>
              <p className="text-gray-300 mb-1">Alfa Horizon</p>
              <p className="text-gray-300 mb-1">Vallarpadam, Cochin</p>
              <p className="text-gray-300">Kerala, India - 682504</p>
            </a>
          </div>

          {/* Social Links Box */}
          <div className="bg-white/10 rounded-2xl p-6 shadow-lg backdrop-blur-md">
            <h2 className="text-xl font-bold mb-4">Connect With Us</h2>
            <ul className="text-gray-300 space-y-1">
              <li>📧 contact@cybexel.com</li>
              <li>🌐 www.cybexel.com</li>
              <li>📞 +91 98765 43210</li>
              <li>🔗 LinkedIn | Instagram | Facebook</li>
            </ul>
          </div>
        </div>

        {/* Right side: Contact Form */}
        <div className="w-full md:w-1/2 h-auto min-h-[420px] bg-white/10 rounded-2xl shadow-lg backdrop-blur-md overflow-hidden p-4 flex items-center justify-center">
          <form className="w-full max-w-md space-y-4">
            {/* Name and Email side-by-side on small+ screens */}
            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
              <div className="flex-1">
                <label htmlFor="name" className="block text-white text-sm font-medium mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded-md bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="flex-1">
                <label htmlFor="email" className="block text-white text-sm font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-md bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-white text-sm font-medium mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full px-4 py-2 rounded-md bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Write your message..."
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
