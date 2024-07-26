import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TestimonialSlider = ({ title, quotes }: any = {}) => {
	const handleSlide = () => {};

	return (
		<div className="bg-black text-white p-8 flex flex-col justify-center">
			<h2 className="text-4xl font-bold text-center mb-12">{title}</h2>
			<div className="relative overflow-hidden">
				<div className={`flex justify-center items-center gap-4 transition-transform duration-300 ease-in-out `}>
					{quotes?.map((quote: any, index: number) => (
						<div key={quote.id} className={`w-80 flex-shrink-0 transition-all duration-300 ${index === 1 ? "scale-110 z-10" : "scale-90 opacity-50"}`}>
							<div className="bg-gray-800 rounded-2xl p-6 relative">
								{index === 1 && (
									<>
										<div className="absolute -top-4 -left-4 w-16 h-16 bg-blue-900 rounded-full"></div>
										<div className="absolute -bottom-4 -right-4 w-16 h-16 bg-red-900 rounded-full"></div>
									</>
								)}
								<div className="text-blue-400 text-4xl mb-4">"</div>
								<p className="mb-6 text-sm font-thin italic">{quote.quote}</p>
								<div className="flex flex-col items-center gap-2">
									<div className="relative p-[1px] bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-full w-16 h-16">
										<img src={process.env.NEXT_PUBLIC_PAYLOAD_URL + quote.image.url} alt={quote.image.alt} className="rounded-full w-full h-full" />
									</div>
									<p className="font-bold text-sm text-white">{quote.author}</p>
									<p className="text-xs text-gray-400">{quote.position}</p>
								</div>
							</div>
						</div>
					))}
				</div>
				<button onClick={() => handleSlide()} className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-transparent">
					<ChevronLeft className="w-6 h-6" />
				</button>
				<button onClick={() => handleSlide()} className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-transparent">
					<ChevronRight className="w-6 h-6" />
				</button>
			</div>
		</div>
	);
};

export default TestimonialSlider;
