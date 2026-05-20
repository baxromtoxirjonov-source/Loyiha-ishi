import React from 'react'

const Header = () => {
  return (
    <div>

        <div className='container mx-auto max-w-[1200px]  flex justify-between items-center p-4 '>
            <div>
            <h1 className='text-[#005DAC] text-4xl'>EndoCare Premium</h1>
            </div>

            <div>
                <ul className='flex space-x-4 '>
                    <li className='hover:bg-blue-500 font-bold transition duration-300 text-gray-500 p-3 rounded'>
                        <a href="#">Uy</a>
                    </li>
                    <li className='hover:bg-blue-500 font-bold  transition duration-300 text-gray-500 p-3 rounded'>
                        <a href="#">Xizmatlar</a>
                    </li>
                    <li className='hover:bg-blue-500 font-bold  transition duration-300 text-gray-500 p-3 rounded'  >
                        <a href="">Haqida</a>
                    </li>
                     <li className='hover:bg-blue-500 font-bold  transition duration-300 text-gray-500 p-3 rounded'>
                        <a href="">Qandli diabet</a>
                    </li>
                    <li className='hover:bg-blue-500 font-bold  transition duration-300 text-gray-500 p-3 rounded'>
                        <a href="">Blog</a>
                    </li>
                </ul>
            </div>

            <div className='bg-blue-500 w-[150px] h-[50px] flex items-center justify-center rounded'>
                <button className='text-white'>Kitobni tayinlash</button>  
            </div>
        </div>
    

    </div>
  )
}

export default Header