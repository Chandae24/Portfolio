/* eslint-disable no-unused-vars */
import { Award, Calendar, ExternalLink, ShieldCheck } from 'lucide-react'
import React from 'react'
import CertificateCard from './CertificateCard'
import { certificates } from '../data'

const Certificates = () => {
  return (
    <section className='text-white py-20' id='certificates'>
        <div className='max-w-7xl mx-auto lg:px-16'>
            <div className='mb-16'>
                <p className='text-primary text-sm uppercase tracking-widest mb-2 font-semibold'>
                    Achivement
                </p>
                <h2 className='text-4xl md:text-5xl font-extrabold'>
                    Certificates.
                </h2>
            </div>

        

            <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
          {certificates.map((certificate) => (
            <CertificateCard key={certificate.id} certificate={certificate} />
          ))}
        </div>
        </div>
    </section>
  )
}

export default Certificates
