import React from 'react'
import { Link } from 'react-router'

// Images
import Kowshik from "../assets/kowshik.jpg";
import Mridol from "../assets/Mridol.jpg";
import Tahmid from "../assets/Tahmid.jpg";
import Sakib from "../assets/Sakib.jpg";
import Mushi from "../assets/Mushi.jpg";
import Champ from "../assets/Champ.jpg";

const Footer = () => {
  const initiativeTeam = [
    { id: 1, name: "Kowshik", image: Kowshik },
    { id: 2, name: "Mridol", image: Mridol },
    { id: 3, name: "Tahmid", image: Tahmid },
    { id: 4, name: "Sakib", image: Sakib },
    { id: 5, name: "Mushi", image: Mushi },
  ];

  return (
    <footer className='max-padd-container mt-10'>
      <div className='max-padd-container bg-black text-white py-8 rounded-tr-3xl rounded-tl-3xl'>
        <div className='container mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-8'>

          {/* Logo & About */}
          <div className='max-w-sm'>
            <Link to="/">
              <h4 className='bold-24 text-red-500 flex items-center gap-2'>
                🩸 LifeDrop
              </h4>
            </Link>
            <p className='text-white/70 mt-3 text-sm leading-relaxed'>
              Connecting blood donors with those in urgent need. One drop of blood can save a life.
            </p>
            <p className='mt-4 text-xs text-white/40'>
              © 2025 LifeDrop. All rights reserved.
            </p>
          </div>

          {/* Initiative Team */}
          <div className='flex flex-col items-center md:items-end'>
            <h3 className="text-sm font-semibold tracking-wide text-white/80 uppercase mb-4">
              Initiative Team
            </h3>

            <div className="flex flex-wrap justify-center md:justify-end gap-4">
              {initiativeTeam.map((member) => (
                <div key={member.id} className="flex flex-col items-center gap-1.5 w-16">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-red-500/70 shadow-md hover:scale-110 hover:border-red-400 transition-all duration-300 cursor-pointer"
                  />
                  <span className="text-[11px] text-white text-center leading-tight">
                    {member.name}
                  </span>
                </div>
              ))}
            </div>

            <p className="mt-6 text-xs text-white">
              Initiative taken by the <span className="text-red-400 font-semibold">21st Batch</span>
            </p>
          </div>

        </div>

        {/* Developed By */}
        <div className='mt-2 pt-2 border-t border-white/10 flex flex-col items-center text-center'>
          <p className="text-[11px] uppercase tracking-[0.2em] text-white mb-4">Developed By</p>
          <div className='relative inline-block'>
            <div className='absolute inset-0 rounded-full bg-red-500/30 blur-xl scale-110'></div>
            <img
              src={Champ}
              alt="Developer"
              className="relative w-20 h-20 rounded-full border-4 border-red-500 object-cover shadow-lg hover:scale-110 hover:border-red-400 transition-all duration-300 cursor-pointer"
            />
          </div>
          <h5 className="font-bold text-xl mt-4">
            Nur Saad
          </h5>
          <p className="text-sm text-white mt-1">
            Full Stack Web Developer
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer