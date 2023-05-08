import React from 'react';
import {View, Text, Dimensions, ScrollView, SafeAreaView} from 'react-native';
import {useQuery} from '@tanstack/react-query';
import RenderHtml from 'react-native-render-html';

import styled from 'styled-components';
import {useNavigation} from '@react-navigation/native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';

import {AllServices} from '../../services';
export const PromotionDetail = props => {
  const navigation = useNavigation();
  const id = props.route.params;
  const windowWidth = Dimensions.get('window').width;
  
  const {data: promotionsItem} = useQuery(['getProductById'], () =>
    AllServices.getPromotionsById(id),
  );

  const goBack = () => {
    navigation.goBack();
  };
  const title = {
    html: promotionsItem?.Title,
  };
  const description = {
    html: promotionsItem?.Description,
  };
  return (
    <View style={{flex: 1}}>
      <ScrollView style={{backgroundColor: '#fff', flex: 1}}>
        <SafeAreaView />
        <DetailHeader onPress={goBack}>
          <FontAwesomeIcon icon={faArrowLeft} size={20} color="#fff" />
        </DetailHeader>
        <DetailContentImageContainer>
          <DetailContentImage
            style={{width: windowWidth}}
            source={{uri: promotionsItem?.ImageUrl}}
          />
          <DetailReaminText>{promotionsItem?.RemainingText}</DetailReaminText>
          <DetailBrandImage source={{uri: promotionsItem?.BrandIconUrl}} />
        </DetailContentImageContainer>
        <RenderHtml
          contentWidth={windowWidth}
          source={title}
          baseStyle={{fontSize: 26, fontWeight: '700', marginLeft: 15}}
        />
        <DetailDescription>
          <RenderHtml contentWidth={windowWidth} source={description} />
        </DetailDescription>
      </ScrollView>
      <ButtonContainer>
        <DetailBtn>{promotionsItem?.DetailButtonText}</DetailBtn>
      </ButtonContainer>
    </View>
  );
};
export const DetailContentImageContainer = styled.View`
  position: relative;
`;
export const DetailContentImage = styled.Image`
  height: 305px;
  border-bottom-left-radius: 100px;
`;
export const DetailReaminText = styled.Text`
  position: absolute;
  bottom: 2px;
  right: 10px;
  background-color: #1d1e1c;
  color: #fff;
  border-radius: 12px;
  z-index: 3;
  padding: 4px 10px;
  overflow: hidden;
`;
export const DetailBrandImage = styled.Image`
  width: 55px;
  height: 55px;
  border: 5px solid #fff;
  border-radius: 55px;
  position: absolute;
  bottom: 0;
  left: 0;
`;
export const ButtonContainer = styled.View`
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  width: 100%;
`;
export const DetailBtn = styled.Text`
  width: 345px;
  height: 56px;
  line-height: 56px;
  border-radius: 28px;
  z-index: 5;
  text-align: center;
  background-color: #f40000;
  color: #fff;
  margin-bottom: 20px;
  overflow: hidden;
  justify-content: center;
  align-items: center;
`;

export const DetailHeader = styled.TouchableOpacity`
  position: absolute;
  top: 55px;
  left: 15px;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: #1d1e1c;
  z-index: 3;
  align-items: center;
  justify-content: center;
`;
export const DetailDescription = styled.Text`
  font-size: 14px;
  color: #1d1e1c;
  padding: 0 15px;
  margin-left: 15px;
`;
