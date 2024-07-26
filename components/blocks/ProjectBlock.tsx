"use client";

import { useState } from "react";

export function CategoryFilter({ categories, activeCategory, setActiveCategory }: any) {
	return (
		<div className="flex flex-wrap gap-4 sm:gap-8 mb-8">
			{categories.map((category: any) => (
				<button
					key={category}
					onClick={() => setActiveCategory(category)}
					className={`px-2 py-1 text-sm ${activeCategory === category ? "border-b-2 text-black border-black" : "text-gray-500 hover:text-gray-700"} transition-colors duration-300`}
				>
					{category}
				</button>
			))}
		</div>
	);
}

export function ProjectCard({ project }: any) {
	const handleClick = () => {
		window.open(`https://${project.url}`, "_blank");
	};
	return (
		<div className="group relative overflow-hidden rounded-lg">
			<img src={process.env.NEXT_PUBLIC_PAYLOAD_URL + project.image.url} alt={project.title} className="w-full h-full object-cover transition-all duration-300 ease-in-out group-hover:blur-sm" />
			<button
				className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-white text-black rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
				onClick={handleClick}
			>
				View Project
			</button>
		</div>
	);
}

export default function ProjectBlock({ projects, categories }: any) {
	projects = projects?.map((project: any) => project.Project);
	categories = categories?.map((category: any) => category?.name);
	const categoryList = categories?.length > 1 ? ["All", ...categories] : categories;

	const [activeCategory, setActiveCategory] = useState("All");

	const filteredProjects = activeCategory === "All" ? projects : projects.filter((project: any) => project.category?.name === activeCategory);

	return (
		<div className="lg:max-w-screen-lg mx-auto px-4 py-8">
			<div className="flex justify-between flex-col sm:flex-row">
				<h2 className="text-4xl font-bold mb-6">Our Projects</h2>
				<CategoryFilter categories={categoryList} activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{filteredProjects.map((project: any) => (
					<ProjectCard key={project.id} project={project} />
				))}
			</div>
		</div>
	);
}
