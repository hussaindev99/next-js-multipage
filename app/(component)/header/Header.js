import Image from "next/image";
import Link from "next/link";
import group from "@/public/images/Group 4.png"

export default function Home() {
  return (
    <div>
      <div className="flex items-center justify-between mx-[50px]">
        <Link href="/selectPerfection">
          <div className="flex items-center m-3">
            <div>
              <Image
                src={group}
                alt=""
                width={70}
                height={70}
                className="pr-3"
              />
            </div>
            <p>chat with <br /> PROFESSIONALS</p>
          </div>
        </Link>
        <div className="flex items-center ms-3">
          <p className="px-5">Home</p>
          <p className="px-5">AboutUs</p>
          <p className="px-5">ContactUs</p>
          <p className="px-5">FAQ</p>
        </div>
        <div className="flex items-center justify-center ">
          <Link href="/login">Login</Link>
          <Link href="/joinComunity" className="rounded-md border-0  w-100 items-center ml-5 mt-0 #265ee1" style={{ backgroundColor: "#265ee1", color: "#ffffff", padding: "5px 16px", textDecoration: "none", borderRadius: "5px" }}>Join community</Link>
        </div>
      </div>



    </div>
  );
}
