import React from 'react'

const Experience = () => {
    // const techs = [
    //     {
    //         id:1,
    //         src:"",
    //         title:"",
    //         style:''
    //     },
    // ]
  return (
    <div name="experience" className='bg-gradient-to-b from-gray-800 to-black w-full '>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-white'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500 p-2'>Experience</p>
          <p className='py-6 '>There are the Technologies I've worked with</p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 px-12 py-8 sm-px-0 text-center'>
            <div className='shadow-md hover:scale-105 duration-500 py-2 flex flex-col justify-center items-center shadow-orange-500 rounded-lg'>
                <img src="html.png" alt='' className=' w-20 mx-auto rounded-md duration-200 hover:scale-105'/>
                <p className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>HTML</p>
            </div>
            <div className='shadow-md hover:scale-105 duration-500 py-2 flex flex-col justify-center items-center shadow-blue-500 rounded-lg'>
                <img src="css.png" alt='' className=' w-20 mx-auto rounded-md duration-200 hover:scale-105'/>
                <p className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>CSS</p>
            </div>
            <div className='shadow-md hover:scale-105 duration-500 py-2 flex flex-col justify-center items-center shadow-yellow-500 rounded-lg'>
                <img src="javascript.png" alt='' className=' w-20 mx-auto rounded-md duration-200 hover:scale-105'/>
                <p className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>JAVA SCRIPT</p>
            </div>
            <div className='shadow-md hover:scale-105 duration-500 py-2 flex flex-col justify-center items-center shadow-cyan-500 rounded-lg'>
                <img src="tailwind.png" alt='' className=' w-20 mx-auto rounded-md duration-200 hover:scale-105'/>
                <p className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>TAILWIND</p>
            </div>
            <div className='shadow-md hover:scale-105 duration-500 py-2 flex flex-col justify-center items-center shadow-cyan-800 rounded-lg'>
                <img src="react.png" alt='' className=' w-20 mx-auto rounded-md duration-200 hover:scale-105'/>
                <p className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>REACT</p>
            </div>
        </div>
       </div>
    </div>
  )
}

export default Experience