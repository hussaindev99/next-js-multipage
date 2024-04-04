import React from 'react'
import Image from 'next/image'
import commaimg from "@/public/images/cooma-img.png"
import girlimg from "@/public/images/girl-img.png"
export default function Card() {
    return (
        <div>
            <div class="flex p-5 bg-[#FAFAFA] my-[5%] mx-[8%] rounded-[20px]">
                <div class="my-[7%] mx-[50px] w-[50%]">
                    <Image src={commaimg} alt="" />
                    <h1 className='text-3xl pt-3'>As a freelancer, I chase clients in a wide variety of fields.</h1>
                    <p className='pt-4' >Having access to the insiders at chatwithprofessionals.com gave me the tools to "ask clients the right
                        questions, understand their target markets, and win new business" in fields that I’m passionate about!
                        Game changer for small businesses like mine.</p>
                </div>
                <div class="w-[50%]">
                    <Image src={girlimg} alt="" className='w-[500px]'/>
                </div>
            </div>
        </div>
    )
}
