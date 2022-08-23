import React, { useEffect } from 'react'
const Body = ({Days , Hour , Minute , Second}) => {
  return (
      <div className='w-full h-3/4 flex gap-2 flex-col'>
            <div className="bg-gradient-to-t from-Pink-sp-400  via-pink-300  to-Pink-sp-100  md:text-5xl lg:text-8xl text-center w-3/4 mx-auto my-auto relative rounded-3xl p-5 flex gap-4 md:flex-row">
                  <div className='flex flex-col gap-3 basis-1/4'>
                        <div className='md:text-8xl text-3xl '>
                              {Days}
                        </div>
                        <div className='md:text-4xl sm:text-sm'>Days</div>
                  </div>
                  <div className='flex flex-col gap-3 basis-1/4'>
                        <div className='md:text-8xl text-3xl '>{Hour}</div>
                        <div className='md:text-4xl sm:text-sm'>Hour</div>
                  </div>
                  <div className='flex flex-col gap-3 basis-1/4'>
                        <div className='md:text-8xl text-3xl '>{Minute}</div>
                        <div className='md:text-4xl sm:text-sm'>Minute</div>
                  </div>
                  <div className='flex flex-col gap-3 basis-1/4'>
                        <div className='md:text-8xl text-3xl'>{Second}</div>
                        <div className='md:text-4xl sm:text-sm'>Second</div>
                  </div>
            </div>
      </div>
  )
}

export default Body