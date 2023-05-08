import styled from 'styled-components';
import RenderHtml from 'react-native-render-html';
import {Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export const ProductItems = ({item}) => {
  const windowWidth = Dimensions.get('window').width;
  const navigation = useNavigation();

  const title = {
    html: item?.Title,
  };
  return (
    <ProductItemContainer
      onPress={() => navigation.navigate('PromotionDetail', item.Id)}>
      <ProductContentContainer>
        <ContentImageContainer>
          <ContentImage source={{uri: item?.ImageUrl}} />
          <ReaminText>{item.RemainingText}</ReaminText>
          <BrandImage source={{uri: item?.BrandIconUrl}} />
        </ContentImageContainer>
        <RenderHtml
          contentWidth={windowWidth}
          source={title}
          baseStyle={{
            textAlign: 'center',
            width: 250,
            marginLeft: 35,
            fontSize: 14,
            fontWeight: '700',
            letterSpacing: 0.22,
          }}
        />
        <CartBtn
          textColor={item?.BrandIconUrl}
          style={{color: item?.PromotionCardColor}}>
          Daha Daha
        </CartBtn>
      </ProductContentContainer>
      <ProductFooter style={{backgroundColor: item?.PromotionCardColor}} />
    </ProductItemContainer>
  );
};

export const ProductItemContainer = styled.TouchableOpacity`
  width: 305px;
  height: 378px;
  margin: 20px 15px;
  position: relative;
`;
export const ProductContentContainer = styled.View`
  width: 305px;
  height: 362px;
  background-color: #fff;
  border-radius: 20px;
  z-index: 2;
  border: 1px solid #eceeef;
`;
export const ProductFooter = styled.View`
  width: 305px;
  height: 36px;
  transform: rotate(3deg);
  position: absolute;
  bottom: 5px;
  right: 0;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  z-index: 1;
`;
export const ContentImageContainer = styled.View`
  position: relative;
`;
export const ContentImage = styled.Image`
  width: 295px;
  height: 247px;
  border-radius: 16px;
  border-bottom-left-radius: 100px;
  margin: 3px 3px 0 3px;
`;
export const ReaminText = styled.Text`
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
export const BrandImage = styled.Image`
  width: 55px;
  height: 55px;
  border: 5px solid #fff;
  border-radius: 55px;
  position: absolute;
  bottom: 0;
  left: 0;
`;
export const CartBtn = styled.Text`
  font-size: 14px;
  font-weight: 700;
  text-align: center;
  margin-top: 10px;
  width: 100%;
  z-index: 5;
  width: 300px;
  position: absolute;
  bottom: 20px;
`;
