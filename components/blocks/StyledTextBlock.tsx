import React from "react";
import Marquee from "react-fast-marquee";

const TextItem = ({ text, style }: any) => {
	const baseClasses = "text-6xl md:text-8xl font-sans";
	const styleClasses: any = {
		bold: "font-bold",
		outlined: "font-outline text-transparent bg-clip-text font-bold",
	};

	return <span className={`${baseClasses} ${styleClasses[style]} mr-8`}>{text}</span>;
};

const StyledTextBlock = ({ textItems, speed = 50 }: any) => {
	return (
		<div className="py-4 overflow-hidden whitespace-nowrap flex justify-center items-center">
			<Marquee speed={speed} gradient={false}>
				{textItems.map((item: any, index: number) => (
					<TextItem key={index} {...item} />
				))}
			</Marquee>
		</div>
	);
};

export default StyledTextBlock;
