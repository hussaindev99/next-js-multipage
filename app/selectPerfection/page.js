import React from 'react'
import Image from 'next/image'
import logomaker from "@/public/images/Logomark.png"
import logomaker1 from "@/public/images/Logomark (1).png"
import logomaker2 from "@/public/images/Logomark (2).png"
import logomaker3 from "@/public/images/Logomark (3).png"
import logomaker4 from "@/public/images/Logomark (4).png"
import Header from '@/app/(component)/header/Header';
import Letter from '@/app/(component)/newsletter/Letter';
import Foooter from '@/app/(component)/footer/Foooter';
import Soon from '@/app/commingsoon/Soon';
import bg_Img from '@/public/images/BG1.png'
import Card1 from '../(component)/card/Card1'
export default function Select() {
    return (
        <>
            <Header />
            <div>
                <div>
                    <div style={{
                        backgroundImage: `url('${bg_Img.src}')`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        height: '80vh',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: "0px  10%"
                    }}>
                        <div className="text-center">
                            <button className="text-white rounded-[15px] text-[15px] px-[40px] py-[5px] bg-blue-500">Made for your better future</button>
                            <h1 className="pt-[30px] text-[42px] font-[500] text-white" >Connect with Top <br /> Professionals on Demand</h1>
                            <p className="text-[12px] pt-[20px] text-white">Find the Right Professional for Your Needs and Get the Job <br /> Done Quickly and Efficiently</p>
                        </div>
                    </div>
                </div>

            </div>
            <div>
                <p className="text-center pt-[80px]">Join 4,000+ companies already using our services</p>
                <div className="flex justify-around pt-[20px] px-[10%]" >
                    <div className="w-[40px] h-[40px] flex items-center pt-[32px] text-[25px]">
                        <Image src={logomaker} alt="" /> Leyers
                    </div>
                    <div class="w-[40px] h-[40px] flex items-center pt-[32px] text-[25px]">
                        <Image src={logomaker1} alt="" /> Sisphus
                    </div>
                    <div class="w-[40px] h-[40px] flex items-center pt-[32px] text-[25px]">
                        <Image src={logomaker2} alt="" /> Circooles
                    </div>
                    <div class="w-[40px] h-[40px] flex items-center pt-[32px] text-[25px]">
                        <Image src={logomaker3} alt="" /> Catalog
                    </div>
                    <div class="w-[40px] h-[40px] flex items-center pt-[32px] text-[25px]">
                        <Image src={logomaker4} alt="" /> Quotient
                    </div>
                </div>
                <h1 className="text-center pt-[100px] text-[40px]">Explore By Category</h1>
            </div>
            <div>

                <div className="flex justify-around p-[20px] pt-">
                    <Card1 title='Whether you have a team of 2 or 200, our shared team inboxes' />
                    <Card1 title='Whether you have a team of 2 or 200, our shared team inboxes' />
                    <Card1 title='Whether you have a team of 2 or 200, our shared team inboxes' />
                    <Card1 title='Whether you have a team of 2 or 200, our shared team inboxes' />
                </div>
                <div className="flex justify-around p-[20px]">
                    <Card1 title='Whether you have a team of 2 or 200, our shared team inboxes' />
                    <Card1 title='Whether you have a team of 2 or 200, our shared team inboxes' />
                    <Card1 title='Whether you have a team of 2 or 200, our shared team inboxes' />
                    <Card1 title='Whether you have a team of 2 or 200, our shared team inboxes' />
                </div>
                <div className="text-center pt-[50px]">
                    <button className="text-[20px] bg-[#edeff1] px-[20px] py-[10px]">Load More</button>
                </div>
            </div>
            
            <Letter />
            <Soon />
            <Foooter />
        </>
    )
}
