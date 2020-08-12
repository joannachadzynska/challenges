import React from 'react';
import { RocketViewModel } from '../../../models/RocketViewModel';

type RocketDescriptionProps = Pick<RocketViewModel, 'description'>;

const RocketDescription: React.SFC<RocketDescriptionProps> = ({
	description,
}) => <p>{description}</p>;
export default RocketDescription;
