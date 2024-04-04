import React from 'react'
import Image from 'next/image'
import Group4 from "@/public/images/Group 4.png"
import Section1 from "@/public/images/Section (1).png"
import Googlelogo from "@/public/images/google logo.png"
export default function Join() {
    return (
        <div>
            <div className='mx-[10%]'>
                <div className="flex " style={{ paddingTop: "100px", margin: "0px 10%" }}>
                    <Image src={Group4} alt="" className="pr-[15px]" />
                    <p>Chat with <br />
                        PROFESSIONALS
                    </p>
                </div>
                <div className="w-full flex">
                    <div className=" w-[50%] p-[150px] text-center">
                        <h1 className='text-[30px]'>Welcome back</h1>
                        <p className='mt[20px] mb-[20] text-[13px]'>Welcome back! Please enter your details.</p>
                        <form className="w-full h-[40%]">
                            <label for="name" className="pr-[205px]">Name</label><br />
                            <input type="text" id="fname" name="name" placeholder="Enter Your Name" className="  outline-none mt-[10px] pl-[10px] w-[250px] h-[35px] rounded-[8px] border-0 bg-[whitesmoke]" /><br />
                            <label for="email" className="pr-[205px]">Email</label><br />
                            <input type="email" id="Email" name="Email" className="  outline-none mt-[10px] pl-[10px] w-[250px] h-[35px] rounded-[8px] border-0 bg-[whitesmoke]" placeholder="Enter Your Email" /><br />
                            <label for="password" className="pr-[170px]">Password</label><br />
                            <input type="password" id="password" name="password" placeholder='Enter password' className=" outline-none mt-[10px] pl-[10px] w-[250px] h-[35px] rounded-[8px] border-0 bg-[whitesmoke]" /><br /> <br />
                            <label for="vehicle3" className="text-[14px] pr-[35px]">Must be at least 8 characters.  </label> <br />
                            <button type="submit" className=" outline-none w-[250px] h-[35px] rounded-[8px] bg-[#265EE1] text-slate-200 mb-0 pb-0 mt-[5px]">Sign In</button>
                            <div className="flex text-center justify-center text-black pt-[30px] pl-[0px] h-[50px] w-[240px] text-[20px]  ">
                                <Image src={Googlelogo} alt="" className='w-[35px] h-[35px]' />
                                <a href="//" className="pl-[0px] mt-[0px] pt-[0px] text-blue-500"> sign in with Google</a>
                            </div>
                            <div className="flex p-[10px] text-center text-[12px] justify-center pt-[40px]">
                                <p>Don’t have an account? </p>
                                <a href="#" className='mt-[0px] text-blue-500'>Sign up</a>
                            </div>
                        </form>
                    </div>
                    <div className="imsection">
                        <Image src={Section1} alt="" className="imghuend" />
                    </div>
                </div>
            </div>
        </div>
    )
}
