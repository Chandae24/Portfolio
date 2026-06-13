/* eslint-disable no-unused-vars */
import React from 'react';
import about from '../assets/about.jpg'

const AboutSection = () => {
  return (
    <section className='text-white mt-10 relative overflow-hidden' id='about'>
        <div className='max-w-7xl mx-auto px-4 md:grid md:grid-cols-2 gap-12 items-center py-16 xl:px-16 relative z-10'>
            <div data-aos='fade-right'>
                <h2 className='text-4xl md:text-5xl font-extrabold text-white mb-6'>
                    More <span className='text-primary'>About </span> Me
                </h2>
                <p className='text-gray-400 text-base lg:text-lg mb-10 leading-relaxed'>
                    I am currently a fourth-year Information Technology student at Build Bright University and am eager to apply 
                    my technical knowledge, programming skills, and practical experience in a professional working environment.
<br/><br/>
                    Through my academic studies and work experience, I have developed a strong foundation in both front-end 
                    and back-end web development. I am familiar with modern web technologies including HTML, CSS, JavaScript, 
                    MySQL, and responsive web design. In addition, I have experience working with digital tools, troubleshooting 
                    technical issues, and creating user-friendly content and systems.
<br/><br/>
                    I am passionate about web development and eager to expand my skills through hands-on experience at your company. 
                    I believe my technical background, creativity, and willingness to learn would allow me to contribute positively to your team.


                </p>

                <div className='grid grid-cols-2 gap-4 max-w-xl'>

                    <div className='text-center rounded-2xl bg-[#111a3e] border 
                    border-[#1f1641] p-5 transition-all duration-300 hover:border-primary/50'>
                        <h3 className='text-primary font-bold text-2xl md:text-3xl'>
                           + 5
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

                    <div className='relative z-10 w-full h-full bg-[#111a3e] rounded-full overflow-hidden border border-[#1f1641]'>
                        <img src={about} alt="About" className='w-full h-full object-cover transition-transform duration-500 hover:scale-110' />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection
