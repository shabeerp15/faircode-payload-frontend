import React from "react";
import { SmileIcon, TrophyIcon, MegaphoneIcon, BriefcaseIcon } from "lucide-react";
import { type } from "os";
import { Separator } from "@/components/ui/separator";

const iconComponents: any = {
	smile: SmileIcon,
	trophy: TrophyIcon,
	megaphone: MegaphoneIcon,
	briefcase: BriefcaseIcon,
};

interface StatItemProps {
	number: number;
	label: string;
	description: string;
	icon: string;
}

const StatItem = ({ number, label, description, icon }: StatItemProps) => {
	const IconComponent = iconComponents[icon];
	return (
		<div className="flex items-center justify-between px-2 pt-4 space-x-2 relative">
			<div className="w-2/3">
				<p className="text-sm text-[#727272]">
					<span className="font-bold text-black">{number}+</span> {description}
				</p>
			</div>
			{/* <span className="text-2xl">{icon}</span> */}
			<IconComponent className="w-10 h-10 text-gray-600" />
			<Separator className="bg-[#E4E4E4] absolute w-full top-0 right-0" />
		</div>
	);
};

const StatisticsBlock = ({ stats }: any) => {
	return (
		<div className="lg:max-w-screen-lg mx-auto px-4 py-8 mt-8">
			<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
				{stats.map((stat: any, index: number) => (
					<StatItem key={index} {...stat} />
				))}
			</div>
		</div>
	);
};

export default StatisticsBlock;
