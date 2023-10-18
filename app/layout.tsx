import "server-only"
import clsx from 'clsx'
import './globals.css'
import { Darker_Grotesque } from 'next/font/google'
import Link from 'next/link'
import Image from "next/image"
import { Analytics } from '@vercel/analytics/react';
import LogRocket from 'logrocket';

const inter = Darker_Grotesque({ subsets: ['latin'] })

export const metadata = {
  title: 'Yehuda Bortz | Software Engineer',
  description: "I'm a specialist in Frontend Engineering and UX Design, with a strong focus on delivering high-performance software rapidly and efficiently.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  LogRocket.init('zpauwq/yehudabortzcom');
  return (
    <>
      <html lang="en" >
        <meta property="og:image" content="/yehuda_bortz_photo.jpg" />
        <body className={clsx(inter.className, "bg-neutral-200 text-black max-w-screen-2xl w-[90vw] m-auto")} >
          <nav className="flex w-full py-8 gap-8 justify-between">
            <Link href="/Yehuda_Bortz_Resume.pdf" download="Yehuda_Bortz_Resume.pdf" target="_blank" className="text-bg text-xl underline underline-offset-8 decoration-1">
              Resume
            </Link>
            <div className="flex gap-4">
              <Link href="https://github.com/yehudabortz" target="_blank">
                <span className="sr-only">GitHub</span>
                <Image alt="GitHub Icon" width={30} height={30} src="/github-icon.svg" />
              </Link>
              <Link href="https://www.linkedin.com/in/yehudabortz" target="_blank">
                <span className="sr-only">LinkedIn</span>
                <Image alt="LinkedIn Icon" width={30} height={30} src="/linkedin-icon.svg" />
              </Link>
            </div>
          </nav>
          {children}
          <footer className='min-h-[100px]'></footer>
        </body>
      </html>
      <Analytics />
    </>
  )
}
