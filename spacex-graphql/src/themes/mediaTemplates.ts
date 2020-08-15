// import { css } from 'styled-components';

import { css } from 'styled-components';

type Sizes = {
	sm: number;
	md: number;
	lg: number;
	xl: number;
};

export const screenSizes: Sizes = {
	sm: 414,
	md: 768,
	lg: 1024,
	xl: 1366,
};

export const mediaQueries = (key: keyof typeof screenSizes) => {
	return (style: TemplateStringsArray | string) => css`
		@media (min-width: ${screenSizes[key]}px) {
			${style}
		}
	`;
};
