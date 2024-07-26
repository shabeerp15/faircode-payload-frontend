import React, { useState } from "react";

const NewsletterSubscription = ({ highlightedText, placeholderText, ctxButton }: any = {}) => {
	const [email, setEmail] = useState("");

	const handleSubmit = (e: any) => {
		e.preventDefault();
		// Handle subscription logic here
		// console.log("Subscribed with email:", email);
		setEmail("");
	};

	return (
		<div className="relative w-full h-64 bg-black flex items-center justify-center overflow-hidden">
			<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
				<span className="text-white text-[80px] sm:text-[120px] font-bold opacity-10">{highlightedText}</span>
			</div>
			<form onSubmit={handleSubmit} className="w-full max-w-4xl px-4 z-10">
				<div className="flex items-center border-b border-[#43B5E2] py-2">
					<input
						type="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						placeholder={placeholderText}
						className="appearance-none bg-transparent border-none w-full text-gray-400 mr-3 py-1 px-2 leading-tight focus:outline-none placeholder-gray-500"
						required
					/>
					<button type="submit" className="flex-shrink-0 bg-transparent text-sm text-white py-1 px-2 rounded">
						{ctxButton}
					</button>
				</div>
			</form>
		</div>
	);
};

export default NewsletterSubscription;
