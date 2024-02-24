import { css } from "@emotion/react";

export const ResetCSS = css`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, b, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video, button {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

:root {
	--primary-color: #FF0000;
	--secondary-color: #FFC400;
	--tertiary-color: rgba(0, 0, 0, 0.6);

	--text-5xl: 3rem;
	--text-4xl: 2.25rem;
	--text-3xl: 1.875rem;
	--text-2xl: 1.5rem;
	--text-xl: 1.25rem;
	--text-lg: 1.125rem;
	--text-md: 1rem;
	--text-sm: 0.875rem;
	--text-xs: 0.75rem;

	--line-height-5xl: 1;
	--line-height-4xl: 2.5rem;
	--line-height-3xl: 2.25rem;
	--line-height-2xl: 2rem;
	--line-height-xl: 1.75rem;
	--line-height-lg: 1.75rem;
	--line-height-md: 1.5rem;
	--line-height-sm: 1.25rem;
	--line-height-xs: 1rem;

	--rounded-none: 0px;
	--rounded-sm:	0.125rem;
	--rounded: 0.25rem;
	--rounded-md:	0.375rem;
	--rounded-lg:	0.5rem;
	--rounded-xl:	0.75rem;
	--rounded-2xl:	1rem;
	--rounded-3xl: 1.5rem;
	--rounded-full: 9999px;

	--text-title: "Josefin Sans", sans-serif;
	--text-content: "Fira Sans", sans-serif;
	--text-ubuntu: "Ubuntu", sans-serif;
}
`;
