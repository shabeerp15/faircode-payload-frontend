import Image from "next/image";
import React from "react";

const DigitalExcellence = ({ title, imageSrc, highlightedText, highlightedDescription }: any) => {
	return (
		<div className="lg:max-w-screen-lg mx-auto font-sans">
			<div className="flex flex-col md:flex-row justify-between items-center mb-10">
				<div className="mb-6 md:mb-0 md:w-1/2">
					<div className="lg:w-2/3">
						<h1 className="text-4xl font-bold mb-4 leading-tight">{title}</h1>
					</div>
				</div>
				<div className="md:w-1/2">
					<div className="relative flex items-center justify-center gap-4">
						<Image src={process.env.NEXT_PUBLIC_PAYLOAD_URL + imageSrc} alt="Excellence" width={180} height={250} />
						<div className="mt-2 ml-4">
							<h2 className="font-bold text-base text-gray-800">{highlightedText}</h2>
							<p className="text-xs text-gray-300 lg:mt-3">{highlightedDescription}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DigitalExcellence;
