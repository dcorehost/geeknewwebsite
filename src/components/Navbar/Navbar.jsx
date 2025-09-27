import React, { useState } from "react";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDropdown = (dropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setActiveDropdown(null);
  };

  return (
    <nav className="shadow-lg font-sans">

      <div className="h-2" style={{ backgroundColor: "#02C9B7" }}></div>

      <div style={{ backgroundColor: "#062B7E" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">

            <div className="flex items-center">
              <a href="/" className="flex-shrink-0">
                <img src="" alt="Company Logo" className="h-10 w-auto" />
              </a>
            </div>

           
            <div className="hidden md:flex items-center space-x-8 text-white font-medium">
              <a href="/" className="hover:text-[#02C9B7] transition-colors">Home</a>
              <a href="/about-us" className="hover:text-[#02C9B7] transition-colors">About Us</a>

              
              <div className="relative">
                <button
                  onClick={() => toggleDropdown("services")}
                  className="flex items-center hover:text-[#02C9B7] transition-colors"
                >
                  Our Services
                  <svg
                    className={`ml-1 w-4 h-4 transform transition-transform ${
                      activeDropdown === "services" ? "rotate-180" : ""
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 
                      011.414 0L10 10.586l3.293-3.293a1 1 
                      0 111.414 1.414l-4 4a1 1 0 
                      01-1.414 0l-4-4a1 1 0 
                      010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                {activeDropdown === "services" && (
                  <div className="absolute mt-2 w-56 bg-white text-gray-800 rounded-xl shadow-lg border-t-4 border-[#02C9B7] z-20">
                    {["WiFi","Laptop","IOS/Android","Antivirus","Network","PC/Mac","Printer","Tablets"].map((item) => (
                      <a
                        key={item}
                        href={`/${item.toLowerCase().replace(/\s+/g, "")}`}
                        className="block px-4 py-2 hover:bg-[#02C9B7] hover:text-white transition-colors rounded-lg"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                )}
              </div>
                
              <a href="/contact-use" className="hover:text-[#02C9B7] transition-colors">Contact</a>
            </div>

            
            <div className="hidden md:flex">
              <a
                href="/book-appointment"
                className="ml-6 px-5 py-2 rounded-full font-semibold text-white shadow-md hover:shadow-xl transition-all duration-300"
                style={{
                  background: "linear-gradient(135deg, #02C9B7, #028f7e)",
                }}
              >
                Book Appointment
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="p-2 rounded-md text-white hover:bg-[#02C9B7] transition"
              >
                {!isMobileMenuOpen ? (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
                  </svg>
                ) : (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      

      {isMobileMenuOpen && (
        <div
          className="md:hidden text-white font-medium"
          style={{
            background: "linear-gradient(135deg, #02C9B7 60%,  #062B7E 100%)",
          }}
        >
          <div className="px-4 py-3 space-y-2">
            <a href="/" className="block px-3 py-2 rounded hover:bg-[#062B7E] transition">Home</a>
            <a href="/about-us" className="block px-3 py-2 rounded hover:bg-[#062B7E] transition">About Us</a>
            <a href="/contact-us" className="block px-3 py-2 rounded hover:bg-[#062B7E] transition">Contact</a>

            
            <button
              onClick={() => toggleDropdown("services")}
              className="flex justify-between items-center w-full px-3 py-2 rounded hover:bg-[#062B7E] transition"
            >
              Our Services
              <svg
                className={`w-4 h-4 transform transition-transform ${
                  activeDropdown === "services" ? "rotate-180" : ""
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0
                  011.414 0L10 10.586l3.293-3.293a1 1
                  0 111.414 1.414l-4 4a1 1 0
                  01-1.414 0l-4-4a1 1 0
                  010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {activeDropdown === "services" && (
              <div className="mt-1 ml-4 bg-white text-gray-800 rounded-lg shadow-lg border-t-4 border-[#02C9B7]">
                {["WiFi","Laptop","IOS/Android","Antivirus","Network","PC/Mac","Printer","Tablets"].map((item) => (
                  <a
                    key={item}
                    href={`/${item.toLowerCase().replace(/\s+/g, "")}`}
                    className="block px-4 py-2 hover:bg-[#02C9B7] hover:text-white transition-colors rounded"
                  >
                    {item}
                  </a>
                ))}
              </div>
            )}

            
            <a
              href="/book-appointment"
              className="block mt-3 px-3 py-2 rounded-full text-center font-semibold text-white shadow-md hover:shadow-lg transition"
              style={{
                background: "linear-gradient(135deg, #02C9B7, #028f7e)",
              }}
            >
              Book Appointment 
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
