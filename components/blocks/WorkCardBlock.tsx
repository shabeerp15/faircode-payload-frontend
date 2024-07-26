import React from "react";
import { Separator } from "../ui/separator";

export const WorkCard = ({ index, title, description }: any) => {
	return (
		<div className="card min-w-60 w-60 text-[#EEEEEE] font-sans">
			<div className="mb-2 text-[#C1C1C1] text-xs">{`(${index})`}</div>
			<div className="py-6 px-5 bg-[#121212]">
				<h2 className="text-sm font-bold md:mb-8">{title}</h2>
				<Separator className="bg-[#C1C1C1] md:mb-8" />
				<p className="text-xs">{description}</p>
				<div className="flex justify-end mt-3">
					<div className="bg-[#CECBCB] rounded-full w-8 h-8"></div>
				</div>
			</div>
		</div>
	);
};

const WorkCardBlock = ({ title, description, cards }: any = {}) => {
	return (
		<div className="relative w-full bg-black flex items-center justify-center overflow-hidden">
			<div className="lg:max-w-screen-lg mx-auto px-4 py-8">
				<h1 className="text-4xl font-bold mb-5 lg:w-2/3 text-white">{title}</h1>
				<p className="text-[#C1C1C1] text-xs  font-sans leading-5 lg:w-2/3">{description}</p>
				<div className="mt-10 flex gap-6 overflow-x-auto pb-4 w-[calc(100vw-20rem)]">
					{/* <WorkCard index={2} title="Client Brief" description="We formalized communication that outlines the specific goals, requirements, expectations, and constraints of a project." />
					<WorkCard index={3} title="Project Execution" description="We implemented the project in a timely manner, consistently delivering results that exceeded our expectations." />
					<WorkCard index={4} title="Project Implementation" description="We implemented the project in a timely manner, consistently delivering results that exceeded our expectations." />
					<WorkCard index={5} title="Project Delivery" description="We implemented the project in a timely manner, consistently delivering results that exceeded our expectations." /> */}
					{cards?.map((card: any, index: any) => (
						<WorkCard key={card.id} index={index + 1} title={card.title} description={card.description} />
					))}
				</div>
			</div>
		</div>
	);
};

export default WorkCardBlock;
