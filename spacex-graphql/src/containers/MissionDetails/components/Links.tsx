import { Links } from 'components';
import { Wrapper } from 'components/Header/styles/header';
import { LaunchViewModel } from 'models/launches/viewModels/LaunchViewModel';
import React from 'react';
import {
	FaFile,
	FaNewspaper,
	FaRedditAlien,
	FaWikipediaW,
} from 'react-icons/fa';
import { SectionTitle } from 'styles/SectionTitle';

type LinksProps = Pick<LaunchViewModel, 'links'>;

const LinksContainer: React.SFC<LinksProps> = ({ links }) => {
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
		<Wrapper>
			<section>
				<SectionTitle>mission links</SectionTitle>

				<Links>
					{linksGroup.map((link) => (
						<Links.Item key={link.id}>
							<Links.IconLink href={link.link}>
								{link.icon}
								<Links.Name>{link.name}</Links.Name>
							</Links.IconLink>
						</Links.Item>
					))}
				</Links>
			</section>
		</Wrapper>
	);
};

export default LinksContainer;
