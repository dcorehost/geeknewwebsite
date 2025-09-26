import React, { useState } from "react";

//import logo from "../../assets/images/logo.png";

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
    <nav className="shadow-lg">
      <div className="h-2" style={{ backgroundColor: "#009739" }}></div>

      <div style={{ backgroundColor: "#f6be1a" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <a href="/" className="flex-shrink-0">
                <img src="" alt="Company Logo" className="h-10 w-auto" />
              </a>
            </div>

            <div className="hidden md:flex space-x-8 text-white font-bold">
              <a href="/" className="hover:text-[#009739]">
                Home
              </a>

              <a href="/about-us" className="hover:text-[#009739]">
                About Us
              </a>

            

              <div className="relative">
                <button
                  onClick={() => toggleDropdown("services")}
                  className="flex items-center hover:text-[#009739] font-bold"
                >
                  Services
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
                  <div className="absolute mt-2 w-56 bg-white text-gray-800 rounded-lg shadow-lg border-t-4 border-[#f6be1a] z-10 font-bold">
                    <a
                      href="/wifi"
                      className="block px-4 py-2 hover:bg-[#009739] hover:text-white"
                    >
                      WiFi
                    </a>

                    <a
                      href="/laptop"
                      className="block px-4 py-2 hover:bg-[#009739] hover:text-white"
                    >
                      Laptop
                    </a>

                    <a
                      href="/iosandroid"
                      className="block px-4 py-2 hover:bg-[#009739] hover:text-white"
                    >
                      IOS/Android
                    </a>

                    <a
                      href="/antivirus"
                      className="block px-4 py-2 hover:bg-[#009739] hover:text-white"
                    >
                      Antivire
                    </a>

                    <a
                      href="/network"
                      className="block px-4 py-2 hover:bg-[#009739] hover:text-white"
                    >
                      Network
                    </a>

                    <a
                      href="/pcmac"
                      className="block px-4 py-2 hover:bg-[#009739] hover:text-white"
                    >
                      PC/Mac
                    </a>

                    <a
                      href="/printer"
                      className="block px-4 py-2 hover:bg-[#009739] hover:text-white"
                    >
                     Printer
                    </a>

                    <a
                      href="/tablets"
                      className="block px-4 py-2 hover:bg-[#009739] hover:text-white"
                    >
                      Tablets
                    </a>

                  </div>
                )}
              </div>

             

              <a href="/blog" className="hover:text-[#009739]">
                
              </a>

              <a href="/contact-us" className="hover:text-[#009739]">
                Contact
              </a>
              {/* <a
                href="https://kulpreetkashbulls.themfbox.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#009739]"
              >
                Login
              </a>
               <a
                href="https://kulpreetkashbulls.themfbox.com/signup"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#009739]"
              >
                SignUp
              </a> */}
            </div>

            <div className="-mr-2 flex md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="p-2 rounded-md text-white hover:bg-[#009739] transition"
              >
                {!isMobileMenuOpen ? (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div
          className="md:hidden text-white font-bold"
          style={{
            background: "linear-gradient(135deg, #009739 60%, #f6be1a 100%)",
          }}
        >
          <div className="px-4 py-3 space-y-1">
            <a href="/" className="block px-3 py-2 rounded hover:bg-[#009739]">
              Home
            </a>

            <a
              href="/about-us"
              className="block px-3 py-2 rounded hover:bg-[#009739]"
            >
              About Us
            </a>

            <a
              href="/our-Values"
              className="block px-3 py-2 rounded hover:bg-[#009739]"
            >
              Values
            </a>

            <button
              onClick={() => toggleDropdown("services")}
              className="flex justify-between items-center w-full px-3 py-2 rounded hover:bg-[#009739]"
            >
              Services
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
              <div className="mt-1 ml-4 bg-white text-gray-800 rounded-lg shadow-lg border-t-4 border-[#009739] font-bold">
                <a
                  href="/financial-planning"
                  className="block px-4 py-2 hover:bg-[#009739] hover:text-white"
                >
                  Financial Planning
                </a>

                <a
                  href="/investment-management"
                  className="block px-4 py-2 hover:bg-[#009739] hover:text-white"
                >
                  Investment Management
                </a>

                <a
                  href="/retirement-planning"
                  className="block px-4 py-2 hover:bg-[#f6be1a] hover:text-white"
                >
                  Retirement Planning
                </a>

                <a
                  href="/risk-management"
                  className="block px-4 py-2 hover:bg-[#009739] hover:text-white"
                >
                  Risk Management & Insurance
                </a>

                <a
                  href="/education-funding"
                  className="block px-4 py-2 hover:bg-[#f6be1a] hover:text-white"
                >
                  Education Funding
                </a>

                <a
                  href="/estate-planning"
                  className="block px-4 py-2 hover:bg-[#f6be1a] hover:text-white"
                >
                  Estate Planning
                </a>

                <a
                  href="/mutualfund-page"
                  className="block px-4 py-2 hover:bg-[#009739] hover:text-white"
                >
                  Mutual Funds
                </a>

                <a
                  href="/life-insurance"
                  className="block px-4 py-2 hover:bg-[#009739] hover:text-white"
                >
                  Life Insurance
                </a>

                <a
                  href="/health-insurance"
                  className="block px-4 py-2 hover:bg-[#009739] hover:text-white"
                >
                  Health Insurance
                </a>

                <a
                  href="/vehicle-insurance"
                  className="block px-4 py-2 hover:bg-[#009739] hover:text-white"
                >
                  Vehicle Insurance
                </a>

                <a
                  href="/fixed-deposit"
                  className="block px-4 py-2 hover:bg-[#009739] hover:text-white"
                >
                  Fixed Deposits
                </a>
              </div>
            )}

            <button
              onClick={() => toggleDropdown("tools")}
              className="flex justify-between items-center w-full px-3 py-2 rounded hover:bg-[#f6be1a]"
            >
              Tools & Calculators
              <svg
                className={`w-4 h-4 transform transition-transform ${
                  activeDropdown === "tools" ? "rotate-180" : ""
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0

                  011.414 0L10 10.586l3.293-3.293a1 1

                  0 111.414 1.414l-4 4a1 1

                  0 01-1.414 0l-4-4a1 1

                  0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {activeDropdown === "tools" && (
              <div className="mt-1 ml-4 bg-white text-gray-800 rounded-lg shadow-lg border-t-4 border-[#f6be1a] font-bold">
                <a
                  href="/sip-calculator"
                  className="block px-4 py-2 hover:bg-[#f6be1a] hover:text-white"
                >
                  Sip Calculator
                </a>

                <a
                  href="/mutualfund-calculator"
                  className="block px-4 py-2 hover:bg-[#f6be1a] hover:text-white"
                >
                  MutualFund Calculator
                </a>

                <a
                  href="/mutualfund-calculator"
                  className="block px-4 py-2 hover:bg-[#f6be1a] hover:text-white"
                >
                  MutualFund Calculator
                </a>

                <a
                  href="/emi-calculator"
                  className="block px-4 py-2 hover:bg-[#f6be1a] hover:text-white"
                >
                  EMI Calculator
                </a>

                <a
                  href="/loan-calculator"
                  className="block px-4 py-2 hover:bg-[#f6be1a] hover:text-white"
                >
                  Loan Calculator
                </a>
                <a
                  href="/swp-calculator"
                  className="block px-4 py-2 hover:bg-[#f6be1a] hover:text-white"
                >
                  SWP Calculator
                </a>
                <a
                  href="/compound-calculator"
                  className="block px-4 py-2 hover:bg-[#f6be1a] hover:text-white"
                >
                  Compound Intrest Calculator
                </a>
                <a
                  href="/homeloan-calculator"
                  className="block px-4 py-2 hover:bg-[#f6be1a] hover:text-white"
                >
                  HomeLoan Calculator
                </a>
                <a
                  href="/carloan-calculator"
                  className="block px-4 py-2 hover:bg-[#f6be1a] hover:text-white"
                >
                  CarLoan Calculator
                </a>
                <a
                  href="/retirement-calculator"
                  className="block px-4 py-2 hover:bg-[#f6be1a] hover:text-white"
                >
                  RetirementPlanning Calculator
                </a>

                <a
                  href="/loan-calculator"
                  className="block px-4 py-2 hover:bg-[#f6be1a] hover:text-white"
                >
                  Loan Calculator
                </a>
              </div>
            )}

            <a
              href="/blog"
              className="block px-3 py-2 rounded hover:bg-[#f6be1a]"
            >
              News & Blog
            </a>

            <a
              href="/contact-us"
              className="block px-3 py-2 rounded hover:bg-[#f6be1a]"
            >
              Contact
            </a>
            <a
              href="https://kulpreetkashbulls.themfbox.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#009739]"
            >
              Login
            </a>

           
            
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
