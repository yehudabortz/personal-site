import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="max-w-screen-2xl w-[90vw] m-auto">
      <nav className="flex w-full py-8">
        <Link href={"google.com"} className="text-bg text-xl ">
          Resume
        </Link>
      </nav>
      <div className="flex flex-row gap-4 max-w-screen-2xl w-[90vw] m-auto items-center" >
        <div className="w-1/2 flex flex-col gap-4">
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
          <button className="border-solid border-black w-max border-2 rounded-sm text-xl align-center py-2 px-6 mt-4">
            Email Me!
          </button>


        </div>
        <div className="w-1/2">
          <img
            className="relative object-cover saturate-0 max-w-50 rounded"
            src="/yehuda_bortz_photo.jpg"
          />
        </div>
      </div>
    </main>
  );
}
