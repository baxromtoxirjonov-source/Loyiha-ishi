import React from 'react'
import Puls from "../assets/Puls.png"
import Mikraskop from "../assets/Mikraskop.png"
import Gantel from "../assets/Gantel.png"

const Kunlik = () => {
  return (
   <div className="container mx-auto max-w-[1200px] py-16 px-6 bg-green-50 rounded-3xl my-12">
  
  <div className="text-center max-w-[700px] mx-auto mb-12 space-y-3">
    <h2 className="text-3xl font-extrabold text-gray-900 md:text-4xl tracking-tight">
      Klinik mukammallik sohalari
    </h2>
    <p className="text-gray-600 text-lg leading-relaxed">
      Sizning noyob metabolik profilingizga moslashtirilgan, dalillarga asoslangan davolash rejalarini taqdim etamiz.
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    
    <div className="flex flex-col items-center text-center p-8 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 group">
      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
        <img src={Puls} alt="Puls" className="w-8 h-8 object-contain" />
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-3">Qandli diabet nazorati</h3>
      <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
        1-tur, 2-tur va homiladorlikdagi qandli diabetni eng so'nggi CGM (glyukoza monitoringi) va nasoslar yordamida har tomonlama boshqarish.
      </p>
      <button className="text-green-600 font-semibold text-sm flex items-center gap-1 hover:text-green-700 transition-colors duration-200">
        Batafsil ma'lumot <span>&rarr;</span>
      </button>
    </div>

    <div className="flex flex-col items-center text-center p-8 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 group">
      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
        <img src={Mikraskop} alt="Mikraskop" className="w-8 h-8 object-contain" />
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-3">Qalqonsimon bez kasalliklari</h3>
      <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
        Xashimoto, Greyvs kasalligi va qalqonsimon bez tugunlarini aniq vizualizatsiya (UZI) yordamida professional tashxislash va davolash.
      </p>
      <button className="text-green-600 font-semibold text-sm flex items-center gap-1 hover:text-green-700 transition-colors duration-200">
        Batafsil ma'lumot <span>&rarr;</span>
      </button>
    </div>

    <div className="flex flex-col items-center text-center p-8 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 group">
      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
        <img src={Gantel} alt="Gantel" className="w-8 h-8 object-contain" />
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-3">Metabolik salomatlik</h3>
      <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
        PCOS (tuxumdonlar polikistozi), metabolik sindrom va gormonal vazn muammolarini yaxlit tibbiy protokollar orqali bartaraf etish.
      </p>
      <button className="text-green-600 font-semibold text-sm flex items-center gap-1 hover:text-green-700 transition-colors duration-200">
        Batafsil ma'lumot <span>&rarr;</span>
      </button>
    </div>

  </div>
</div>
  )
}

export default Kunlik