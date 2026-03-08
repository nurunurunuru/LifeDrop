import React from 'react';
import Title from './Title';
import { FaFacebookF, FaWhatsapp } from 'react-icons/fa';

const Features = () => {
  const admins = [
    {
      name: "Mridol Mondal",
      image: "/src/assets/Bondhu.jpg",
      facebook: "https://www.facebook.com/mridol.ms",
      whatsapp: "https://wa.me/8801234567891"
    },
    {
      name: "Kowshik Saha",
      image: "/src/assets/Kowshik.jpg",
      facebook: "https://www.facebook.com/kowshik.saha.965",
      whatsapp: "https://wa.me/8801779991467"
    },
    {
      name: "Sakibur",
      image: "/src/assets/Sakib.jpg",
      facebook: "https://www.facebook.com/sakibur.rahman.895774",
      whatsapp: "https://wa.me/8801999446662"
    },
    {
      name: "Tahmid",
      image: "/src/assets/Tahmid.jpg",
      facebook: "https://www.facebook.com/tahmidahmed.fardin",
      whatsapp: "https://wa.me/8801948382226"
    },
    {
      name: "Mushfiq",
      image: "/src/assets/Mushi.jpg",
      facebook: "https://www.facebook.com/mushfiqur.mystic007",
      whatsapp: "https://wa.me/8801234567895"
    },
    {
      name: " Rifayet Rafi",
      image: "/src/assets/Rafi.jpg",
      facebook: "https://www.facebook.com/rifayet.rafi",
      whatsapp: "https://wa.me/8801640652303"
    },
    {
      name: "Sajib Khan",
      image: "/src/assets/Sajib.jpg",
      facebook: "https://www.facebook.com/mrASRkhan",
      whatsapp: "https://wa.me/8801601042820"
    },
    {
      name: "Sinthol Dey",
      image: "/src/assets/Sinthol.jpg",
      facebook: "https://www.facebook.com/Sinthol.Dey",
      whatsapp: "https://wa.me/8801884369307"
    },
    {
      name: "Nur Saad",
      image: "/src/assets/Saad.jpg",
      facebook: "https://www.facebook.com/nur.sad.52",
      whatsapp: "https://wa.me/8801884369307"
    },
  ];

  return (
    <section className="max-padd-container py-12 bg-gradient-to-b from-red-50 via-white to-white">
      
      <Title 
        title="Contact Us" 
        titleStyles="text-center mb-4 text-3xl md:text-4xl font-bold text-red-600"
      />

      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
        If you want to donate blood or need help, please contact our admins. They are ready to assist you anytime.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
        {admins.map((admin, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-3xl shadow-lg flex flex-col items-center text-center transform hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
          >
            {/* Admin Image */}
            <img
              src={admin.image}
              alt={admin.name}
              className="w-20 h-20 rounded-full object-cover border-2 border-red-300 mb-4"
            />

            {/* Admin Name */}
            <h4 className="font-semibold text-lg text-gray-800 mb-3">{admin.name}</h4>

            {/* Contact Icons */}
            <div className="flex gap-4 text-2xl">
              <a href={admin.facebook} target="_blank" rel="noopener noreferrer">
                <FaFacebookF className="text-blue-600 hover:text-blue-800 hover:scale-125 transition-transform" />
              </a>
              <a href={admin.whatsapp} target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="text-green-500 hover:text-green-700 hover:scale-125 transition-transform" />
              </a>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Features;