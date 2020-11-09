import React from 'react';
import {
	Container,
	Group,
	Heading,
	Item,
	ItemTitle,
	ItemValue,
	SubGroup,
	SubHeading,
} from './styles/dataList';

export interface DataListComposition {
	Group: React.FC;
	SubGroup: React.FC;
	Heading: React.FC;
	SubHeading: React.FC;
	Item: React.FC;
	ItemName: React.FC;
	ItemValue: React.FC;
}

const DataList: React.SFC & DataListComposition = ({
	children,
	...restProps
}) => {
	return <Container {...restProps}>{children}</Container>;
};

export const DataListGroup: React.FC = ({ children, ...restProps }) => {
	return <Group {...restProps}>{children}</Group>;
};

export const DataListHeading: React.FC = ({ children, ...restProps }) => {
	return <Heading {...restProps}>{children}</Heading>;
};

export const DataListSubGroup: React.FC = ({ children, ...restProps }) => {
	return <SubGroup {...restProps}>{children}</SubGroup>;
};

export const DataListSubHeading: React.FC = ({ children, ...restProps }) => {
	return <SubHeading {...restProps}>{children}</SubHeading>;
};

export const DataListItem: React.FC = ({ children, ...restProps }) => {
	return <Item {...restProps}>{children}</Item>;
};

export const DataListItemTitle: React.FC = ({ children, ...restProps }) => {
	return <ItemTitle {...restProps}>{children}</ItemTitle>;
};
export const DataListItemValue: React.FC = ({ children, ...restProps }) => {
	return <ItemValue {...restProps}>{children}</ItemValue>;
};

DataList.Group = DataListGroup;
DataList.SubGroup = DataListSubGroup;
DataList.Heading = DataListHeading;
DataList.SubHeading = DataListSubHeading;
DataList.Item = DataListItem;
DataList.ItemName = DataListItemTitle;
DataList.ItemValue = DataListItemValue;

export default DataList;
