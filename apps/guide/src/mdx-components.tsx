import { Popup, PopupContent, PopupTrigger } from 'fumadocs-twoslash/ui';
import * as TabsComponents from 'fumadocs-ui/components/tabs';
import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';
import { DocsLink } from '@/components/DocsLink';
import { Mermaid } from '@/components/mdx/mermaid';

export function getMDXComponents(components?: MDXComponents): MDXComponents {
	return {
		...defaultMdxComponents,
		DocsLink,
		Popup,
		PopupContent,
		PopupTrigger,
		Mermaid,
		...TabsComponents,
		...components,
	};
}
