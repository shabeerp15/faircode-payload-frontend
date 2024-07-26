import React from "react";
import { cn } from "@/lib/utils";

const StatItem = ({ title, value, className = "" }: any) => (
	<div className={cn("p-3 lg:p-12 border border-gray-200", className)}>
		<p className="text-sm text-gray-600 mb-3 lg:mb-12 lg:pr-24">{title}</p>
		<p className="text-4xl font-bold mb-2">
			<sup className="font-thin mr-1">↑</sup>
			{value}
		</p>
	</div>
);

const ERPSolutions = ({ title, description, highlightedText, ctxButton, cards }: any = {}) => {
	return (
		<div className="max-w-screen-lg mx-auto py-8 px-4">
			<h1 className="text-4xl font-bold mb-5 lg:w-2/3">{title}</h1>

			<div className="md:flex">
				<div className="md:w-1/3">
					<p className="mb-8 text-gray-400 text-xs font-thin font-sans leading-5 lg:pr-24">
						{description}
						<br />
						<span className="font-semibold text-black">
							<u>{highlightedText}</u>
						</span>
					</p>
					<button className="text-xs bg-[#00F5A3] py-3 px-6  text-black mb-12 hover:bg-[#89fbcb] transition-colors">{ctxButton}</button>
				</div>

				<div className="md:w-2/3">
					<div className="grid grid-cols-1 md:grid-cols-2">
						{cards?.map((card: any) => (
							<StatItem key={card.id} title={card.description} value={card.value} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ERPSolutions;
