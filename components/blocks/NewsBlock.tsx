import RichText from "@/app/_components/RichText";
import React from "react";

const NewsBlock = ({ title, author, content }: any) => {
	console.log({ title, author, content });
	return (
		<div className="p-3 lg:p-12">
			<h1 className="text-4xl font-bold">{title}</h1>
			<p className="text-gray-500 text-sm font-semibold">{author}</p>
			<div className="">
				<RichText content={content} />
			</div>
		</div>
	);
};

export default NewsBlock;
