import styled from 'styled-components/macro';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	max-width: 1100px;
	margin: auto;
	width: 100%;

	@media (max-width: 1000px) {
		flex-direction: column;
	}
`;

export const Title = styled.h1`
	font-size: 3.125rem;
	line-height: 1.1;
	margin-bottom: 8px;

	@media (max-width: 600px) {
		font-size: 2.187rem;
	}
`;

export const SubTitle = styled.h2`
	font-size: 1.625rem;
	font-weight: normal;
	line-height: normal;

	@media (max-width: 600px) {
		font-size: 1.125rem;
	}
`;

export const Button = styled.button``;
export const CountdownContainer = styled.div``;
export const Countdown = styled.div``;
export const CountdownTime = styled.div``;
export const CountdownName = styled.span``;
export const Image = styled.img`
	height: auto;
	max-width: 100%;
`;
