import { ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { useMemo } from 'react';

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
	const link = useMemo(() => {
		const guideSection = sections.includes(section) ? section : sections[0];
		return `${baseURL}/${guideSection}/${branch}${path ? `/${path}` : ''}`;
	}, [section, branch, path]);

	const linkText = useMemo(() => {
		if (path) {
			const regex = pathRegex.exec(path);
			if (regex?.groups) {
				const { file, type: itemType, symbol } = regex.groups;
				const brackets = itemType === 'Function' || type === 'method' ? '()' : '';
				if (!symbol) return `${file}${brackets}`;
				return `${file}#${symbol}${brackets}`;
			}
		} else {
			return `${section === 'discord.js' ? '' : '@discordjs/'}${section}`;
		}

		return null;
	}, [path, section, type]);

	return (
		<Link className="inline-flex items-center gap-1" href={link} rel="external noreferrer noopener" target="_blank">
			{children ?? <code>{linkText ?? ''}</code>}
			<ExternalLink className="opacity-60" size={14} />
		</Link>
	);
}
