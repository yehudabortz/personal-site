import Image from "next/image";

type TestimonialProps = {
    name: string;
    title: string;
    relationship: string;
    body: string;
    imageSrc: string;
}

export default function Testimonial({ name, title, relationship, body, imageSrc }: TestimonialProps) {
    return (
        <div className="flex flex-col gap-4 m-auto bg-neutral-100 p-8 rounded-sm h-full">
            <div className="flex gap-4">
                <Image src={imageSrc} alt={name + "profile photo"} className="rounded-full w-16 h-16" width={50} height={50} />
                <div className="flex flex-col gap-1">
                    <h4 className="font-bold text-2xl leading-[1em]">
                        {name}
                    </h4>
                    <h5 className="font-medium text-lg leading-[1em]">
                        {title}
                    </h5>
                    <p className="leading-[1em]">{relationship}</p>
                </div>
            </div>
            <p className="text-lg">{body}
            </p>
        </div>
    );
}
