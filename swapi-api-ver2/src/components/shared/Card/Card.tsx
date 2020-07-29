import React from 'react';
import { default as bemCssModules } from 'bem-css-modules';
import { default as CardStyles } from './Card.module.scss';

export interface CardProps {
	src?: string;
	alt?: string;
	name: string;
}

const style = bemCssModules(CardStyles);

const Card: React.SFC<CardProps> = ({ src, alt, name }) => {
	return (
		<div className={style()}>
			<div className={style('img')}>
				<img src={src} alt={alt} />
			</div>
			<div className={style('name')}>
				<span>{name}</span>
			</div>
		</div>
	);
};

export default Card;
