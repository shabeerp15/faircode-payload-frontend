import React from "react";

const TextItem = ({ text, style }: any) => {
	const baseClasses = "text-7xl md:text-8xl font-sans";
	const styleClasses: any = {
		bold: "font-bold",
		outlined: "font-outline text-transparent bg-clip-text font-bold",
	};

	return <span className={`${baseClasses} ${styleClasses[style]} mr-6`}>{text}</span>;
};

const StyledTextBlock = ({ textItems }: any) => {
	return (
		<div className="container mx-auto px-4 py-16 overflow-hidden whitespace-nowrap flex justify-center items-center">
			<div className="inline-flex">
				{textItems.map((item: any, index: number) => (
					<TextItem key={index} {...item} />
				))}
			</div>
		</div>
	);
};

export default StyledTextBlock;
