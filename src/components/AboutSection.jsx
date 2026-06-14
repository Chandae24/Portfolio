/* eslint-disable no-unused-vars */
import React from 'react';
import about from '../assets/about.jpg'

const AboutSection = () => {
    return (
        <section className='text-white mt-10 relative overflow-hidden' id='about'>
            <div
                className='max-w-7xl mx-auto px-4 md:grid md:grid-cols-2 gap-12 items-center py-16 xl:px-16 relative z-10'>
                <div data-aos='fade-right'>
                    <h2 className='text-4xl md:text-5xl font-extrabold text-white mb-6'>
                        More <span className='text-primary'>About </span> Me
                    </h2>

                    <pre className="text-gray-400 text-base lg:text-lg mb-10 leading-relaxed whitespace-pre-wrap">

{`I am a Frontend Developer and Information Technology graduate from Build Bright University with a strong passion for creating modern, responsive, and user-friendly web applications. Proficient in HTML, CSS, JavaScript, Bootstrap, and modern frontend frameworks, I have experience developing intuitive user interfaces that enhance user experience and meet business requirements.

Throughout my academic projects and practical experience, I have gained hands-on skills in responsive web design, API integration, website optimization, version control using Git, and cross-browser compatibility. I am committed to writing clean, maintainable, and efficient code while following industry best practices and modern development standards.

With a strong problem-solving mindset, attention to detail, and eagerness to learn new technologies, I enjoy transforming creative ideas into functional digital solutions. I am seeking opportunities to contribute my technical skills, collaborate with development teams, and grow as a professional Frontend Developer while delivering high-quality web experiences.`}

</pre>
                    <div className='grid grid-cols-2 gap-4 max-w-xl'>

                        <div className='text-center rounded-2xl bg-[#111a3e] border
                    border-[#1f1641] p-5 transition-all duration-300 hover:border-primary/50'>
                            <h3 className='text-primary font-bold text-2xl md:text-3xl'>
                                + 6
                            </h3>
                            <p className='text-xs text-gray-400 uppercase tracking-wider mt-0.5'>Priject</p>
                        </div>

                        <div className='text-center rounded-2xl bg-[#111a3e] border
                    border-[#1f1641] p-5 transition-all duration-300 hover:border-primary/50'>
                            <h3 className='text-primary font-bold text-2xl md:text-3xl'>
                                + 4
                            </h3>
                            <p className='text-xs text-gray-400 uppercase tracking-wider mt-0.5'>Year</p>
                        </div>
                    </div>
                </div>

                <div className='mt-16 md:mt-0 flex justify-center lg:justify-end relative' data-aos='fade-left'>
                    <div className='relative w-64 h-64 md:w-106 md:h-150'>
                        <div className='absolute inset-0 z-0 rounded-full shadow-lg border border-primary
                    translate-x-4 translate-y-4'></div>

                        <div
                            className='relative z-10 w-full h-full bg-[#111a3e] rounded-full overflow-hidden border border-[#1f1641]'>
                            <img src={about} alt="About"
                                 className='w-full h-full object-cover transition-transform duration-500 hover:scale-110'/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection
