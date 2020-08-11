import styled, { keyframes } from 'styled-components';

const infiniteSpinning = keyframes`    
    from {
        transform:rotate(0deg);
    }
    to {
        transform:rotate(360deg);
    }
`;

export const Moon = styled.div`
	background: #c7cbd0;
	border-radius: 50%;
	box-shadow: inset -25px 0px 0 0px #9098a1;
	width: 200px;
	height: 200px;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	transition: transform 0.2s ease-in-out;

	&:hover {
		transform: scale(1.2);
	}
`;

export const Loader = styled.img`
	position: absolute;
	width: 30px;
	height: 20px;
	animation: ${infiniteSpinning} 4s infinite;
	animation-timing-function: linear;
	transform-origin: 335% 500%;
`;

export const Craters = styled.ul`
	li {
		position: absolute;
		list-style: none;
		background: #737277;
		border-radius: 50%;

		&:nth-of-type(1) {
			left: 25px;
			top: 60px;
			width: 50px;
			height: 50px;
			box-shadow: inset 6px -2px 0 0px #414043;
		}

		&:nth-of-type(2) {
			left: 150px;
			top: 50px;
			width: 25px;
			height: 25px;
			box-shadow: inset 3px -1px 0 0px #414043;
		}

		&:nth-of-type(3) {
			left: 100px;
			top: 150px;
			width: 25px;
			height: 25px;
			box-shadow: inset 3px -1px 0 0px #414043;
		}

		&:nth-of-type(4) {
			left: 50px;
			top: 150px;
			width: 12.5px;
			height: 12.5px;
			box-shadow: inset 2.4px -0.8px 0 0px #414043;
		}

		&:nth-of-type(5) {
			left: 87.5px;
			top: 16.66666667px;
			width: 12.5px;
			height: 12.5px;
			box-shadow: inset 2.4px -0.8px 0 0px #414043;
		}

		&:nth-of-type(6) {
			left: 114.28571429px;
			top: 80px;
			width: 12.5px;
			height: 12.5px;
			box-shadow: inset 2.4px -0.8px 0 0px #414043;
		}

		&:nth-of-type(7) {
			left: 181.81818182px;
			top: 100px;
			width: 12.5px;
			height: 12.5px;
			box-shadow: inset 2.4px -0.8px 0 0px #414043;
		}
	}
`;
