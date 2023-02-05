import React from 'react'

const Portfolio = () => {
    // const portfolio = [
    //       {
    //         id:1,
    //         src:"",
    //       }
    // ]
  return (
    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
          <p className='py-4 '>Checkout some of my work here</p>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm-px-0'>
            <div className='shadow-md shadow-gray-600 rounded-lg flex flex-col justify-center items-center'>
                <img src="twitter.png" alt='' className='rounded-md duration-200 hover:scale-105'/>
                <div className='flex items-center justify-center'>
                    <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'><a href='twitter.png' target="_blank">Demo</a></button>
                    <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
                </div>
            </div>
            <div className='shadow-md shadow-gray-600 rounded-lg flex flex-col justify-center items-center'>
                <img src="google.png" alt='' className='rounded-md duration-200 hover:scale-105'/>
                <div className='flex items-center justify-center'>
                    <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'><a href='google.png' target="_blank">Demo</a></button>
                    <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
                </div>
            </div>
            <div className='shadow-md shadow-gray-600 rounded-lg flex flex-col justify-center items-center'>
                <img src="pizza.png" alt='' className='rounded-md duration-200 hover:scale-105'/>
                <div className='flex items-center justify-center'>
                    <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'><a href='pizza.png' target="_blank">Demo</a></button>
                    <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
                </div>
            </div>
           
            
        </div>
       </div>
    </div>
  )
}

export default Portfolio