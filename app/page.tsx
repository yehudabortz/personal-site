import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="max-w-screen-2xl w-[90vw] m-auto">
      <nav className="flex w-full py-8">
        <Link href="/Yehuda_Bortz_Resume.pdf" download="Yehuda_Bortz_Resume.pdf" target="_blank" className="text-bg text-xl ">
          Resume
        </Link>
      </nav>
      <div className="flex lg:flex-row flex-col flex-col-reverse lg:gap-4 gap-10  max-w-screen-2xl w-[90vw] m-auto lg:items-center items-start" >
        <div className="lg:w-1/2 w-full flex flex-col gap-4">
          <h1 className="text-black text-8xl font-bold">
            Hey 👋
            <br />
            I’m Yehuda
          </h1>
          <h2 className="text-black text-6xl  font-normal">
            Software Engineer
          </h2>
          <p className="text-2xl font-normal max-w-md">
            I'm a specialist in Frontend Engineering and UX Design, with a strong focus on delivering high-performance software rapidly and efficiently.
          </p>
          <Link href="mailto:ybortz@yehudabortz.com?subject=Saying Hello From yehudabortz.com 🚀" className=" border-solid border-black w-max border-2 rounded-sm text-xl align-center py-2 px-6 mt-4">
            Email Me!
          </Link>

        </div>
        <div className="lg:w-1/2 w-2/3 ml-0">
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
