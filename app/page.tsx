import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="flex lg:flex-row flex-col flex-col-reverse lg:gap-4 gap-4  max-w-screen-2xl w-[90vw] m-auto lg:items-center items-start" >
        <div className="lg:w-1/2 w-full flex flex-col gap-4">
          <h1 className="text-black lg:text-8xl text-6xl font-bold">
            Hey 👋
            <br />
            I’m Yehuda
          </h1>
          <h2 className="text-black lg:text-6xl text-4xl  font-normal">
            Software Engineer
          </h2>
          <p className="lg:text-2xl text-xl font-normal max-w-md">
            I'm a specialist in Frontend Engineering and UX Design, with a strong focus on delivering high-performance software rapidly and efficiently.
          </p>
          <Link href="mailto:ybortz@yehudabortz.com?subject=Saying Hello From yehudabortz.com 🚀" className=" border-solid border-black w-max border-2 rounded-sm text-xl align-center py-2 px-6 mt-4">
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
