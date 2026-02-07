import React from 'react'
import Title from './Title'
import { TbHeartHandshake, TbClockHeart } from 'react-icons/tb'
import { RiShieldCheckLine } from 'react-icons/ri'

const Features = () => {
  return (
    <section className='max-padd-container py-16 bg-gradient-to-b from-red-50 via-white to-white'>
      <Title 
        title={'Why Choose Our Platform'} 
        titleStyles={'text-center mb-4'}
      />

      {/* Container */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>

        {/* Card 1 */}
        <div className='group p-8 rounded-3xl bg-white shadow-xl 
          hover:shadow-2xl hover:-translate-y-2 transition-all duration-300'>
          
          <TbHeartHandshake className='bold-32 mb-4 text-red-500 
            group-hover:scale-110 transition-transform'/>

          <h4 className='h4 capitalize mb-3'>
            Why Blood Donation Matters
          </h4>

          <p className='text-gray-600 leading-relaxed space-y-1'>
            🩸 Every 2 seconds, someone in the world needs blood.<br/>
            ❤️ One donation can save up to <span className='font-semibold text-red-500'>3 lives</span>.<br/>
            🏥 There is no artificial substitute for human blood.<br/>
            🌍 Your small act of kindness can create a huge impact.
          </p>
        </div>

        {/* Card 2 */}
        <div className='group p-8 rounded-3xl bg-white shadow-xl 
          hover:shadow-2xl hover:-translate-y-2 transition-all duration-300'>
          
          <TbClockHeart className='bold-32 mb-4 text-secondary 
            group-hover:scale-110 transition-transform'/>

          <h4 className='h4 capitalize mb-3'>
            Fast Emergency Connection
          </h4>

          <p className='text-gray-600 leading-relaxed'>
            🚑 Instantly connect with nearby blood donors during emergencies.<br/>
            ⚡ Smart search by blood group and location ensures quick results.<br/>
            📍 Real-time availability to save precious minutes when every second counts.
          </p>
        </div>

        {/* Card 3 */}
        <div className='group p-8 rounded-3xl bg-white shadow-xl 
          hover:shadow-2xl hover:-translate-y-2 transition-all duration-300'>
          
          <RiShieldCheckLine className='bold-32 mb-4 text-green-500 
            group-hover:scale-110 transition-transform'/>

          <h4 className='h4 capitalize mb-3'>
            Safe & Trusted Platform
          </h4>

          <p className='text-gray-600 leading-relaxed'>
            🔒 Verified donors and secure data handling ensure complete safety.<br/>
            🛡️ Privacy-first design protects your personal information.<br/>
            🤝 Trusted by donors, hospitals, and patients across the country.
          </p>
        </div>

      </div>
    </section>
  )
}

export default Features
