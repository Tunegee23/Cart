import React from 'react'
import  Becca from '../assets/becca.jpg'
import Inside from '../assets/inside.jpg'



function Content() {
  return (
    <div className='px-[2rem]'>
        <div className='bg-[#3c4e50a4] w-full rounded-[10px]   '>
            <div className=' px-[2rem] md:justify-between md:flex'>

                {/* <div className='text-[#FFFF] py-[2rem]  w-1/2 block  md:justify-between md:px-[2rem] text-center sm:text-left '>
                    <h3 className='md:mb-[14rem] mb-4'>Our Values</h3>
                    <p  >Let's create a space you'll love. We're dedicated to providing you with reliable, high-quality furniture and personalized service, making us your trusted partner in designing a home that reflects your unique adventures and stories</p>
                </div> */}

                {/* <div className=' md:flex  md:w1/2  md:space-x-[1rem]  md:py-[2rem] '>
                    <img src={Becca} className= ' w-full md:w-[250px] rounded-[20px]' alt=''></img>
                    <img src={Inside} className=' md:w-[250px] rounded-[20px]' alt=''></img>
                </div> */}
            </div>
           

        </div>
    </div>
  )
}

export default Content