import type { Page } from "../../payload-types";

export const fetchPages = async (): Promise<Page[]> => {
	const pageRes: {
		docs: Page[];
	} = await fetch(`${process.env.NEXT_PUBLIC_PAYLOAD_URL}/api/pages`).then((res) => res.json()); // eslint-disable-line function-paren-newline

	return pageRes?.docs ?? [];
};
