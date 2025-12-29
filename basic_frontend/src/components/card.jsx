import React, { useState } from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
const Card = ({ title, content, img, img2 }) => {

const [ val, setVal ] = useState(false);
  return (
    <div className='Card'>
      <div className="w-full h-screen bg-zinc-200 flex justify-center items-center">
        <div className="relative w-60 h-32 bg-zinc-500 rounded-md flex overflow-hidden">
            <img className={`shrink-0 transition-transform ${val === false ? "translate-x-[0%]" : "-translate-x-full"} w-full h-full object-cover`} src={img} alt="image"  />
            <img className={`shrink-0 transition-transform ${val === false ? "translate-x-[0%]" : "-translate-x-full"} w-full h-full object-cover`} src={img2} alt="image"  />
            <span onClick={()=>setVal(()=>!val)} className='w-8 h-8 absolute bottom-[0%] left-1/2 -translate-x-[50%]'>
            <FaArrowRightLong size={".8em"} />
            </span>
        </div>
      </div>
    </div>
  );
}
export default Card;



