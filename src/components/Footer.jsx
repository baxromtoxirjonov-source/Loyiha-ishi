import React from 'react'
import Share from "../assets/Share.png"
import Pochta from "../assets/Pochta.png"
const Footer = () => {
  return (
    <div className="w-full bg-[#DDEAF2] text-gray-800 py-12 mt-12 rounded-t-[3xl]">
      <div className='container mx-auto max-w-[1200px] px-6 flex flex-col justify-between h-full'>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 pb-12 border-b border-gray-300/70">
          
          <div className="space-y-3">
            <h3 className="text-xl font-bold tracking-wide text-gray-900">EndoCare Premium</h3>
            <p className="text-gray-600 text-sm leading-relaxed max-w-[280px]">
              2012-yildan beri gormonal va metabolik salomatlik bo'yicha yetakchi klinika.
            </p>
            <div className="flex gap-4">
              <img src={Share} alt="Share" className=" cursor-pointer" />
              <img src={Pochta} alt="Pochta" className=" cursor-pointer" />
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-lg font-semibold text-gray-900">Bemorni parvarish qilish</h4>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li><a href="#" className="hover:text-blue-600 hover:underline transition-colors">Bemor portali</a></li>
              <li><a href="#" className="hover:text-blue-600 hover:underline transition-colors">Sug'urta haqida ma'lumot</a></li>
              <li><a href="#" className="hover:text-blue-600 hover:underline transition-colors">Laboratoriya natijalari</a></li>
              <li><a href="#" className="hover:text-blue-600 hover:underline transition-colors">Telesalomatlik bo'yicha Savollar</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-lg font-semibold text-gray-900">Amaliyot</h4>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li><a href="#" className="hover:text-blue-600 hover:underline transition-colors">Bizning shifokorlarimiz</a></li>
              <li><a href="#" className="hover:text-blue-600 hover:underline transition-colors">Biz bilan bog'lanish</a></li>
              <li><a href="#" className="hover:text-blue-600 hover:underline transition-colors">Maxfiylik siyosati</a></li>
              <li><a href="#" className="hover:text-blue-600 hover:underline transition-colors">Xizmat shartlari</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-lg font-semibold text-gray-900">Ish vaqti</h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              <span className="font-medium text-gray-700">Dushanba - Juma:</span> 08:00 - 18:00<br />
              <span className="font-medium text-gray-700">Shanba:</span> 09:00 - 13:00<br />
              <span className="font-medium text-gray-700">Yakshanba:</span> Yopiq
            </p>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 text-xs text-gray-500 gap-4">
          <p>&copy; {new Date().getFullYear()} EndoCare Endokrinologiya amaliyoti. Barcha huquqlar himoyalangan.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-blue-600 hover:underline transition-colors">Tibbiy javobgarlikdan voz kechish</a>
            <a href="#" className="hover:text-blue-600 hover:underline transition-colors">Foydalanish imkoniyati bayonnomasi</a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Footer