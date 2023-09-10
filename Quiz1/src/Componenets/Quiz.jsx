import React from 'react'

function Quiz() {
    const quizQuestions=[

    ]
  return (
    <div  className='w-[40%] h-[30%] border-[1px] border-black rounded-[5px] px-4 pt-[30px]'>
        <div className=''>
            <h2>Q. What is your name</h2>
           <div className='grid grid-cols-2 gap-5'>
            <h3><span className=' inline-block bg-gray-200 rounded-[5px] p-[5px]  mr-[3px]'>1.</span> satyam.</h3>
            <h3> <span className=' inline-block bg-gray-200 rounded-[5px] p-[5px]  mr-[3px]'>2.</span>satyam</h3>
            <h3> <span className=' inline-block bg-gray-200 rounded-[5px] p-[5px]  mr-[3px]'>3.</span>satyam</h3>
            <h3> <span className=' inline-block bg-gray-200 rounded-[5px] p-[5px]  mr-[3px]'>4.</span>satyam</h3>
           </div>
        </div>
        <div className='flex justify-between mt-[10px]'>
            <div className='bg-red-300 px-[16px] py-[6px] rounded-[5px] cursor-pointer'>Reset</div>
            <div className='bg-blue-500  px-[16px] py-[6px] rounded-[5px] cursor-pointer'>save and Next</div>
            <div className='bg-green-300  px-[16px] py-[6px] rounded-[5px] cursor-pointer'>submit</div>
        </div>
    </div>
  )
}

export default Quiz