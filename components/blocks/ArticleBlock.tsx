import React from "react";
import { ChevronRight } from "lucide-react";
import moment from "moment";

const Article = ({ title, authorName, authorImage, date }: any = {}) => {
	date = moment(date);
	const formattedDate = date.format("MMMM D, YYYY");

	return (
		<div className="card p-4 hover:shadow-md rounded-lg">
			<div className="relative rounded-lg w-[260px] h-[200px]">
				<img src={process.env.NEXT_PUBLIC_PAYLOAD_URL + authorImage} className="rounded-lg w-full h-full object-fill" />
			</div>
			<h1 className="text-xl font-bold mt-3  w-64">{title}</h1>
			<div className="flex items-end">
				<div className="w-12 h-12 mt-8">
					<img src={process.env.NEXT_PUBLIC_PAYLOAD_URL + authorImage} className="rounded-full w-full h-full object-cover" />
				</div>
				<div className="flex flex-col w-[180px] ml-2 ">
					<h1>{authorName}</h1>
					<div className="flex justify-between text-sm text-gray-400 ">
						{/* <p>July 24, 2022</p> */}
						<p>{formattedDate}</p>
						<p>5 min read</p>
					</div>
				</div>
			</div>
		</div>
	);
};

const ArticleBlock = ({ title, ctxButton, articles }: any = {}) => {
	return (
		<div className="lg:max-w-screen-lg mx-auto my-8">
			<div className="flex justify-between">
				<h1 className="text-4xl font-bold">{title}</h1>
				<button className="text-sm font-semibold py-3 px-6 text-black hover:underline mb-2 flex items-center gap-2">
					{ctxButton}
					<ChevronRight />
				</button>
			</div>
			<div className="flex gap-2">
				{/* <Article /> */}
				{articles?.map((article: any, index: number) => (
					<Article key={index} title={article?.title} authorName={article?.author?.name} authorImage={article?.author?.image?.url} date={article?.author?.date} />
				))}
			</div>
		</div>
	);
};

export default ArticleBlock;
