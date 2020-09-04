import styled from 'styled-components';
import { mediaQueries } from '../../../../themes/mediaTemplates';

export const MissionImagesContainer = styled.ul`
	display: grid;
	grid-gap: 1em;
	grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
	margin: 0;
	padding: 0;
	width: 100%;

	${mediaQueries('md')`
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    `};
`;

export const MissionImage = styled.li`
	position: relative;
	padding-top: 66%;

	img {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		height: 100%;
		max-width: 100%;
		object-fit: cover;
	}
`;

export const MissionLinksContainer = styled.ul`
	margin: 3em 0 0;

	li {
		margin: 0;
		padding-left: 0;
	}

	li *:last-child {
		margin-bottom: 0;
	}

	a {
		background-color: transparent;
		color: ${({ theme }) => theme.colors.white};
		display: flex;
		-webkit-box-pack: start;
		justify-content: flex-start;
		-webkit-box-align: center;
		align-items: center;
		font-size: 1.25rem;
		flex-flow: row wrap;
		padding: 1rem 0px;
		border-top: 1px solid rgb(34, 34, 34);
		transition: all 300ms ease 0s;

		svg {
			font-size: 2.5rem;
			fill: ${({ theme }) => theme.colors.yellow.light};
			transition: all 300ms ease 0s;
			flex: 1 1 25%;
		}

		span {
			flex: 1 1 75%;
		}
	}

	${mediaQueries('md')`
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    flex-flow: row wrap;

       li {
        display: block;
        text-align: center;
        flex: 1 0 auto;
        border-style: none solid none none;
        border-top: none;
        border-right: 1px solid rgb(34, 34, 34);
        margin: 0;

        a {
            display: block;
            border-width: initial;
            border-style: none;
            border-color: initial;
            border-image: initial;

            svg {
                display: block;
                margin: 0px auto 10px;
                }
            }
       }
    `};
`;
