import React from "react";
import axios from "axios";
import { CMSLink } from "../CMSLink";

const Footer = async () => {
	const response = await axios.get(`${process.env.NEXT_PUBLIC_PAYLOAD_URL}/api/globals/footer`);
	const data = response?.data;

	return (
		<footer className="bg-white pt-12 px-4 sm:px-6 lg:px-8">
			<div className="max-w-screen-lg mx-auto">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
					{/* Logo */}
					<div className="col-span-1">
						<img src={process.env.NEXT_PUBLIC_PAYLOAD_URL + data?.logo?.url} alt="Faircode" className="h-8 w-auto" />
					</div>

					{/* Address */}
					<div className="col-span-1">
						{data &&
							data?.address[0]?.children?.map((item: any, index: any) => (
								<p key={index} className={`text-sm text-gray-600 ${item.bold && "font-bold"} ${item.italic && "italic"} ${item.underline && "underline"} `}>
									{item.text}
								</p>
							))}
					</div>

					{/* Work Inquiries */}
					<div className="col-span-1">
						{/* <div className="mb-8 border-b pb-2 bg-red-400">
							<h3 className="text-sm font-semibold text-gray-900 uppercase mb-2">WORK INQUIRIES</h3>
							<p className="text-sm text-gray-600">Interested in working with us?</p>
							<a href="mailto:hello@faircode.com" className="text-sm text-gray-900 font-semibold hover:underline">
								hello@faircode.com
							</a>
						</div>

						<h3 className="text-sm font-semibold text-gray-900 uppercase mt-4 mb-2">WORK WITH US</h3>
						<p className="text-sm text-gray-600">Looking for a job opportunity?</p>
						<a href="mailto:hr@faircode.com" className="text-sm text-gray-900 font-semibold hover:underline">
							hr@faircode.com
						</a> */}
						{data &&
							data?.contact?.map((item: any, index: any) => (
								<div className="mb-8 border-b pb-2 ">
									<h3 className="text-sm font-semibold text-gray-900 uppercase mt-4 mb-2">{item.title}</h3>
									<p className="text-sm text-gray-600">{item.highlightText}</p>
									<a href={`mailto:${item.email}`} className="text-sm text-gray-900 font-semibold hover:underline">
										{item.email}
									</a>
								</div>
							))}
					</div>

					{/* Newsletter */}
					<div className="col-span-1">
						<h3 className="text-sm font-semibold text-gray-900 mb-2">{data?.newsletter?.title}</h3>
						<form className="mt-2">
							<div className="flex items-center border border-gray-300 p-2">
								<input type="email" placeholder={data?.newsletter?.placeholderText} className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" />
								<button type="submit" className="flex-shrink-0 text-gray-500 hover:text-gray-700">
									<svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
										<path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
									</svg>
								</button>
							</div>
						</form>
						<p className="text-xs text-gray-500 mt-3">{data?.newsletter?.highlightText}</p>
					</div>
				</div>

				{/* Social Links */}
				{/* <div className="mt-8 border-t border-gray-200 pt-8">
					<div className="flex space-x-6">
						<a href="#" className="text-gray-400 hover:text-gray-500">
							Fb.
						</a>
						<a href="#" className="text-gray-400 hover:text-gray-500">
							Ig.
						</a>
						<a href="#" className="text-gray-400 hover:text-gray-500">
							Tw.
						</a>
						<a href="#" className="text-gray-400 hover:text-gray-500">
							Be.
						</a>
					</div>
				</div> */}

				{/* Bottom Bar */}
				<div className=" border-t border-gray-200 py-4 flex flex-wrap justify-between items-center ">
					<p className="text-sm text-gray-500 ">{data?.bottomBar[0]?.copyright}</p>
					<nav className="flex space-x-4 text-sm ">
						{data &&
							data?.bottomBar[0]?.navItems?.map((item: any, index: any) => (
								<CMSLink type={item?.link?.type} url={item?.link?.url} label={item?.link?.label} className="text-gray-500 hover:text-gray-600" key={index} />
							))}
					</nav>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
