/* eslint-disable no-unused-vars */
import React from 'react';
import educ from '../assets/educ.jpg';
import { GraduationCap, Calendar, CheckCircle } from 'lucide-react';
const Education = () => {
    const educationData = [
        {
            id: 1,
            degree:'Bachlor of Interformation Technology',
            institution:"Build Bright University Battambang",
            duration:"2026",
            details:'Studying software development, database systems, networking, and web technologiesGained experience in front-end and back-end web development using modern programming languages and frameworks.Completed academic projects involving web applications, database design, and system analysis.Developed problem-solving, teamwork, and project management skills through coursework and group projects.Continuously expanding knowledge in software engineering, cloud computing, and cybersecurity.'
        },
        {
            id: 2,
            degree: "BAKTOUK INFORMATION TECHNOLOGY",
            institution: "Adobe Photoshop",
            duration: "2023",
            details:'Completed a comprehensive course in Adobe Photoshop, mastering advanced photo editing techniques, retouching, and creative design. Gained proficiency in using various tools and features to enhance images, create digital artwork, and produce visually stunning compositions. Developed skills in color correction, layer management, masking, and special effects to bring creative visions to life.'
        },
        {                    
            id: 3,
            degree: "SOS HGS HIGHT SCHOOL",
            institution: "Studied Secondary School",
            duration: "2021-2022",
            details: "Completed secondary education, building a strong foundation in mathematics, science, communication, and problem-solving skills."
       }
]
  return (
    <section className='text-white py-20 overflow-hidden' data-aos='education' id='education'>
        <div className='max-w-7xl mx-auto px-6 lg:px-16'>

            <p className='text-primary text-sm uppercase tracking-wider mb-2 font-semibold'>
                Learning Experience
            </p>

            <h2 className='text-4xl md:text-5xl font-extrabold'>
                Education.
            </h2><br/>

            <div className='flex flex-col lg:flex-row items-center gap-16'>
                <div className='w-full lg:w-5/12 flew justify-center lg:justify-start' data-aos='fade-right'>
                    
                    <div className="relative inline-block">
                        {/* Back Border Frame */}
                        <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-2xl border-2 border-cyan-500"></div>

                        {/* Image Card */}
                        <div className="relative z-10 overflow-hidden rounded-2xl border border-cyan-700">
                            <img
                                src={educ}
                                alt="Education"
                                className="w-64 h-64 md:w-100 md:h-120 object-cover transition-transform duration-500 hover:scale-110"
                            />
                        </div>

                        <div className='absolute -top-4 -left-4 bg-primary/20 w-16 h-16 rounded-full blur-3xl'></div>
                    </div>
                </div>

                <div className='w-full lg:w-7/12 space-y-6' data-aos='fade-left'>
                    {educationData.map((edu) => (
                        <div key={edu.id} className='group relative p-6 rounded-2xl bg-[#111a3e] border border-[#1f1641]
                            transition-all duration-300 hover:border-primary/50'>

                            <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4'>
                                <div className='flex items-center gap-3'>

                                    <div className='p-2 bg-[#050816] rounded-lg border border-primary transition-colors'>
                                        <GraduationCap size={24} className='text-primary'/>
                                    </div>

                                    <h3 className='text-lg font-bold text-white group-hover:text-primary transition-colors'>
                                        {edu.degree}
                                    </h3>
                                    <p className='text-gray-400 text-sm'>
                                        {edu.institution}
                                    </p>
                                </div>

                                <div className='flex items-center gap-2 text-xs font-medium bg-[#050816] px-3 py-1 rounded-full border border-gray-700 w-fit'>
                                    <Calendar size={12} className='text-primary'/>
                                    {edu.duration}
                                </div>
                            </div>
                            <p className='text-gray-400 text-sm leading-relaxed mb-4'>
                                {edu.details}
                            </p>
                            
                            <div className='flex items-center gap-2 text-[10] uppercase-wider text-primary font-bold'>
                                <CheckCircle size={12}/>
                                Academic Excellence
                            </div>
                            
                        </div>
                       
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Education
