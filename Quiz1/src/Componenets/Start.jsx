import React from 'react'

function Start({play}) {
  return (
    <div   onClick={play} className=' w-fit px-[16px] py-[6px] bg-green-400 text-white rounded-[5px] cursor-pointer'>Start</div>
  )
}

export default Start