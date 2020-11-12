import styled from 'styled-components/macro';

export const Container = styled.div`
	width: 100%;
`;

export const Group = styled.ul`
	width: 100%;
`;

export const Stages = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	gap: 2em;

	@media (min-width: 768px) {
		grid-template-columns: repeat(2, 1fr);
	}
`;

export const SubGroup = styled.ul`
	width: 100%;
	display: block;
`;

export const Heading = styled.h3`
	font-weight: 500;
	letter-spacing: 1px;
	width: 100%;
	text-transform: uppercase;
	padding-bottom: 0.5rem;
	margin-bottom: 0px;
`;

export const SubHeading = styled.span`
	color: rgb(255, 255, 255);
	display: block;
	line-height: 1;
	padding: 5px 3px;
	background: rgba(246, 199, 68, 0.5);
	border: none;
`;

export const Item = styled.li`
	display: flex;
	align-items: center;
	border-bottom: 1px dotted rgba(255, 255, 255, 0.5);
	justify-content: space-between;
	padding: 0.75rem 0px;
	text-transform: capitalize;
	transition: 0.2s ease-in-out;

	&:hover {
		background-color: #004f80;
	}
`;

export const ItemTitle = styled.h4`
	color: rgb(246, 199, 68);
	font-weight: 500;
	text-transform: uppercase;
	line-height: 1;
	margin: 0px;
`;

export const ItemValue = styled.span`
	font-weight: 500;
`;
