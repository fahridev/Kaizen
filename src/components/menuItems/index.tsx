import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components';

export const MenuItems = ({item}) => {
  const imageControl = item.item.IconUrl
    ? {uri: item.item.IconUrl}
    : require('../../../assets/images/SearchImg.png');
  return (
    <MenuItem>
      <MenuImage source={imageControl} resizeMode="cover" />
      <Text>{item.item.Name}</Text>
    </MenuItem>
  );
};

export const MenuItem = styled.TouchableOpacity`
  height: 36px;
  border-radius: 8px;
  border-width: 1.5px;
  padding: 0 6px 0 6px;
  border-color: #eceeef;
  margin-right: 5px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const MenuImage = styled.Image`
  width: 24px;
  height: 24px;
  margin-right: 8px;
`;
