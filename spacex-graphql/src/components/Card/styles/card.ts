import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import { fonts } from 'styles/globalStyles';

type HeaderProps = {
	launchSuccess: boolean | undefined | null;
};

export interface ContentProps {
	direction?: 'cols' | 'rows';
}

export const Group = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
	grid-gap: 2em;
	margin-top: 2em;
`;

export const Container = styled.div`
	background: linear-gradient(#000, #00395c);
	border-radius: 0 0 10px 10px;
	font-family: ${fonts.montserrat};
	display: grid;
	grid-template-rows: auto 1fr;
	height: 100%;
`;

export const ImageContainer = styled.div`
	width: 100%;
	height: auto;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Image = styled.img`
	margin: 0 auto;
	max-width: 100%;
	display: block;
	width: 50%;
`;

export const DetailsContainer = styled.div`
	border-radius: 0 0 10px 10px;
	font-family: ${fonts.montserrat};
	display: grid;
	grid-template-rows: auto 1fr auto;

	${ImageContainer} {
		margin: 3em 0;
	}

	@media (min-width: 768px) {
		grid-template-columns: auto 2fr 1fr;
	}
`;

export const Header = styled.div<HeaderProps>`
	background-color: ${({ theme }) => theme.colors.blue.veryDark};
	border-bottom: 1px solid
		${(props) =>
			props.launchSuccess !== null
				? props.launchSuccess
					? props.theme.colors.green.dark
					: props.theme.colors.red
				: props.theme.colors.blue.primary};
	color: ${(props) =>
		props.launchSuccess !== null
			? props.launchSuccess
				? props.theme.colors.green.dark
				: props.theme.colors.red
			: props.theme.colors.blue.primary};
	display: flex;
	align-items: center;
	justify-content: space-between;
	font-size: 1.125rem;
	padding: 0.6em 1em;

	span:first-child {
		display: flex;
	}

	span > span {
		margin-left: 0.75em;
	}
`;

export const Button = styled(Link)`
	background-color: transparent;
	border-radius: 5px;
	border: 2px solid;
	color: ${({ theme }) => theme.colors.yellow.light};
	border-color: ${({ theme }) => theme.colors.yellow.light};
	font-size: clamp(0.875rem, 5vw, 1.25rem);
	font-weight: 600;
	margin: 0 auto;
	padding: 0.875em 1.5em;
	text-transform: uppercase;
	transition: 0.4s all cubic-bezier(0.45, 0.05, 0.55, 0.95);

	&:hover,
	&:focus {
		border-color: transparent;
		color: ${({ theme }) => theme.colors.blue.veryDark};
		background-color: ${({ theme }) => theme.colors.yellow.light};
	}
`;

export const Content = styled.div<ContentProps>`
	display: grid;
	grid-template-rows: auto auto 1fr auto;
	padding: 0 2em 2em 2em;
	/* ${({ direction }) =>
		direction === 'cols'
			? `grid-template-cols: auto auto 1fr auto`
			: `grid-template-rows: auto auto 1fr auto`} */
`;

export const TitleLink = styled(Link)`
	color: #f6c744;
	font-size: clamp(1.25rem, 5vw, 1.5rem);
	padding-bottom: 0.25em;
	padding-top: 0.75em;
`;

export const Date = styled.p`
	font-size: 0.875rem;
	opacity: 0.7;
`;

export const Description = styled.div`
	height: 100px;
	max-width: auto;
	margin: 1em 0;

	p {
		color: #fff;
		display: block;
		display: -webkit-box;
		font-size: 1rem;
		line-height: 1.4;
		margin: 0 auto;
		overflow: hidden;
		text-overflow: ellipsis;
		text-align: justify;
		-webkit-line-clamp: 4;
		-webkit-box-orient: vertical;
	}
`;

export const FullDescription = styled.p`
	color: #fff;
	font-size: 1rem;
	line-height: 1.6;
	justify-self: center;
	text-align: justify;
	max-width: clamp(45ch, 50%, 75ch);
`;

export const Break = styled.div`
	margin-bottom: 2em;
`;

export const LaunchContainer = styled.ul`
	list-style-type: none;
	margin: 0;
	padding: 2em;
	border-top: 1px dotted rgb(255, 255, 255);

	@media (min-width: 768px) {
		align-self: center;
		border-top: none;
		border-left: 1px dotted rgb(255, 255, 255);
		padding: 0;
		padding-left: 1em;
	}
`;

export const LaunchItem = styled.li`
	font-size: 0.938rem;
	opacity: 0.9;
	margin-bottom: calc(1.666em / 2);
	padding-left: 0;

	*:last-child {
		margin-bottom: 0;
	}

	span:last-of-type {
		color: ${({ theme }) => theme.colors.yellow.light};
		margin-left: 1em;
	}
`;
