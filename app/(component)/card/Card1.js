import React from 'react'
import Image from 'next/image'
import newimg from "@/public/images/new img.png"
export default function Card1(props) {
    return (
        <div>
            <div className="w-[250px] bg-[#F9FAFB] h-auto  p-[30px]">
                <Image src={newimg} alt="" />
                <h4 className='text-[26px] font-[600]'>Video  <br />Creating</h4>
                <p className='w-full'>{props.title}</p>
            </div>
        </div>
    )
}
