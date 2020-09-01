import styled from 'styled-components';
import { fonts } from '../../../../../styles/globalStyles';

type HeaderProps = {
	launchSuccess: boolean | undefined;
};

export const CardHeader = styled.div<HeaderProps>`
	background: #002235;
	border-radius: 10px 10px 0 0;
	border-bottom: 1px solid ${(props) => (props.launchSuccess ? 'green' : 'red')};
	color: ${(props) => (props.launchSuccess ? 'green' : 'red')};
	display: flex;
	align-items: center;
	justify-content: space-between;
	font-family: ${fonts.montserrat};
	font-size: 1.125rem;
	padding: 0.6em 1em;

	span:first-child {
		display: flex;
	}

	span > span {
		margin-left: 0.75em;
	}
`;
