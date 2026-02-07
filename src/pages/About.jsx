import React from 'react'
import aboutImg from '../assets/bg.jpg'
import { RiDoubleQuotesL } from 'react-icons/ri'
import Footer from '../components/Footer'

const About = () => {

  const statistics = [
    { label: "Registered Donors", value: 1250 },
    { label: "Lives Saved", value: 890 },
    { label: "Emergency Requests Fulfilled", value: 670 },
  ]

  return (
    <section className="bg-gradient-to-b from-red-50 via-white to-white">
      <div className='max-padd-container'>

        <div className='py-14 my-6'>
          <div className='flex flex-col xl:flex-row gap-14 items-center'>

            {/* Image Section */}
            <div className='flex-1 relative group'>
              <div className='relative overflow-hidden rounded-3xl shadow-xl'>
                <img 
                  src={aboutImg} 
                  alt="about" 
                  className='w-full h-[420px] object-cover group-hover:scale-105 transition duration-500'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent'></div>
              </div>

              <div className='absolute -bottom-10 left-1/2 -translate-x-1/2 bg-white/80 backdrop-blur-md max-w-md p-6 rounded-2xl flexCenter flex-col shadow-xl'>
                <span className='mb-2 p-3 text-white h-12 w-12 flex items-center justify-center rounded-full bg-red-500'>
                  <RiDoubleQuotesL className='text-2xl'/>
                </span>
                <p className='text-center text-gray-700 font-medium'>
                  “One bag of blood can save up to three lives. Be a hero — donate blood.”
                </p>
              </div>
            </div>

            {/* Content Section */}
            <div className='flex-1 flex flex-col justify-center'>
              <span className='uppercase tracking-widest text-red-500 font-semibold'>
                About Our Mission
              </span>

              <h2 className='text-4xl font-bold leading-tight mt-3 mb-5'>
                Connecting Donors With <span className='text-red-500'>Lives in Need</span>
              </h2>

              <p className='text-gray-600 leading-relaxed'>
                We are a technology-driven humanitarian platform connecting voluntary blood donors with patients in urgent need. Our mission is to ensure that no life is lost due to blood shortages.
              </p>

              <p className='text-gray-600 leading-relaxed mt-4'>
                By combining compassion, community, and innovation, we empower people to save lives. Every donor is a hero, and every donation brings hope to families in crisis.
              </p>

              {/* Stats */}
              <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10'>
                {statistics.map((item, index) => (
                  <div 
                    key={index} 
                    className='bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition'
                  >
                    <h3 className='text-3xl font-bold text-red-500'>
                      {item.value}+
                    </h3>
                    <p className='mt-2 text-gray-600 font-medium'>
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>

      <Footer />
    </section>
  )
}

export default About
