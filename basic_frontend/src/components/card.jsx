import React, { useState } from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
const Card = ({ title, content, img }) => {
  const [isFlipped, setIsFlipped] = useState(false);

const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
      <div className="w-full h-screen bg-zinc-200 flex justify-center items-center">
        <div className="relative w-60 h-32 bg-zinc-500 rounded overflow-hidden">
            <img className="w-full h-full object-cover" src={img} alt="image"  />
            <span className='w-8 h-8 absolute bottom-[0%] left-1/2 -translate-x-[50%]'>
            <FaArrowRightLong size={".8em"} />
            </span>
        </div>
      </div>
      <div className="card-back">
        <p>{content}</p>
      </div>
    </div>
  );
}
export default Card;



