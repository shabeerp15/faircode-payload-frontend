import type { Page } from "../../payload-types";
import axios from "axios";

export const fetchPage = async (slug: string): Promise<Page | undefined | null> => {
	const pageRes: {
		docs: Page[];
	} = await fetch(`${process.env.NEXT_PUBLIC_PAYLOAD_URL}/api/pages?where[slug][equals]=${slug}`, {
		method: "GET",
		cache: "no-store",
	}).then((res) => {
		return res.json();
	});

	return pageRes?.docs?.[0] ?? null;
};
