import React from 'react'
import Sabzavotlar from "../assets/Sabzavotlar.png"
import Davleniya from "../assets/Davleniya.png"
import Yoga from "../assets/Yoga.png"

const Bemor = () => {
  return (
    <div className="bg-white py-12">
      <div className='container mx-auto max-w-[1200px] py-16 px-6 bg-green-50 rounded-3xl my-12'>
        
        <div className="mb-10">
          <h2 className='text-3xl font-extrabold text-gray-900 md:text-4xl tracking-tight'>
            Bemorlar uchun manbalar va blog
          </h2>
          <p className='text-gray-600 text-lg leading-relaxed mt-2'>
            Eng so'nggi endokrin tadqiqotlar va salomatlik bo'yicha foydali maslahatlar bilan tanishing.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            
            <div className="flex flex-col bg-white p-4 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <img src={Sabzavotlar} alt="Sabzavotlar" className='w-full h-[220px] object-cover rounded-xl mb-4'/>
                <h3 className='text-xl font-bold text-gray-800 mb-2 px-2'>Endokrin salomatlik uchun oziq-ovqat</h3>
                <p className='text-gray-600 text-sm leading-relaxed mb-4 px-2 flex-grow'>
                  Gormonal muvozanatni qo'llab-quvvatlash uchun eng yaxshi mahsulotlar va foydali retseptlar.
                </p>
                <a href="#" className="text-green-600 font-semibold text-sm px-2 mb-2 hover:text-green-700 inline-flex items-center gap-1">
                  O'qish <span>&rarr;</span>
                </a>
            </div>

            <div className="flex flex-col bg-white p-4 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <img src={Davleniya} alt="Davleniya" className='w-full h-[220px] object-cover rounded-xl mb-4'/>
                <h3 className='text-xl font-bold text-gray-800 mb-2 px-2'>Qandli diabetni boshqarish</h3>
                <p className='text-gray-600 text-sm leading-relaxed mb-4 px-2 flex-grow'>
                  Qandli diabetni kundalik hayotda samarali nazorat qilish uchun eng muhim strategiyalar va tavsiyalar.
                </p>
                <a href="#" className="text-green-600 font-semibold text-sm px-2 mb-2 hover:text-green-700 inline-flex items-center gap-1">
                  O'qish <span>&rarr;</span>
                </a>
            </div>

            <div className="flex flex-col bg-white p-4 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <img src={Yoga} alt="Yoga" className='w-full h-[220px] object-cover rounded-xl mb-4'/>
                <h3 className='text-xl font-bold text-gray-800 mb-2 px-2'>Gormonal muvozanat uchun yoga</h3>
                <p className='text-gray-600 text-sm leading-relaxed mb-4 px-2 flex-grow'>
                  Gormonal tizim faoliyatini yaxshilash va stressni kamaytirish uchun maxsus yoga mashqlari.
                </p>
                <a href="#" className="text-green-600 font-semibold text-sm px-2 mb-2 hover:text-green-700 inline-flex items-center gap-1">
                  O'qish <span>&rarr;</span>
                </a>
            </div>

        </div>
      </div>
    </div>
  )
}

export default Bemor