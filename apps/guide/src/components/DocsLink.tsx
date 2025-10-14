import Link from 'next/link';

const baseURL = 'https://discord.js.org/docs/packages';
const sections = [
	'discord.js',
	'brokers',
	'builders',
	'collection',
	'core',
	'formatters',
	'proxy',
	'rest',
	'util',
	'voice',
	'ws',
];
const pathRegex = /(?<file>\w+):(?<type>\w+)(?:#(?<symbol>.+))?/i;

interface DocsLinkProps {
	readonly branch?: string;
	readonly children?: React.ReactNode;
	readonly path?: string;
	readonly section?: string;
	readonly type?: 'event' | 'method' | 'property';
}

export function DocsLink({
	children,
	section = 'discord.js',
	branch = 'stable',
	path,
	type = 'property',
}: DocsLinkProps) {
	const guideSection = sections.find((sec) => sec === section) ?? sections[0];
	const link = `${baseURL}/${guideSection}/${branch}${path ? `/${path}` : ''}`;

	let linkText: string | null = null;
	if (path) {
		const regex = pathRegex.exec(path);
		if (regex?.groups) {
			const { file, type: itemType, symbol } = regex.groups;
			const brackets = itemType === 'Function' || type === 'method' ? '()' : '';
			if (symbol) {
				linkText = `${file}#${symbol}${brackets}`;
			} else {
				linkText = `${file}${brackets}`;
			}
		}
	} else {
		linkText = `${section === 'discord.js' ? '' : '@discordjs/'}${section}`;
	}

	return (
		<Link
			className="text-base-blurple-400 hover:text-base-blurple-500 dark:hover:text-base-blurple-300"
			href={link}
			rel="external noreferrer noopener"
			target="_blank"
		>
			{children ?? <code>{linkText ?? ''}</code>}
		</Link>
	);
}
