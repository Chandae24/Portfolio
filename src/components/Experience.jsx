/* eslint-disable no-unused-vars */
import React from 'react';
import work from '../assets/work.png'
import { Briefcase, Calendar, CheckCircle } from 'lucide-react';
const Experience = () => {
    const experienceData = [
        {
            id: 1,
            degree:'ICT Manager',
            institution:"Dewy Internetion School",
            duration:"2025-2026",
            details:'Experienced in ICT management, computer maintenance, photography, and video editing. Provided technical support, managed IT resources, and taught computer skills to students. Passionate about technology, digital content creation, and continuous learning.'
        },
        {
            id: 2,
            degree: "IT Instrutor",
            institution: "Narith.MASTER-IT EDCUTION CO., Ltd",
            duration: "2024-2025",
            details:'Experienced in teaching Microsoft Office applications, including Word, Excel, and PowerPoint, helping students develop essential computer skills. Provided IT support by troubleshooting hardware, software, and network issues, ensuring smooth technology operations. Created engaging digital content for social media and educational platforms, while also editing and producing high-quality videos using professional video editing tools. Skilled in communication, problem-solving, and digital content creation.'
        },
        {                    
            id: 3,
            degree: "IT Instrutor",
            institution: "BAKTOUK INFORMATION TECHNOLOGY CENTER",
            duration: "2023-2024",
            details: "Taught students how to use Microsoft Office applications, including Word, Excel, PowerPoint. Assisted learners in developing computer literacy skills, document creation, data management, and presentation design."
       }
]
  return (
    <section className='text-white py-20 overflow-hidden' data-aos='experience' id='experience'>
        <div className='max-w-7xl mx-auto px-6 lg:px-16'>

            <p className='text-primary text-sm uppercase tracking-wider mb-2 font-semibold'>
                Work Experience
            </p>

            <h2 className='text-4xl md:text-5xl font-extrabold'>
                Experience.
            </h2><br/>

            <div className='flex flex-col lg:flex-row items-center gap-16'>

                <div className='w-full lg:w-7/12 space-y-6' data-aos='fade-right'>
                    {experienceData.map((work) => (
                        <div key={work.id} className='group relative p-6 rounded-2xl bg-[#111a3e] border border-[#1f1641]
                            transition-all duration-300 hover:border-primary/50'>

                            <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4'>
                                <div className='flex items-center gap-3'>

                                    <div className='p-2 bg-[#050816] rounded-lg border border-primary transition-colors'>
                                        <Briefcase size={24} className='text-primary'/>
                                    </div>

                                    <h3 className='text-lg font-bold text-white group-hover:text-primary transition-colors'>
                                        {work.degree}
                                    </h3>
                                    <p className='text-gray-400 text-sm'>
                                        {work.institution}
                                    </p>
                                </div>

                                <div className='flex items-center gap-2 text-xs font-medium bg-[#050816] px-3 py-1 rounded-full border border-gray-700 w-fit'>
                                    <Calendar size={12} className='text-primary'/>
                                    {work.duration}
                                </div>
                            </div>
                            <p className='text-gray-400 text-sm leading-relaxed mb-4'>
                                {work.details}
                            </p>
                            
                            <div className='flex items-center gap-2 text-[10] uppercase-wider text-primary font-bold'>
                                <CheckCircle size={12} className='text-white font-bold'/>
                                Technical Expertise
                            </div>
                            
                        </div>
                       
                    ))}
                </div>
                <div className='w-full lg:w-5/12 flew justify-center lg:justify-start' data-aos='fade-left'>
                    
                    <div className="relative inline-block">
                        {/* Back Border Frame */}
                        <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-2xl border-2 border-cyan-500"></div>

                        {/* Image Card */}
                        <div className="relative z-10 overflow-hidden rounded-2xl border border-cyan-700">
                            <img
                                src={work}
                                alt="Experience"
                                className="w-64 h-64 md:w-100 md:h-120 object-cover transition-transform duration-500 hover:scale-110"
                            />
                        </div>

                        <div className='absolute -top-4 -right-4 bg-primary/20 w-16 h-16 rounded-full blur-3xl'></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Experience
