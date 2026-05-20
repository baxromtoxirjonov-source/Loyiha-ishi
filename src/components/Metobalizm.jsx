import React from 'react'

const Metobalizm = () => {
  return (
  <div>
  <div className='container mx-auto max-w-[1200px] py-16 px-6 bg-blue-500 rounded-3xl my-12 text-center flex flex-col items-center justify-center space-y-6'>
    
    <h2 className='text-white text-3xl md:text-4xl font-bold max-w-[700px] leading-tight'>
      Metabolik salomatlikka ustunlik berishga tayyormisiz?
    </h2>
    
    <p className='text-white text-lg leading-relaxed max-w-[650px] opacity-90'>
      Mutaxassislarimiz shaxsiy va onlayn (telesalomatlik) maslahatlashuvlar uchun yangi bemorlarni qabul qilmoqdalar. 
      O'zingizni yana a'lo darajada his qilish uchun birinchi qadamni qo'ying.
    </p>
    
    <div className='pt-2'>
      <button className='bg-white text-blue-600 font-semibold py-3 px-8 rounded-full hover:bg-gray-200 transition-colors duration-200 shadow-md active:scale-95 transform'>
        Tashrifingizni rejalashtiring
      </button>
    </div>

  </div>
</div>
  )
}

export default Metobalizm