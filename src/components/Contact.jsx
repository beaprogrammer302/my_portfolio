import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className='bg-gradient-to-b from-black to-gray-800 w-full p-4 text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-white'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500 p-2'>Contact Us</p>
          <p className='py-6 '>Submit thr form  below to get in touch with me</p>
        </div>
        <div className='flex justify-center items-center'>
            <form action='' className='flex flex-col w-full md:w-1/2'>
                <input type="text" name='name' placeholder="Enter Your name" className=' my-2 p-2 bg-transparent border-2 rounded-md
                text-white focus:outline-none'/>
                <input type="email" name='email' placeholder="Enter Your Email" className='my-2 p-2 bg-transparent border-2 rounded-md
                text-white focus:outline-none'/>
                <textarea name='message' rows="10" placeholder='Enter text here' className='my-2 p-2 bg-transparent border-2 rounded-md
                text-white focus:outline-none'/>
                <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center
                rounded-md hover:scale-110 duration-300'>Let's talk</button>
            </form>
            <div>
                
            </div>
        </div>
       </div>
    </div>
  )
}

export default Contact