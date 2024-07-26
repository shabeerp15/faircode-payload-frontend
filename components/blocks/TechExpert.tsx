import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface TechExpertBlockProps {
	title: string;
	subtitle: string;
	description: string;
	ctaText: string;
	ctaLink: string;
	imageSrc?: string;
}

const TechExpertBlock = ({ title, subtitle, description, ctaText, ctaLink, imageSrc }: TechExpertBlockProps) => {
	return (
		<div className="flex flex-col md:flex-row bg-black text-white">
			<div className="w-full md:w-1/2 bg-black text-white p-5 md:p-8 lg:p-24 flex flex-col justify-center ">
				<h2 className="text-xl md:text-3xl font-semibold mb-2">{title}</h2>
				<h1 className="text-3xl md:text-6xl lg:text-7xl font-bold mb-4">{subtitle}</h1>
				<p className="text-md mb-8 text-[#C1C1C1] lg:w-2/3 font-thin">{description}</p>
				<div className="flex items-center gap-3">
					<button className="bg-[#00F5A3] text-black font-semibold p-3 pl-1 rounded-full inline-flex items-center transition duration-300 hover:bg-green-500 w-fit">
						<ArrowRight className="ml-2" size={20} />
					</button>
					<Link href={ctaLink}>{ctaText}</Link>
				</div>
			</div>
			<div className="w-full md:w-1/2 bg-green-400 flex items-center justify-center">
				<div className="relative">
					{/* <Image src={`${process.env.NEXT_PUBLIC_PAYLOAD_URL}/media/logo_faircode.svg`} alt="Smartphone app screenshot" layout="fill" objectFit="contain" /> */}
					{/* <img src={`${process.env.NEXT_PUBLIC_PAYLOAD_URL}${imageSrc}`} alt="Smartphone app screenshot" className=" object-cover w-full h-full" /> */}
				</div>
			</div>
		</div>
	);
};

export default TechExpertBlock;
