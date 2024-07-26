import React from "react";
import Image from "next/image";
import axios from "axios";

import { CMSLink } from "../CMSLink";
import { Button } from "@/components/ui/button";

export async function Header() {
	const response = await axios.get(`${process.env.NEXT_PUBLIC_PAYLOAD_URL}/api/globals/main-menu`);
	const mainMenu = response.data;
	const tabs = mainMenu.tabs;
	const logo = tabs[0].logo?.url;
	const ctxButtonLabel = tabs[0].ctxButton;

	const { navItems } = tabs[0];

	const hasNavItems = navItems && Array.isArray(navItems) && navItems.length > 0;

	return (
		<nav className="bg-white shadow-md">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between h-16">
					<div className="flex-shrink-0 flex items-center">
						<Image src={process.env.NEXT_PUBLIC_PAYLOAD_URL + logo} alt="Faircode" width={255} height={65} className="p-10" />
					</div>
					{hasNavItems && (
						<div className="hidden lg:ml-6 sm:ml-3 md:flex lg:space-x-8 sm:space-x-2">
							{navItems.map((item, i) => {
								const { link } = item.defaultLink;
								return <CMSLink key={i} {...link} className="inline-flex items-center px-1 pt-1 text-sm font-medium" />;
							})}
						</div>
					)}
					<div className="hidden lg:ml-6 sm:ml-2 md:flex sm:items-center">
						<Button variant="outline" className="rounded-none border border-gray-300 text-xs">
							{ctxButtonLabel}
						</Button>
					</div>
				</div>
			</div>
		</nav>
	);
}

export default Header;
