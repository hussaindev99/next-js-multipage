import Link from 'next/link'
import React from 'react'

export default function Slider() {
  return (
    <div class="items-center pt-25 text-center  mt-20">
    <h1 className="text-4xl">Save Time, Achieve More: <br/> Personalized & Professional Guidance</h1>
    <p className='text-sm mb-5 mt-5'>Get ahead faster by unlocking access to the experts who know <br/> the steps you need succeed.</p>
    <Link href="/waitingRoom" className="border-0 rounded-lg " style={{background : "#265EE1", fontSize: "20px" , color: "white" , padding: "7px 15px"}}>Chat with Professional Now</Link>

</div>

  )
}