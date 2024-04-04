import React from 'react'
import Image from 'next/image'
import Group from "@/public/images/Group 4.png"
export default function Soon() {
  return (
          <div class="flex my-[0] mx-[10%] pt-[0px]">
    <div class="flex items-center pr-[150px] font-serif">
        <Image src={Group} alt="" class="pr-[15px] h-[60px] w-[70px]" />
        <p>Chat with <br/>
            PROFESSIONALS
        </p>
    </div>
    <div class="ton">
        <h2 className='text-[30px] font-[600] mb-[10px]'>
            Coming Soon
        </h2>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum aliquet accumsan porta lectus
            ridiculus in mattis. Netus sodales in volutpat ullamcorper amet adipiscing fermentum. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Nullam dictum aliquet accumsan porta lectus ridiculus
            in  mattis. Netus sodales in volutpat ullamcorper amet adipiscing fermentum.
        </p>
    </div>
</div>
  )
}