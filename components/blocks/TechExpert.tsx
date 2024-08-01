import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface TechExpertBlockProps {
	title: string;
	subtitle: string;
	description: string;
	ctaText: string;
	ctaLink: string;
	imageSrc: string;
	cardIconLink: string;
}
const TechExpertBlock = ({ title, subtitle, description, ctaText, ctaLink, imageSrc, cardIconLink }: TechExpertBlockProps) => {
	const imageSrcs = [imageSrc, imageSrc];

	return (
		<div className="flex flex-col md:flex-row bg-black text-white h-auto">
			<div className="w-full min-h-[600px] md:w-1/2 bg-black text-white p-5 md:p-8 lg:p-24 flex flex-col justify-center ">
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
			<div className="w-full min-h-[600px] md:w-1/2 relative">
				<Image src={imageSrc} alt="background image" layout="fill" objectFit="cover" className="absolute" />
				<Carousel showArrows={false} showThumbs={false} showStatus={false} infiniteLoop={true} autoPlay={true} interval={3000} className="w-full h-full">
					{imageSrcs.map((src, index) => (
						<div>
							<div key={index} className="flex items-center justify-center h-full">
								<Image src={`${process.env.NEXT_PUBLIC_PAYLOAD_URL}${src}`} alt={`carousel image ${index + 1}`} layout="intrinsic" width={500} height={500} className="object-contain" />
							</div>
							<div className="absolute bg-white h-48 w-48 bottom-0 left-0 flex flex-col justify-center items-center p-5 gap-2">
								<a href={cardIconLink} className="block">
									<img
										src="/path-to-icon.png" // replace with the actual path to the icon
										alt="icon"
										className="h-10 object-contain"
									/>
								</a>
								<p className="font-grotesk font-black text-xl text-black">This is a custom text {index + 1}</p>
							</div>
						</div>
					))}
				</Carousel>
			</div>
		</div>
	);
};

export default TechExpertBlock;
