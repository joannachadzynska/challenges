import React from 'react';
import {
	FaFile,
	FaNewspaper,
	FaRedditAlien,
	FaWikipediaW,
} from 'react-icons/fa';
import { SectionTitle } from '../styles';
import { LaunchViewModel } from '../../../../models/launches/viewModels/LaunchViewModel';
import { MissionLinksContainer } from './styles';

type MissionLinksProps = Pick<LaunchViewModel, 'links'>;

const MissionLinks: React.SFC<MissionLinksProps> = ({ links }) => {
	const linksGroup = [
		{
			id: 'presskit',
			name: 'Presskit',
			link: `${links.presskit}`,
			icon: <FaFile />,
		},
		{
			id: 'article',
			name: 'Article',
			link: `${links.article_link}`,
			icon: <FaNewspaper />,
		},
		{
			id: 'redditCampaign',
			name: 'Reddit Campaign',
			link: `${links.reddit_campaign}`,
			icon: <FaRedditAlien />,
		},
		{
			id: 'redditLaunch',
			name: 'Reddit Launch',
			link: `${links.reddit_launch}`,
			icon: <FaRedditAlien />,
		},
		{
			id: 'redditMedia',
			name: 'Reddit Media',
			link: `${links.reddit_media}`,
			icon: <FaRedditAlien />,
		},
		{
			id: 'redditRecovery',
			name: 'Reddit Recovery',
			link: `${links.reddit_recovery}`,
			icon: <FaRedditAlien />,
		},
		{
			id: 'wikipedia',
			name: 'Wikipedia',
			link: `${links.wikipedia}`,
			icon: <FaWikipediaW />,
		},
	];
	return (
		<section>
			<SectionTitle>Mission links</SectionTitle>
			<MissionLinksContainer>
				{linksGroup.map((link) => (
					<li key={link.id}>
						<a href={link.link} target='_blank' rel='noopener noreferrer'>
							{link.icon}
							<span>{link.name}</span>
						</a>
					</li>
				))}
			</MissionLinksContainer>
		</section>
	);
};

export default MissionLinks;
