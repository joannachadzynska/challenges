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
	min-height: 600px;
`;

// header

export const CardHeader = styled.div<HeaderProps>`
	background-color: #002235;
	border-radius: 10px 10px 0 0;
	border-bottom: 1px solid ${(props) => (props.launchSuccess ? 'green' : 'red')};
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

export const CardImageWrapper = styled.div`
	margin: 1em auto;
	max-width: 300px;
	width: 80%;
`;

export const CardImg = styled.img`
	margin: 0 auto;
	display: block;
	/* object-fit: cover; */
	max-width: 100%;
`;

// content
export const CardContentContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	padding: 2em;
`;

export const MissionTitleLink = styled(Link)`
	color: #f6c744;
	font-size: 1.5rem;
`;

export const MissionLaunchDate = styled.p`
	font-size: 0.875rem;
	opacity: 0.7;
`;

export const MissionLaunchDescription = styled.div`
	overflow: hidden;
	max-width: 400px;
	height: 100px;
	p {
		color: #fff;
		display: block;
		display: -webkit-box;
		line-height: 1.4;
		margin: 0 auto;
		font-size: 1rem;
		-webkit-line-clamp: 4;
		-webkit-box-orient: vertical;
		overflow: hidden;
		text-overflow: ellipsis;
		text-align: justify;
	}
`;
