import React from 'react'
import Card2 from '../(component)/card2/Card2'
import Image from 'next/image'
import group from "@/public/images/Group 4.png"
export default function Room() {
    return (
                    <div class="container">
                        <div class="flex items-center justify-between pb-[10px] bg-[white]">
                            <div class="flex items-center ml-[80px]">
                                <div>
                                    <Image src={group} alt="" class="pr-3" />
                                </div>
                                <p>chat with <br /> PROFESSIONALS</p>
                            </div>
                            <div class="flex items-center justify-center mt-[-7px] ">
                                <button className="rounded-[7px] border-none bg-[#265EE1] h-[30px] text-white w-[100px] text-center ">Logout</button>
                            </div>
                        </div>
                        <div class="pt-[80px] text-center justify-center">
                            <h2 className='text-[30px] font-[600]'>The Waiting Room</h2>
                            <p>The most powerful finance software that connects with your financial accounts. Track <br /> spending and
                                categorize expenses so you can see where your money is going.</p>
                        </div>
                        <div class="flex p-[80px]:">
                            <div>
                                <Card2  />
                            </div>
                            <div>
                                <Card2 />
                            </div>
                            <div>
                                <Card2 />
                            </div>
                            <div>
                                <Card2 />
                            </div>
                        </div>
                        <div class="text-center items-center justify-center">
                            <button className="bg-[#265EE1] text-white text-[24px] py-[5px] px-[80px] border-white rounded-[5px] text-center mt-[80px]"> Start Chat Now</button>
                        </div>
                    </div>
    )
}
