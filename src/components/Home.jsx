import React from 'react'
import { Link } from "react-scroll";
// import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import {FiArrowRight} from 'react-icons/fi'
const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black to-gray-800 pt-20'>
       <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
         <div className='flex flex-col justify-center h-full'>
            <h2 className='text-4xl sm:text-7xl font-bold text-white mb-6'>I'm a Front-End Developer</h2>
            <p className='text-white my-4'>
            Hi my name is Rashid Pervaiz. In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the 
            visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used
            as a placeholder before final copy is available
            </p>
            <div className='my-4'>
                <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r
                from-cyan-500 to-blue-500 cursor-pointer">
                <Link to='portfolio' smooth duration={500}>
                portfolio 
                </Link>
                   
                   <span className='group-hover:rotate-90 duration-300'>
                    <FiArrowRight size={25} className="ml-1"/>
                   </span>
                </button>
            </div>
         </div>
         <div className='w-2/3 h-96 pb-16 '>
            <img src='rashid2.jpg' alt='my_profile' className='rounded-2xl mx-auto w-screen sm:h-2 md:w-full h-72'/>
         </div>
       </div>
    </div>
  )
}

export default Home