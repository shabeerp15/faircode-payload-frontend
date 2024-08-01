import React, { useState, useRef } from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialSlider = ({ title, quotes = [] }: any) => {
	const sliderRef = useRef(null);
	const [currentSlide, setCurrentSlide] = useState(0);

	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		centerMode: true,
		centerPadding: "0px",
		focusOnSelect: true,
		beforeChange: (current: any, next: any) => setCurrentSlide(next),
	};

	return (
		<div className="bg-black text-white p-8 flex flex-col justify-center">
			<h2 className="text-4xl font-bold text-center mb-12">{title}</h2>
			<div className="relative">
				<Slider ref={sliderRef} {...settings}>
					{quotes.map((quote: any, index: number) => (
						<div key={quote.id} className="px-4 py-8">
							<div
								className={`rounded-2xl p-6 relative transition-all duration-300 transform
                ${index === currentSlide ? "bg-gradient-to-br from-blue-600 to-purple-600 scale-110 z-10 shadow-xl" : "bg-gray-800 scale-90 opacity-70"}`}
							>
								<div className={`text-4xl mb-4 ${index === currentSlide ? "text-yellow-300" : "text-blue-400"}`}>"</div>
								<p className={`mb-6 ${index === currentSlide ? "text-base font-normal" : "text-sm font-thin"} italic`}>{quote.quote}</p>
								<div className="flex flex-col items-center gap-2">
									<div
										className={`relative p-[2px] rounded-full w-16 h-16
                    ${index === currentSlide ? "bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500" : "bg-gradient-to-r from-purple-500 via-pink-500 to-red-500"}`}
									>
										<img src={process.env.NEXT_PUBLIC_PAYLOAD_URL + quote.image.url} alt={quote.image.alt} className="rounded-full w-full h-full object-cover" />
									</div>
									<p className={`font-bold ${index === currentSlide ? "text-base" : "text-sm"} text-white`}>{quote.author}</p>
									<p className={`${index === currentSlide ? "text-sm text-yellow-200" : "text-xs text-gray-400"}`}>{quote.position}</p>
								</div>
							</div>
						</div>
					))}
				</Slider>
			</div>
		</div>
	);
};

export default TestimonialSlider;
