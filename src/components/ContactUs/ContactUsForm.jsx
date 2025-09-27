import React, { useState } from 'react';

const ContactUsForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        subject: '',
        country: '',
        address: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Form submitted:', formData);

        setFormData({
            name: '',
            phone: '',
            email: '',
            subject: '',
            country: '',
            address: '',
            message: '',
        });

        alert('Message sent successfully!');
    };

    return (
        <div className="min-h-screen bg-white flex items-center justify-center p-6">
            <div
                className="
          bg-white rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.15)] flex flex-col md:flex-row
          w-full max-w-6xl overflow-hidden
          animate-fadeInUp
          "
            >
                <div className="w-full md:w-2/3 p-8">
                    <h2 className="text-2xl font-bold mb-10 text-gray-800 text-center">Get in Touch</h2>
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="w-full">
                                <label className="block text-sm font-medium mb-1">
                                    Name<span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Enter your Name"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-xl 
                             focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer
                             transition transform duration-300 ease-in-out
                             focus:scale-105 focus:shadow-lg"
                                    required
                                />
                            </div>
                            <div className="w-full">
                                <label className="block text-sm font-medium mb-1">
                                    Phone<span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="+91 1234567890"
                                    maxLength={10}  
                                    className="w-full px-4 py-2 border border-gray-300 rounded-xl 
             focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer
             transition transform duration-300 ease-in-out
             focus:scale-105 focus:shadow-lg"
                                    required
                                />

                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="w-full">
                                <label className="block text-sm font-medium mb-1">
                                    Email<span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="youremail@gmail.com"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-xl 
                             focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer
                             transition transform duration-300 ease-in-out
                             focus:scale-105 focus:shadow-lg"
                                    required
                                />
                            </div>
                            <div className="w-full">
                                <label className="block text-sm font-medium mb-1">Subject</label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="Inquiry"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-xl 
                             focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer
                             transition transform duration-300 ease-in-out
                             focus:scale-105 focus:shadow-lg"
                                />
                            </div>
                        </div>

                        {/* New Country and Address fields */}
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="w-full">
                                <label className="block text-sm font-medium mb-1">
                                    Country<span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="country"
                                    value={formData.country}
                                    onChange={handleChange}
                                    placeholder="Enter your Country"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-xl 
                             focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer
                             transition transform duration-300 ease-in-out
                             focus:scale-105 focus:shadow-lg"
                                    required
                                />
                            </div>
                            <div className="w-full">
                                <label className="block text-sm font-medium mb-1">
                                    Address<span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    placeholder="Enter your Address"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-xl 
                             focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer
                             transition transform duration-300 ease-in-out
                             focus:scale-105 focus:shadow-lg"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">
                                Message<span className="text-red-500">*</span>
                            </label>
                            <textarea
                                rows="5"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Enter your Message"
                                className="w-full px-4 py-2 border border-gray-300 rounded-xl 
                           focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer
                           transition transform duration-300 ease-in-out
                           focus:scale-105 focus:shadow-lg"
                                required
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="
                text-white px-6 py-2 rounded-full transition-all duration-300 ease-in-out
                bg-[#062B7E] hover:bg-gradient-to-r hover:from-[#02C9B7] hover:to-[#028f7e]
                cursor-pointer
                transform hover:scale-110
              "
                        >
                            SEND MESSAGE
                        </button>
                    </form>
                </div>

                <div
                    style={{
                        background: 'linear-gradient(135deg, #02C9B7, #028f7e)',
                    }}
                    className="w-full md:w-1/3 text-white p-8 flex flex-col justify-between rounded-t-3xl md:rounded-t-none md:rounded-r-3xl"
                >
                    <div>
                        <h2 className="text-xl font-bold mb-4">Reach Us</h2>
                        <p className="mb-2">
                            <strong>Email:</strong> contact@mssjanakpuri.com
                        </p>
                        <p className="mb-2">
                            <strong>Phone:</strong> +91 011–45658185
                        </p>
                        <p className="mb-4">
                            <strong>Address:</strong>
                            <br />
                            Maharaja Surajmal Institute
                            <br />
                            C-4, Janakpuri,
                            <br />
                            Delhi – 110058, India
                        </p>
                    </div>
                    <div className="mt-4">
                        <iframe
                            title="MSI Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.233015223691!2d77.09200727528997!3d28.681179775658195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d051b010bbb19%3A0xf876ee9c7d1d2a3c!2sMaharaja%20Surajmal%20Institute!5e0!3m2!1sen!2sin!4v1695806972232!5m2!1sen!2sin"
                            width="100%"
                            height="200"
                            allowFullScreen=""
                            loading="lazy"
                            className="rounded-xl"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUsForm;
