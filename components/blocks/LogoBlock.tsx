import React from "react";
import Image from "next/image";

const LogoBlock = ({ title, logos }: any) => {
	return (
		<section className="py-10 px-4">
			{/* {title && <h2 className="text-2xl font-bold text-center mb-8">{title}</h2>} */}
			<div className="flex flex-wrap justify-center items-center gap-16 max-w-6xl mx-auto ">
				{logos.map((logo: any, index: any) => (
					<div key={index} className="w-32 h-16 relative ">
						<Image src={process.env.NEXT_PUBLIC_PAYLOAD_URL + logo.logo.url} alt={logo.altText} layout="fill" objectFit="contain" />
					</div>
				))}
			</div>
		</section>
	);
};

export default LogoBlock;
