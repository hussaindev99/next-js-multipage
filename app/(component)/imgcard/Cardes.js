import React from 'react'
import Image from 'next/image'
import Img from "@/public/images/Image.png"
import filegirl from "@/public/images/file-girl-img.png"
import tablechair from "@/public/images/tabel-chair.png"
import mobilegirl from "@/public/images/mobile-gir-img.png"
import computerimg from "@/public/images/computer img.png"
import Link from 'next/link'
export default function Cardes() {
    return (
        <div className="flex-col w-full text-center justify-center items-center ">
            <div class="flex justify-center" style={{padding: "20px 150px"}}>
                <Image src={Img} alt=""  style={{ marginTop: "135px", paddingRight: "20px" }}/>
                <Image src={filegirl} alt="" />
            </div>
            <div className='flex justify-center'>
                <Image src={tablechair} alt="" style={{ paddingRight: "30px",  height: "200px"}} />
                <Image src={mobilegirl} alt="" class="pr-6" />
                <Image src={computerimg} alt="" style={{ paddingBottom: "158px", paddingRight: "30px" }} />
            </div>
            <div class="chabutt">
                <h1 class="pt-20 text-4xl pb-5">Expert 24/7 Support</h1>
                <p>The most powerful finance software that connects with your financial accounts. Track <br />  spending and
                    categorize
                    expenses so you can see where your money is going.</p>
                <button style={{background: "#265EE1" , border: "none" , fontsize: "20px" , borderRadius: "5px" ,padding: "5px 15px" , color: "white", margin:"20px"}}>Chat now</button>
            </div>
        </div>
    )
}
