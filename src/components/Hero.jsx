import React from 'react'
import Doctor from '../assets/Doctor.png'
import Ximoya from "../assets/Ximoya.png"

const HEro = () => {
  return (
    <div className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto max-w-[1200px] px-4 flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Chap tomon: Matnlar va Tugmalar bloki */}
        <div className="flex-1 max-w-[600px] space-y-6">
          
          {/* Yashil "Tajribali endokrinologlar" ko'krak nishoni (Badge) */}
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full w-max">
            <img src={Ximoya} alt="Ximoya" className="w-5 h-5 object-contain" /> 
            <span className="text-sm font-semibold">Tajribali endokrinologlar</span>
          </div>

          {/* Asosiy Sarlavha */}
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-950 leading-tight">
            Sizning gormonal sog'ligingiz uchun maxsus parvarishlash
          </h1>

          {/* Kichik matn */}
          <p className="text-gray-600 text-lg leading-relaxed">
            Surunkali kasalliklarni boshqarish ma'lumotlardan ko'proq narsani talab qiladi — 
            u sherikni talab qiladi. EndoCare-da biz klinik aniqlikni empatik yordam bilan 
            birlashtiramiz, bu esa doimiy metabolik muvozanatga erishishingizga yordam beradi.
          </p>

          {/* Tugmalar (Buttons) */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
  {/* 1-tugma: Asosiy ko'k tugma, hover bo'lganda to'qroq ko'k bo'ladi */}
  <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-xl transition-all duration-300 ease-in-out shadow-lg shadow-blue-600/20 active:scale-95">
    Qabulga yozilish
  </button>
  
  {/* 2-tugma: Shaffof tugma, hover bo'lganda yumshoq ko'k fonga o'tadi */}
  <button className="border border-gray-300 hover:border-blue-500 hover:bg-blue-50 hover:text-blue-600 text-gray-700 font-medium px-6 py-3 rounded-xl transition-all duration-300 ease-in-out active:scale-95">
    Bizning xizmatlar
  </button>
</div>
        </div>   

        <div className="flex-1 flex justify-center md:justify-end">
          <div className="relative max-w-[450px] md:max-w-full">
            <div className="absolute inset-0 bg-green-200/50 rounded-full blur-3xl -z-10 transform scale-90"></div>
            <img 
              src={Doctor} 
              alt="Doctor" 
              className="w-full h-auto object-cover rounded-2xl drop-shadow-xl" 
            />
          </div>
        </div>

      </div>
    </div>
  )
}

export default HEro