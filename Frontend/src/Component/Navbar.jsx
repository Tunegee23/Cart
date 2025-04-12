import React from 'react'
import bg from '../assets/Background.jpg'
import Cart from './Cart'
import Content from './Content'


function Navbar() {
  return (
    <div className=' bg-[#c2c5c9]  relative '>
        <div className="relative">
            <img src={bg} alt="Background" className="w-full h-[70vh] " />
            <nav className="absolute top-0 left-0 w-full p-6 flex justify-between items-center text-white">
                <h2 className="font-bold text-[#3c4e50] text-[18px] font-mono ">CARE</h2>
                <ul className=" md:flex text-[#3c4e50] hidden text-[13px] font-mono space-x-4">
                    <li>Home</li>
                    <li>About</li>
                    <li>Shop</li>
                    <li>Blog</li>
                </ul>
            </nav>

            <div className="absolute top-[45%] md:left-[36%] px-6 left-[36%] transform -translate-x-1/2 -translate-y-1/2  text-white">
                <h2 className="md:text-[40px] mt-[2rem] font-mono md:w-[30px]  md:leading-[3rem] text-[#3c4e50] mb-2">EXPERIENCE OUR BRAND!</h2>
                <p className="text-[15px] md:text-[18px] w-[90%] md:w-3/4 md:px-0   text-left text-[#3c4e50]">With courage, let's journey forward and craft memories we'll cherish.</p>
            </div> 
            
        </div>
        <Cart/>
        <Content/>
    </div>
     
  )
}

export default Navbar




