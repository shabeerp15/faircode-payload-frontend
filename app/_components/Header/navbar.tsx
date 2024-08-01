"use client";
import React from "react";
import { CMSLink } from "../CMSLink";

const Navbar = ({ navItems }: any = {}) => {
	const [activeTab, setActiveTab] = React.useState("home");

	const handleTabClick = (tab: string) => {
		setActiveTab(tab);
	};

	return (
		<div className="hidden lg:ml-6 sm:ml-3 md:flex lg:space-x-8 sm:space-x-2">
			{navItems.map((item: any, i: number) => {
				const { link } = item.defaultLink;
				return (
					<span
						key={i}
						onClick={() => handleTabClick(link?.label?.toLowerCase())}
						className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${activeTab === link?.label?.toLowerCase() ? "text-green-500" : ""}`}
					>
						<CMSLink {...link} />
					</span>
				);
			})}
		</div>
	);
};

export default Navbar;
