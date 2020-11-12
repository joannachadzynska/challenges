import { DataList } from 'components';
import { Rocket } from 'models/rockets/interfaces/Rocket';
import { RocketViewModel } from 'models/rockets/viewModels/RocketViewModel';
import React from 'react';
import { SectionTitle } from 'styles/SectionTitle';

const Stages: React.SFC<Rocket> = (props) => {
	const { firstStage, secondStage } = new RocketViewModel(props);

	return (
		<section>
			<SectionTitle>Stages</SectionTitle>
			<DataList>
				<DataList.Stages>
					<DataList.Group>
						<DataList.Heading>First stage</DataList.Heading>
						<DataList.SubGroup>
							<DataList.Item>
								<DataList.ItemName>Engines</DataList.ItemName>
								<DataList.ItemValue>{firstStage?.engines}</DataList.ItemValue>
							</DataList.Item>
							<DataList.Item>
								<DataList.ItemName>Burn time</DataList.ItemName>
								<DataList.ItemValue>
									{firstStage?.burn_time_sec} sec
								</DataList.ItemValue>
							</DataList.Item>
							<DataList.Item>
								<DataList.ItemName>Fuel amount tons</DataList.ItemName>
								<DataList.ItemValue>
									{firstStage?.fuel_amount_tons}
								</DataList.ItemValue>
							</DataList.Item>
							<DataList.Item>
								<DataList.ItemName>Thrust</DataList.ItemName>
								<DataList.ItemValue>
									{firstStage?.thrust_sea_level.lbf} lbf
								</DataList.ItemValue>
							</DataList.Item>
							<DataList.Item>
								<DataList.ItemName>Reusable</DataList.ItemName>
								<DataList.ItemValue>
									{firstStage?.reusable ? 'Yes' : 'No'}
								</DataList.ItemValue>
							</DataList.Item>
						</DataList.SubGroup>
					</DataList.Group>

					<DataList.Group>
						<DataList.Heading>Second stage</DataList.Heading>

						<DataList.SubGroup>
							<DataList.Item>
								<DataList.ItemName>Engines</DataList.ItemName>
								<DataList.ItemValue>{secondStage?.engines}</DataList.ItemValue>
							</DataList.Item>
							<DataList.Item>
								<DataList.ItemName>Burn time</DataList.ItemName>
								<DataList.ItemValue>
									{secondStage?.burn_time_sec} sec
								</DataList.ItemValue>
							</DataList.Item>
							<DataList.Item>
								<DataList.ItemName>Fuel amount tons</DataList.ItemName>
								<DataList.ItemValue>
									{secondStage?.fuel_amount_tons}
								</DataList.ItemValue>
							</DataList.Item>
							<DataList.Item>
								<DataList.ItemName>Thrust</DataList.ItemName>
								<DataList.ItemValue>
									{secondStage?.thrust.lbf} lbf
								</DataList.ItemValue>
							</DataList.Item>
							<DataList.Item>
								<DataList.ItemName>Reusable</DataList.ItemName>
								<DataList.ItemValue>No</DataList.ItemValue>
							</DataList.Item>
							<DataList.Item>
								<DataList.ItemName>Payloads option</DataList.ItemName>
								<DataList.ItemValue>
									{secondStage?.payloads.option_1}
								</DataList.ItemValue>
							</DataList.Item>
						</DataList.SubGroup>
					</DataList.Group>
				</DataList.Stages>
			</DataList>
		</section>
	);
};

export default Stages;
