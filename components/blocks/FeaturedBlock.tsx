import Link from "next/link";
import React from "react";

const FeaturedBlock = ({ title, ctxButton, posts }: any = {}) => {
	return (
		<div className="max-w-screen-lg mx-auto p-4 my-8">
			<div className="flex justify-between items-center mb-6">
				<h2 className="text-4xl font-bold mb-5 lg:w-2/3">{title}</h2>
				<Link href={ctxButton?.link?.slug} className="text-sm text-gray-600 hover:underline">
					{ctxButton?.label} →
				</Link>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-sans">
				{posts.map((post: any) => (
					<div key={post.id} className="bg-gradient-to-br from-blue-400 to-green-400 p-10 text-black ">
						<span className="inline-block bg-white text-xs font-semibold px-2 py-1 mb-12">{post.title}</span>
						<p className=" text-sm mb-4">{post.author}</p>
						<h3 className="text-lg">{post.description}</h3>
					</div>
				))}
			</div>
		</div>
	);
};

export default FeaturedBlock;
