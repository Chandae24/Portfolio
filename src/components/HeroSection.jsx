/* eslint-disable no-unused-vars */
import {Download} from 'lucide-react';
import React from 'react';
import hero from '../assets/hero.jpg';

const HeroSection = () => {
    return (
        <section className='relative w-full' data-aos='zoom-in-up'>
            <div className='absolute top-0 inset-x-0 h-64 flex items-start'>
                <div className='h-24 w-2/3 bg-linear-to-br from-[#0c7fac] blur-2xl invisible opacity-40'></div>
                <div className='h-20 w-3/4 bg-linear-to-br from-[#289eff] opacity-40 blur-2xl'></div>
            </div>
            <div className='w-full px-5 sm:px-8 md:px-12 lg:px-8 max-w-5xl lg:max-w-7xl mx-auto relative'>
                <div
                    className='flex flex-col-reverse lg:flex-row relative  lg:max-w-none max-w-2xl md:max-w-3xl mx-auto'>
                    <div className='flex flex-col space-y-10'>
                        <div className='text-center lg:text-left'>
                            <h1 className='text-white font-bold text-4xl md:text-5xl lg:text-6xl'>
                                Hi, I'm{' '}
                                <span
                                    className='text-transparent bg-clip-text bg-linear-to-br from-primary to-[#289eff]'>Kimsour</span>
                                👋
                            </h1>
                        </div>
                        <p className='text-gray-300 text-center lg:text-left mx-auto max-w-xl text-wrap'>
                            Frontend Developer and Information Technology graduate from Build Bright University with
                            experience in building responsive and user-friendly web applications. Skilled in HTML, CSS,
                            JavaScript, Bootstrap, React, and Git, with a strong understanding of modern web development
                            practices. Passionate about creating clean, efficient, and visually appealing interfaces
                            while continuously learning new technologies and improving development skills.
                        </p>
                        <div className='flex items-center gap-3 flex-col space-y-2 sm:flex-row sm:w-max lg:mx-0'>
                            <button
                                className='px-6 md:px-7 rounded-full relative group w-full sm:w-max flex justify-center'>
                            <span className='absolute inset-0 rounded-3xl group-hover:scale-105 origin-center transition-all ease-in-out
                                bg-primary border-2 border-transparent'></span>
                                <span className='relative flex items-center justify-center text-white '>
                                <a href='https://t.me/moeurkkimsour' target={'_blank'}
                                       className='pl-2 text-white'>Hire Me</a>
                            </span>
                            </button>

                            <button
                                className='border border-[#289eff] px-6 md:px-7 rounded-full relative group w-full sm:w-max flex justify-center'>
                                <div
                                    className='hover:scale-105 transition-all ease-in-out flex justify-center items-center relative'>
                                    <div className='svg-container'>
                                        <Download size={18} className='text-primary'/>
                                        <div className='download-loader text-white hidden'></div>
                                    </div>
                                    <a href={import.meta.env.VITE_API_URL_DOWNLOAD} target={'_blank'}
                                       className='pl-2 text-primary'>Download Resume</a>
                                </div>
                            </button>


                        </div>
                    </div>

                    <div className='lg:h-full md:flex '>
                        <div className='lg:h-full md:flex'>
                            <div className="relative flex justify-center items-center h-100">
                                <div
                                    className="absolute z-0 w-5/6 h-[80%] bg-linear-to-r from-[#0c64ac] to-cyan-500 opacity-25 blur-2xl"></div>

                                <div
                                    className="relative z-10 p-2 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] border border-cyan-500">
                                    <img
                                        src={hero}
                                        alt="Hero pic"
                                        className="h-80 lg:h-100 object-cover rounded-[30%_70%_70%_30%/30%_30%_70%_70%]"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default HeroSection;
