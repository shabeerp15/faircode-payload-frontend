import { Separator } from "@/components/ui/separator";
import React from "react";

function ServicesBlock({ title, description, services }: any) {
	return (
		<div className="bg-[#1E1D1D] text-white">
			<div className="lg:max-w-screen-lg mx-auto px-4 py-20">
				<div className="">
					<h1 className="text-4xl font-bold mb-4 md:w-1/2">{title}</h1>
					<p className="mb-12 text-[#C1C1C1] text-xs">{description}</p>
				</div>

				<div className="">
					<Separator className="bg-[#2D2C2B]" />
					{services.map((service: any, index: any) => (
						<React.Fragment key={service.id}>
							<div className="w-full flex items-center justify-between py-8 px-5">
								<div className="w-1/6">
									<span className="text-sm">{index < 9 ? `0${index + 1}` : index + 1}</span>
								</div>
								<div className="w-2/6">
									<h2 className="text-2xl">
										{service.title}
										{service.badge && <span className="bg-[#00F5A3] text-black text-xs font-medium ml-2 px-2.5 py-0.5 rounded-full">{service.badge}</span>}
									</h2>
								</div>
								<div className="w-3/6">
									<p className="text-[#727272] text-sm">{service.description}</p>
								</div>
							</div>
							<Separator className="bg-[#2D2C2B]" />
						</React.Fragment>
					))}
				</div>

				<div className="text-center mt-16">
					<p className="text-white text-xs ">
						Save your precious time and effort spent for finding a solution.{" "}
						<a href="#" className="text-green-500">
							Contact us now
						</a>
					</p>
				</div>
			</div>
		</div>
	);
}

export default ServicesBlock;
