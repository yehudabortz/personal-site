"use client"
import Image from "next/image";
import Link from "next/link";
import LogRocket from 'logrocket';
import { useEffect } from "react";


export default function Home() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      LogRocket.init('zpauwq/yehudabortzcom');
    }
  }, [])
  return (
    <main>
      <div className="flex lg:flex-row flex-col-reverse lg:gap-4 gap-4  max-w-screen-2xl w-[90vw] m-auto lg:items-center items-start" >
        <div className="lg:w-1/2 w-full flex flex-col gap-4">
          <h1 className="text-black lg:text-8xl text-6xl font-bold">
            Hey 👋
            <br />
            I&#39;m Yehuda
          </h1>
          <h2 className="text-black lg:text-6xl text-4xl  font-normal">
            Senior Software Engineer
          </h2>
          <p className="lg:text-2xl text-xl font-normal max-w-md">
            I&#39;m a specialist in Frontend Engineering and UX Design, with a strong focus on delivering high-performance software rapidly and efficiently.
          </p>
          <Link href="mailto:ybortz@yehudabortz.com?subject=Saying Hello From yehudabortz.com 🚀" className=" border-solid border-black w-max border-2 rounded-sm text-xl align-center px-6 mt-4 pt-2 pb-3">
            Email Me
          </Link>
        </div>
        <div className="lg:w-1/2 w-32">
          <Image
            alt="Yehuda Bortz Profile Photo"
            width={1000}
            height={1000}
            className="relative object-cover saturate-0 max-w-50 rounded"
            src="/yehuda_bortz_photo.jpg"
          />
        </div>
      </div>
    </main >
  );
}
