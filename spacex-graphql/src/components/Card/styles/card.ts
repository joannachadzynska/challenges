import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import { fonts } from 'styles/globalStyles';

type HeaderProps = {
	launchSuccess: boolean | undefined | null;
};

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
	grid-template-rows: auto 1fr 1fr;
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

export const Button = styled.button``;

export const ImageContainer = styled.div`
	margin: 0 auto;
	padding-top: 1.5rem;
	width: 100%;
`;

export const Image = styled.img`
	margin: 0 auto;
	max-width: 100%;
	display: block;
	width: 50%;
`;

export const Content = styled.div`
	display: grid;
	grid-template-rows: auto auto 1fr auto;
	padding: 0 2em 2em 2em;
`;

export const TitleLink = styled(Link)`
	color: #f6c744;
	font-size: 1.25rem;
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
