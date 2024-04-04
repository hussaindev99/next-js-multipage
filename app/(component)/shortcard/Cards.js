import React from 'react'
import zapfast from "@/public/images/zap-fast.png"
import massagechat from "@/public/images/message-chat-circle.png"
import arrow from "@/public/images/arrow-img.png"
import massagesmile from "@/public/images/message-smile-circle.png"
import Image from 'next/image'
export default function Cards() {
    return (
        <div className="" style={{ margin: '100px 10%' }}>
            <div className="flex pt-25">
                <div className="w-80 p-4">
                    <Image src={zapfast} alt="" className="rounded-full h-7 w-7"  />
                    <h2 className="pt-7 pb-5 text-2xl">Make Every Minute <br /> Count</h2>
                    <p>Your time is too valuable to waste it on  searching. Personalize your access and unleash your
                        productivity!</p>
                </div>
                <div className="w-80  p-5 mr-5" style={{background: "var(--gray-50, #F9FAFB)"}} >
                    <Image src={massagechat} alt="" className="" style={{background: "#265EE1" , height : "30px" , width: "30px" , borderRadius: "5px"}} />
                    <h4 className="pt-7 pb-5 text-xl">Instant Access</h4>
              <p>More than your foot in the door, you are at  the table and working with the pro’s who give you the keys to
                        succeed.</p>
                </div>
                <div className="p-3.5 w-80" style={{background: "var(--gray-50, #F9FAFB)"}}>
                    <Image src={arrow} alt="" className='rounded'  style={{background: "#265EE1" , height: "30px" , width: "30px"}}/>
                  <h1 class="pt-7 pb-5 text-xl">Time  Money </h1>
                    <p>The quality of time you invest in a project  beats the quantity of time when measuring  success and
                        happiness. Unleash your efficiency!</p>
                </div>
            </div>
            <div className='w-72'>

            </div>
            <div className="flex items-center justify-end ml-80 mt-5">
                <div className="w-3/6  p-5 mr-5" style={{background: "var(--gray-50, #F9FAFB)"}}>
                    <Image src={massagechat} alt="" className="h-7 rounded"  style={{background: "#265EE1"}}/>
                    <h4 class="pt-7 pb-5 text-xl">Personalized Responses</h4>
                    <p>Your unique profile of experience, interests, and goals and factored into the answers, giving you
                        actionable advice.</p>
                </div>
                <div class="w-3/6 p-5 mr-24" style={{background: "var(--gray-50, #F9FAFB)"}}>
                    <Image src={massagesmile} alt="" className="h-7 rounded" style={{background: "#265EE1"}}/>
                    <h4 class="pt-7 pb-5 text-xl">Personalized Responses</h4>
                    <p>Your unique profile of experience, interests, and goals and factored into the answers, giving you
                        actionable advice.</p>
                </div>
            </div>

        </div>

    )
}
