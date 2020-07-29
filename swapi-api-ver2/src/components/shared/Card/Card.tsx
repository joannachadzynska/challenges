import React from 'react';
import { default as bemCssModules } from 'bem-css-modules';
import { default as CardStyles } from './Card.module.scss';

export interface CardProps {
	src?: string;
	alt?: string;
	name: string;
	details?: string;
	subtitle?: string;
}

const style = bemCssModules(CardStyles);

const Card: React.SFC<CardProps> = ({ src, alt, name, details, subtitle }) => {
	const randomColor = () => Math.floor(Math.random() * 16777215).toString(16);

	return (
		<div className={style()}>
			{/* <img src={src} alt={alt} /> */}
			<img
				src='https://cdn.pixabay.com/photo/2013/07/12/13/25/darth-vader-147014_960_720.png'
				className={style('image')}
			/>
			<div className={style('content')}>
				<p>{name}</p>

				{details && (
					<p>
						{subtitle}: {details}
					</p>
				)}
			</div>
			<div className={style('info')}>
				<div>333</div>
				<div>
					<button className={style('link')}>see more</button>
				</div>
			</div>
		</div>
	);
};

export default Card;
