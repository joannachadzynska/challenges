import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { fonts } from '../../../../../styles/globalStyles';

type HeaderProps = {
	launchSuccess: boolean | undefined;
};

export const CardContainer = styled.div`
	background: linear-gradient(#000, #00395c);
	border-radius: 0 0 10px 10px;
	font-family: ${fonts.montserrat};
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	button {
		align-self: center;
		margin-bottom: 2em;
	}
`;

// header

export const CardHeader = styled.div<HeaderProps>`
	background-color: #002235;
	color: ${(props) => (props.launchSuccess ? 'green' : 'red')};
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

// image

export const CardImageWrapper = styled.div<HeaderProps>`
	border-top: 1px solid ${(props) => (props.launchSuccess ? 'green' : 'red')};
	margin: 0 auto;
	padding-top: 1.5em;
	width: 100%;
`;

export const CardImg = styled.img`
	margin: 0 auto;
	display: block;
	max-width: 100%;
	width: 50%;
`;

// content
export const CardContentContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	padding: 0 2em;
`;

export const MissionTitleLink = styled(Link)`
	color: #f6c744;
	font-size: 1.5rem;
	padding-bottom: 0.25em;
	padding-top: 0.75em;
`;

export const MissionLaunchDate = styled.p`
	font-size: 0.875rem;
	opacity: 0.7;
`;

export const MissionLaunchDescription = styled.div`
	height: 100px;
	max-width: 400px;
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
