import React, { useState } from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const LogoItem = ({ logo, altText }: any) => {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<div className="w-32 h-16 relative mx-8 transition-transform duration-300 ease-in-out hover:scale-110" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
			<Image src={process.env.NEXT_PUBLIC_PAYLOAD_URL + logo.url} alt={altText} layout="fill" objectFit="contain" />
		</div>
	);
};

const LogoBlock = ({ title, logos, speed = 30 }: any) => {
	const [isPaused, setIsPaused] = useState(false);

	return (
		<section className="py-10 px-4 overflow-hidden">
			<div className="max-w-5xl mx-auto" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
				<Marquee speed={speed} gradient={false} pauseOnHover={true} play={!isPaused}>
					{logos.map((logo: any, index: number) => (
						<LogoItem key={index} logo={logo.logo} altText={logo.altText} />
					))}
				</Marquee>
			</div>
		</section>
	);
};

export default LogoBlock;
