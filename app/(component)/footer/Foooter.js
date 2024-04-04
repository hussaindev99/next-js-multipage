import React from 'react'
import Image from 'next/image'
import Social from "@/public/images/Social.png"
export default function Foooter() {
  return (
    <div className="flex justify-between " style={{paddingTop : "100px" , margin : "10px 10%"}}>
      <p>© 2023 Chat wit professionals. All rights reserved</p>
      <Image src={Social} alt="" class="h-5 "  />
    </div>
  )
}


