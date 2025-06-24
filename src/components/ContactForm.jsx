"use client";

import React, { useState } from "react";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Form submitted:", formData);

        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <section id='contact'>
            <div className='w-full max-w-[1016px] min-h-[406px] bg-dark-purple rounded-[16px] p-6 md:p-[40px] flex flex-col md:flex-row gap-8 md:gap-[40px] mx-auto mb-12'>
                <div className='flex-1 flex flex-col justify-center'>
                    <h2 className='text-3xl md:text-5xl font-semibold font-raleway text-white mb-4 md:mb-6'>
                        Got questions?
                        <br />
                        Just ask!
                    </h2>
                    <p className='text-gray-300 text-base md:text-lg'>
                        Staying in touch with you is important to us — we're
                        always here to answer anything you're curious about..
                    </p>
                </div>

                <div className='flex-1'>
                    <form
                        onSubmit={handleSubmit}
                        className='flex flex-col gap-4 md:gap-6'
                    >
                        <div>
                            <label
                                htmlFor='name'
                                className='block text-gray-300 mb-2'
                            >
                                Name
                            </label>
                            <input
                                type='text'
                                id='name'
                                name='name'
                                value={formData.name}
                                onChange={handleChange}
                                placeholder='Your Name'
                                className='w-full bg-transparent border border-blue-400 rounded p-2 md:p-3 text-white focus:outline-none focus:border-purple-500'
                                required
                            />
                        </div>

                        <div>
                            <label
                                htmlFor='email'
                                className='block text-gray-300 mb-2'
                            >
                                Email
                            </label>
                            <input
                                type='email'
                                id='email'
                                name='email'
                                value={formData.email}
                                onChange={handleChange}
                                placeholder='address@gmail.com'
                                className='w-full bg-transparent border border-blue-400 rounded p-2 md:p-3 text-white focus:outline-none focus:border-purple-500'
                                required
                            />
                        </div>

                        <div>
                            <label
                                htmlFor='message'
                                className='block text-gray-300 mb-2'
                            >
                                Message
                            </label>
                            <textarea
                                id='message'
                                name='message'
                                value={formData.message}
                                onChange={handleChange}
                                placeholder='Write your question...'
                                className='w-full bg-transparent border border-blue-400 rounded p-2 md:p-3 text-white focus:outline-none focus:border-purple-500 resize-none h-20 md:h-24'
                                required
                            />
                        </div>

                        <button
                            type='submit'
                            className='bg-light-purple hover:bg-purple-700 text-white py-2 md:py-3 px-4 rounded transition-colors duration-300 font-medium text-base md:text-lg'
                        >
                            Send
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
