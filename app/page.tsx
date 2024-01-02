"use client"
import Image from "next/image";
import Link from "next/link";
import LogRocket from 'logrocket';
import { useEffect } from "react";
import Testimonial from "@/components/testimonial";


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
      <section className="py-40 flex flex-col lg:gap-28 gap-20">
        <h3 className="text-black text-center lg:text-5xl text-4xl font-bold">What Co-workers Are Saying </h3>
        <div className="grid xl:grid-cols-3 lg:grid-cols-2 gap-8">
          <Testimonial name="Daniel Weisman" title="Cofounder at Jabberwocky " relationship="Managed Yehuda directly" imageSrc="/daniel.jpeg" body="Yehuda builds beautifully functioning user experiences for mobile web and desktop (including full accessibility) across all major platforms. He is also, easily, the most user-focused engineer I have ever had the pleasure of working with (full stack like Yehuda or otherwise).

He would be an exceptional addition to any team, but I think his exceptional product-sense gifts would be particularly appreciated inside a growth team. He effortlessly draws user-experience inspiration from the likes of Apple, Spotify, Stripe, and even a clothing brand's mobile web system that you've never heard of.

His obsession with user interactions will make your product richer. He will show you possibilities you didn't even think existed. You can't afford not to have him.

Of the 50 or so people I've directly hired over the years, Yehuda stands out as exceptional. I have no doubt that he will emerge as one of the brightest shining future superstars I'll have ever had the pleasure of working with.

Yehuda, it's been a pleasure, and an honor, working with you. I sincerely hope that fate will let me work with you again someday." />
          <Testimonial name="Vijay N" title="Engineering Leader" relationship="Managed Yehuda directly" imageSrc="/vijay-n.jpeg" body="Yehuda is one of the brightest engineers I worked with and has a remarkable knack for problem-solving. He ramped up quickly and started contributing to our product from Day-1. He proactively reviewed PRDs and provided valuable feedback to the Product team. He actively participated in code reviews to provide constructive and insightful comments for others. This commitment to a collaborative workstyle fostered a positive work environment and boosted overall team productivity. Yehuda was also willing to learn new things on the fly to help the team achieve its goals. For example, he jumped on to understand AWS infra nuances and worked with me on multiple debug sessions to get our product up and running.
I would recommend Yehuda to any organization." />
          <Testimonial name="Quinton Pike" title="Founder & CEO at Polygon.io" relationship="Senior to Yehuda but didn't manage directly" imageSrc="/quinton.jpeg" body="Yehuda shows great promise as a software engineer. His constant curiosity led to ongoing learning, often helping in many ways, including product enhancements. As a frontend engineer, his detail-oriented approach and focus on user experience were unmatched. He consistently aimed to expand his knowledge in not just frontend engineering, but web development as a whole. His journey in engineering is definitely one to observe." />
          <Testimonial name="Andrew Bailey" title="Engineering Manager" relationship="Managed Yehuda directly" imageSrc="/andrew.jpeg" body="Yehuda is an exceptionally skilled frontend engineer poised for a promising future. His unparalleled attention to detail sets him apart, consistently ensuring the highest level of quality in his work. Yehuda's commitment to enhancing user experience shines through his smart, concise, and well-thought-out advocacy. With an insatiable thirst for knowledge in all aspects of web development, he continuously seeks to expand his expertise. Yehuda's unwavering dedication and talents make him an invaluable asset to any team, contributing significantly to its overall success." />
          <Testimonial name="Katie Adams" title="Chief Product Officer at Polygon.io" relationship="Managed Yehuda directly" imageSrc="/katie.jpeg" body="Yehuda is a promising engineer on a high-growth career trajectory. His natural curiosity sparks continuous learning and drives him to constantly broaden his knowledge. He is eager to share his thoughts and ideas, always advocating for a better product. Yehuda stands out among his peers with an impressive blend of curiosity, adaptability, and technical aptitude." />
          <Testimonial name="Rocco Russo" title="Frontend Web Engineer" relationship="Worked with Yehuda on the same team" imageSrc="/rocco.jpeg" body="Yehuda is a diligent and very skilled software engineer. It is a pleasure working with him and I can always count on his vast skills and determination to get the job done.

In our team, I'm his technical lead, and we worked together on several frontend projects, including some backend tasks. Thanks to this I managed to have a closer look at his skillset: he's a passionate and very knowledgeable software engineer, with attention to detail despite sometimes we had short deadlines.
Also, his vast knowledge of Web3 made it simple to integrate several smart contracts in our front-end projects at Shiba Inu.

I hope to continue working with him for a long time because he's really an asset to the team." />
        </div>
      </section>
    </main >
  );
}
