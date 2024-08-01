import React from "react";
import Image from "next/image";
import RichText from "@/app/_components/RichText";
import { motion } from "framer-motion";

const Callout = ({ calloutFields }: any) => {
	const { richText, logo, author, role, images } = calloutFields;

	return (
		<motion.div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-gray-200 p-6 my-6 rounded-lg shadow-lg" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
			<div className="mb-4">
				<RichText content={richText} />
			</div>
			<div className="mb-4 flex items-center">
				<motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
					<Image src={process.env.NEXT_PUBLIC_PAYLOAD_URL + logo.url} alt="Logo" width={200} height={200} className="rounded-full shadow-md" />
				</motion.div>
			</div>
			{(author || role) && (
				<div className="mb-4 text-center">
					<p className="text-2xl font-bold text-gray-800">{author}</p>
					<p className="text-gray-500">{role}</p>
				</div>
			)}
			<div className="flex space-x-4 overflow-x-auto py-4">
				{images.map((img: any, index: any) => (
					<motion.div key={index} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="min-w-[200px] transition-transform duration-200">
						<Image src={process.env.NEXT_PUBLIC_PAYLOAD_URL + img.image.url} alt={`Image ${index + 1}`} width={200} height={200} className="rounded-lg shadow-md" />
					</motion.div>
				))}
			</div>
		</motion.div>
	);
};

export default Callout;
