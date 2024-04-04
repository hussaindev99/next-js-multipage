import React from 'react';
import Image from 'next/image';
import black from "@/public/images/blackShalt.png";
import Ratingelement1 from "@/public/images/Rating element (1).png";
import Ratingelement from "@/public/images/Rating element.png";
import Ratingelement2 from "@/public/images/Rating element 2.png";

export default function Card2(props) {
  return (
    <div className='flex flex-col text-center mt-[100px] ml-[90%] w-full'>
      <div className="m-auto">
        <Image src={black} alt="" />
      </div>
      <p>DJI Phantom 2 <br /> Vision+</p>
      <p>$599</p>
      <div className='flex justify-center items-center'>
        <Image src={Ratingelement1} alt="" />
        <Image src={Ratingelement1} alt="" />
        <Image src={Ratingelement1} alt="" />
        <Image src={Ratingelement} alt="" />
        <Image src={Ratingelement2} alt="" />
      </div>
      <p className='w-full'>{props.title}</p>
    </div>
  );
}
