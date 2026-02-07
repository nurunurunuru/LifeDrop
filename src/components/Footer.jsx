import React from 'react'
import { BsEnvelopeFill, BsFacebook, BsGeoAltFill, BsInstagram, BsLinkedin, BsTelephoneFill, BsHeartFill } from 'react-icons/bs'
import { Link } from 'react-router'

const Footer = () => {
  return (
    <footer className='max-padd-container mt-10'>
      <div className='max-padd-container bg-black text-white py-10 rounded-tr-3xl rounded-tl-3xl'>
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8'>

          {/* Logo & About */}
          <div>
            <Link to="/">
              <h4 className='bold-24 text-red-500 flex items-center gap-2'>
                🩸 LifeDrop
              </h4>
            </Link>
            <p className='text-white mt-5'>
              Connecting blood donors with those in urgent need. One drop of blood can save a life. Be a hero, donate blood today.
            </p>
            <p className='mt-4 text-white/70'>
              © 2025 LifeDrop. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className='h4 mb-4'>Quick Links</h4>
            <ul className='space-y-2 regular-15'>
              <li className='text-gray-10'><a href="/about">About Us</a></li>
              <li className='text-gray-10'><a href="/donors">Find Donors</a></li>
              <li className='text-gray-10'><a href="/register">Become a Donor</a></li>
              <li className='text-gray-10'><a href="/contact">Emergency Contact</a></li>
              <li className='text-gray-10'><a href="/privacy-policy">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Emergency Contact */}
          <div>
            <h4 className='h4 mb-4'>Emergency Contact</h4>
            <p className='text-gray-10 mb-2'>
              <BsTelephoneFill className='inline-block mr-2'/> +880 1884-369307
            </p>
            <p className='text-gray-10 mb-2'>
              <BsEnvelopeFill className='inline-block mr-2'/>
              support@lifedrop.org
            </p>
            <p className='text-gray-10 mb-2'>
              <BsGeoAltFill className='inline-block mr-2'/>
              Dhaka, Bangladesh
            </p>
          </div>

          {/* Social */}
          <div>
            <h4 className='h4 mb-4'>Follow Us</h4>
            <div className='flex space-x-4 text-red-500 text-xl'>
              <a href="#"><BsFacebook/></a>
              <a href="#"><BsLinkedin/></a>
              <a href="#"><BsInstagram/></a>
            </div>
            <p className='mt-4 text-white/70 text-sm flex items-center gap-1'>
              Made with <BsHeartFill className='text-red-500'/> to save lives
            </p>
          </div>

        </div>

        <div className='mt-10 text-center text-gray-100'>
          <p>
            “Donate Blood, Save Lives, Spread Love.” ❤️
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
