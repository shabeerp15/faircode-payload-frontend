import React, { Fragment } from "react";
import escapeHTML from "escape-html";


type Text = {
	text: string;
	bold?: boolean;
	code?: boolean;
	italic?: boolean;
	underline?: boolean;
	strikethrough?: boolean;
};

type Leaf = {
	type: string;
	value?: {
		url: string;
		alt: string;
	};
	children: Children;
	url?: string;
	[key: string]: unknown;
} & Text;

type Children = Leaf[];

const isTextNode = (node: any): node is Text => {
	return typeof node.text === "string";
};

const serialize = (children: Children): React.ReactNode[] =>
	children.map((node: any, i) => {
		if (isTextNode(node)) {
			return (
				<span key={i} className={`text-black ${node.bold && "font-bold"} ${node.italic && "italic"} ${node.underline && "underline"} ${node.strikethrough && "line-through"}`}>
					{node.code ? <code className="font-mono bg-gray-200 p-1 rounded">{node.text}</code> : node.text}
				</span>
			);
		}

		if (!node) {
			return null;
		}

		switch (node.type) {
			case "h1":
				return (
					<h1 key={i} className="text-8xl  my-4">
						{serialize(node.children)}
					</h1>
				);
			case "h2":
				return (
					<h2 key={i} className="text-6xl  my-4">
						{serialize(node.children)}
					</h2>
				);
			case "h3":
				return (
					<h3 key={i} className="text-5xl  my-4">
						{serialize(node.children)}
					</h3>
				);
			case "h4":
				return (
					<h4 key={i} className="text-3xl  my-4">
						{serialize(node.children)}
					</h4>
				);
			case "h5":
				return (
					<h5 key={i} className="text-2xl  my-4">
						{serialize(node.children)}
					</h5>
				);
			case "h6":
				return (
					<h6 key={i} className="text-xl  my-4">
						{serialize(node.children)}
					</h6>
				);
			case "blockquote":
				return (
					<blockquote key={i} className="border-l-4 border-gray-400 pl-4 italic my-4">
						{serialize(node.children)}
					</blockquote>
				);
			case "ul":
				return (
					<ul key={i} className="list-disc list-inside my-4">
						{serialize(node.children)}
					</ul>
				);
			case "ol":
				return (
					<ol key={i} className="list-decimal list-inside my-4">
						{serialize(node.children)}
					</ol>
				);
			case "li":
				return (
					<li key={i} className="my-1">
						{serialize(node.children)}
					</li>
				);
			case "link":
				return (
					<a href={escapeHTML(node.url)} key={i} className="text-blue-600 underline">
						{serialize(node.children)}
					</a>
				);

			default:
				return (
					<p key={i} className="my-4">
						{serialize(node.children)}
					</p>
				);
		}
	});

export default serialize;
