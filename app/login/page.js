import React from 'react'
import Image from 'next/image'
import Group1 from "@/public/images/Group 4.png"
import Googlelogo from "@/public/images/google logo.png"
import Section from "@/public/images/Section.png"
export default function page() {
  return (
    <div className='mx-[10%]'>
    <div className="flex " style={{paddingTop : "100px" , margin : "10px 10%"}}>
        <Image src={Group1} alt="" className="pr-[15px]" />
        <p>Chat with <br />
            PROFESSIONALS
        </p>
    </div>
    <div className="w-full flex">
        <div className="w-[50%] p-[150px] text-center">
            <h1 className='text-[30px]'>Welcome back</h1>
            <p className='mt[20px] mb-[20] text-[13px]'>Welcome back! Please enter your details.</p>
            <form className="w-full h-[40%]">
            <label for="email" className="pr-[210px]">Email</label><br />
                <input type="email" id="Email" name="Email" className=" outline-none mt-5 pl-[10px] w-[250px] h-[35px] rounded-[8px] border-0 bg-[whitesmoke]" placeholder="Enter Your Email" /><br />
                <label for="password" className='pr-[180px] '>Password</label><br />
                <input type="password" id="password" name="password" className=" outline-none w-[250px] mt-5 h-[35px] rounded-[8px] border-0 bg-[whitesmoke] pl-[10px]" placeholder='Password' /><br /> <br />
            <div className="text-[12px] my-[0] mx-[auto] flex items-center text-center justify-center">
                    <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
                    <label for="vehicle3" className='w-[150px] '>Remember for 30 days </label><br /><br />
                    <a
                        href="#" className='text-[10px] flex text-blue-500'>Forgatpassword?</a>
                </div>
                <button type="submit" className="w-[250px] h-[35px] rounded-[8px] bg-[#265EE1] text-slate-200 mb-0 pb-0 ">Sign In</button>
            </form>
            <div className="flex text-center justify-center text-black pt-[80px] pl-[0px] h-[50px] w-[240px] text-[20px]  ">
                <Image src={Googlelogo} alt="" className='w-[35px] h-[35px]' />
                <a href="/" className="pl-[0px] mt-[0px] pt-[0px] text-blue-500">sign in with Google
                </a>

            </div>
            <div className="flex p-[10px] text-center text-[12px] justify-center pt-[40px]">
                <p>Don’t have an account? </p>
                <a href="#" className='mt-[0px] text-blue-500'>Sign up</a>
            </div>
        </div>
        <div className="w-[50%] ">
            <Image src={Section} alt="" className="" />
        </div>
    </div>
</div>


  )
}
