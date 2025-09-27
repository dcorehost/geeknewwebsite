import React from "react";


const SearchIcon = (props) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M11 11a7 7 0 1 0 7 7 7 7 0 0 0-7-7z"/><path d="M21 21l-4.35-4.35"/></svg>);
const PrinterIcon = (props) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 18H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M6 13a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-2H6z"/><path d="M18 10V5"/></svg>);
const NetworkIcon = (props) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 22a4 4 0 0 0 4-4 4 4 0 0 0-4-4 4 4 0 0 0-4 4 4 4 0 0 0 4 4z"/><path d="M12 14v-4"/><path d="M17 14h-2"/><path d="M7 14h-2"/><path d="M12 4v2"/><path d="M19 8l-2 2"/><path d="M5 8l2 2"/></svg>);
const HeadsetIcon = (props) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 18v-6h4V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6h4v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>);


const PRIMARY_COLOR = "#02C9B7"; 
const SECONDARY_COLOR = "#062B7E"; 


const stepsData = [
  {
    number: "01",
    title: "Consultation & Assessment",
    description:
      "We begin by analyzing your printing needs—whether for home or office—and recommend the right printer setup for your requirements.",
    icon: SearchIcon,
  },
  {
    number: "02",
    title: "Printer Installation",
    description:
      "Our certified technicians install and configure your printer, ensuring smooth connectivity with PCs, laptops, and mobile devices.",
    icon: PrinterIcon,
  },
  {
    number: "03",
    title: "Driver & Network Setup",
    description:
      "We set up printer drivers, Wi-Fi connectivity, and shared network printing, making it easy to print from multiple devices.",
    icon: NetworkIcon,
  },
  {
    number: "04",
    title: "Testing & Ongoing Support",
    description:
      "We test print quality, resolve errors, and provide ongoing support for paper jams, cartridge issues, and software troubleshooting.",
    icon: HeadsetIcon,
  },
];


const ProcessStep = ({ step, index }) => {
   
    const isRightAligned = index % 2 !== 0;

    const wrapperClasses = isRightAligned ? 'justify-end' : 'justify-start';
    const cardClasses = isRightAligned 
        ? 'sm:ml-8 sm:border-l-0 sm:border-r-4'
        : 'sm:mr-8 sm:border-r-0 sm:border-l-4'; 

   

    return (
        <div className={`relative flex ${wrapperClasses} w-full mb-10 sm:mb-16`}>
          
            <div 
                className={`absolute left-1/2 transform -translate-x-1/2 z-10 hidden sm:flex flex-col items-center`}
            >
                <div 
                    className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center font-black text-2xl ring-4 ring-white shadow-xl transition duration-300"
                    style={{ 
                        backgroundColor: SECONDARY_COLOR, 
                        color: PRIMARY_COLOR,
                        borderColor: PRIMARY_COLOR,
                        borderWidth: '2px',
                    }}
                >
                    {step.number}
                </div>
            </div>

           
            <div 
                className={`w-full sm:w-1/2 p-6 rounded-xl shadow-lg bg-white border-l-4 transition duration-300 hover:shadow-xl hover:scale-[1.005] ${cardClasses}`}
                style={{ borderColor: PRIMARY_COLOR }}
            >
                <div className="flex items-start space-x-4">
                   
                    <step.icon 
                        className="flex-shrink-0 w-8 h-8 mt-1" 
                        style={{ color: SECONDARY_COLOR }}
                    />
                
                    <div>
                        <h3
                            className="text-xl sm:text-2xl font-extrabold mb-2 leading-tight"
                            style={{ color: SECONDARY_COLOR }}
                        >
                            {step.title}
                        </h3>
                        <p className="text-sm sm:text-base text-gray-700">
                            {step.description}
                        </p>
                    </div>
                </div>
            </div>

          
             <div className="absolute top-0 left-0 transform -translate-x-1/2 z-10 flex sm:hidden flex-col items-center">
                 <div 
                    className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-black text-lg ring-4 ring-white shadow-md"
                    style={{ 
                        backgroundColor: SECONDARY_COLOR, 
                        color: PRIMARY_COLOR,
                        borderColor: PRIMARY_COLOR,
                        borderWidth: '2px',
                    }}
                >
                    {step.number}
                </div>
            </div>
        </div>
    );
};


const OurPrinterProcess = () => {
  return (
    <div
      className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 bg-gray-50 font-sans min-h-screen"
    >
      <div className="text-center mb-10 lg:mb-16 max-w-5xl mx-auto p-4">
        <h2
          className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight"
          style={{ color: SECONDARY_COLOR }}
        >
          Our Simple 4-Step Printer Service Process
        </h2>
        <div className="w-24 h-1 mx-auto rounded-full mb-4" style={{ backgroundColor: PRIMARY_COLOR }}></div>
        <p className="max-w-3xl mx-auto text-xl text-gray-600">
          We've streamlined our approach to ensure fast, reliable, and professional printer setup and maintenance for every client.
        </p>
      </div>

      <div className="flex justify-center relative">
        <div className="w-full max-w-4xl">
        
          <div className="absolute inset-0 hidden sm:block w-0.5 mx-auto" style={{ backgroundColor: PRIMARY_COLOR, opacity: 0.3 }}></div>

         
          {stepsData.map((step, index) => (
            <ProcessStep
              key={step.number}
              step={step}
              index={index}
            />
          ))}
        </div>
      </div>
    
    </div>
  );
};

export default OurPrinterProcess;
