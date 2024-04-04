import React from 'react'

export default function Letter() {
  return (
    <div>
         <div class="pt-[80px] pb-[100px] my-[10%] mx-[10%] bg-[#265EE1] text-center rounded-[20px]">
            <h1 class="pb-11 text-4xl">
                Subscribe to our <br/> newsletter
            </h1>
            <input type="email"  class="w-[40%] h-[40px] rounded-md bg-white  border-white pl-[15px] font-[500] text-[16px] text- outline-none" placeholder="Enter Your email"/>
            <button class="bg-black text-white border[0]  ml[5px] h-[40px] rounded-md  ml-1 px-[10px]" type="submit">Subscribe Now</button>
        </div>
    </div>
  )
}
