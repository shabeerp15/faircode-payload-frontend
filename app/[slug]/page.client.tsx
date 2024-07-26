"use client";

import { useLivePreview } from "@payloadcms/live-preview-react";
import { Page } from "../../payload-types";
import TechExpertBlock from "@/components/blocks/TechExpert";
import LogoBlock from "@/components/blocks/LogoBlock";
import DigitalExcellence from "@/components/blocks/DigitalExcellence";
import StatisticsBlock from "@/components/blocks/StatisticsBlock";
import ServicesBlock from "@/components/blocks/ServicesBlock";
import ProjectBlock from "@/components/blocks/ProjectBlock";
import ERPSolutions from "@/components/blocks/ERPContentBlock";
import NewsletterSubscription from "@/components/blocks/NewsLetter";
import WorkCardBlock from "@/components/blocks/WorkCardBlock";
import FeaturedBlock from "@/components/blocks/FeaturedBlock";
import TestimonialSlider from "@/components/blocks/TestimonialSliderBlock";
import ArticleBlock from "@/components/blocks/ArticleBlock";
import StyledTextBlock from "@/components/blocks/StyledTextBlock";

export const PageTemplate: React.FC<{ page: Page | null | undefined | any }> = ({ page }) => {
	const { data } = useLivePreview({
		serverURL: process.env.NEXT_PUBLIC_PAYLOAD_URL || "",
		// depth: 2,
		initialData: page,
	});

	return (
		<>
			{data.layout.map((block: any, index: any) => {
				// console.log(block.blockType);
				// console.log({ block });
				if (block.blockType === "techExpertBlock") {
					return <TechExpertBlock key={index} title={block.title} subtitle={block.subtitle} description={block.description} ctaText={block.ctaText} ctaLink={block.ctaLink} imageSrc={block.image.url} />;
				}
				if (block.blockType === "logoBlock") {
					return <LogoBlock key={index} title={block.title} logos={block.logos} />;
				}
				// Handle other block types
				if (block.blockType === "digitalExcellenceBlock") {
					return <DigitalExcellence key={index} title={block.title} imageSrc={block.image.url} highlightedText={block.highlightedText} highlightedDescription={block.highlightedDescription} />;
				}
				if (block.blockType === "statisticsBlock") {
					return <StatisticsBlock key={index} stats={block.stats} />;
				}
				if (block.blockType === "servicesBlock") {
					return <ServicesBlock key={index} title={block.title} description={block.caption} services={block.services} />;
				}
				if (block.blockType === "project-list-block") {
					return <ProjectBlock key={index} projects={block.ProjectList} categories={block.categories} />;
				}
				if (block.blockType === "ERPContentBlock") {
					return <ERPSolutions key={index} title={block.title} description={block.description} highlightedText={block.highlightedText} ctxButton={block.ctxButton} cards={block.cards} />;
				}
				if (block.blockType === "newsLetterBlock") {
					return <NewsletterSubscription key={index} highlightedText={block.highlightedText} placeholderText={block.placeholderText} ctxButton={block.ctxButton} />;
				}
				if (block.blockType === "workCardBlock") {
					return <WorkCardBlock key={index} title={block.title} description={block.description} cards={block.cards} />;
				}
				if (block.blockType === "featuredBlock") {
					return <FeaturedBlock key={index} title={block.title} ctxButton={block.ctxButton} posts={block.blocks} />;
				}
				if (block.blockType === "testimonialBlock") {
					return <TestimonialSlider key={index} title={block.title} quotes={block.quotes} />;
				}
				if (block.blockType === "articleBlock") {
					return <ArticleBlock key={index} title={block.title} ctxButton={block.ctxButton} articles={block.articles} />;
				}
				if (block.blockType === "styledTextBlock") {
					return <StyledTextBlock key={index} textItems={block.textItems} />;
				}
			})}
		</>
	);
};
