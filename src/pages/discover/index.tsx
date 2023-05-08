//Global imports
import React, {useRef, useState, useEffect} from 'react';
import {useQuery} from '@tanstack/react-query';
import {View, SafeAreaView, FlatList, Dimensions} from 'react-native';
import styled from 'styled-components';
// local imports
import {AllServices} from '../../services';
import {Header, MenuItems, ProductItems} from '../../components';

export const Discover = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeColor, setActiveColor] = useState('#fff');

  const {data: listItems} = useQuery(['getList'], () => AllServices.getList());
  const {data: prormotionsItems} = useQuery(['getProduct'], () =>
    AllServices.getPromotions(),
  );
  const flatlistRef = useRef<any>();
  const windowWidth = Dimensions.get('window').width;

  useEffect(() => {
    prormotionsItems?.map((item, i) => {
      if (i === activeIndex) {
        setActiveColor(item?.PromotionCardColor);
      }
    });
  }, [activeIndex, prormotionsItems]);
  
  const swipeButton = () => {
    return (
      <SliderButtonContainer>
        {prormotionsItems?.map((item, i) => {
          return (
            <SliderButtonArea
              onPress={() =>
                flatlistRef?.current?.scrollToIndex({animated: true, index: i})
              }>
              <SliderButton
                isActive={activeIndex === i}
                activeColor={activeColor}
              />
            </SliderButtonArea>
          );
        })}
      </SliderButtonContainer>
    );
  };
  return (
    <View style={{backgroundColor: '#fff', height: '100%'}}>
      <SafeAreaView />
      <Header />
      <View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={listItems}
          ListHeaderComponent={() => (
            <MenuItems
              item={{
                item: {
                  Name: 'Fırsat Bul',
                  IconImage: require('../../../assets/images/SearchImg.png'),
                },
              }}
            />
          )}
          style={{marginLeft: 15}}
          renderItem={item => <MenuItems item={item} />}
        />
        <FlatList
          horizontal
          pagingEnabled
          scrollEnabled
          ref={flatlistRef}
          showsHorizontalScrollIndicator={false}
          data={prormotionsItems}
          renderItem={(item, i) => <ProductItems item={item.item} />}
          snapToInterval={windowWidth}
          keyExtractor={item => item.Id}
          decelerationRate="fast"
          onScroll={event => {
            const index = Math.round(
              event.nativeEvent.contentOffset.x / windowWidth,
            );
            setActiveIndex(index);
          }}
        />
        {swipeButton()}
      </View>
    </View>
  );
};
export const SliderButtonContainer = styled.View`
  position: absolute;
  bottom: -5px;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  z-index: 2;
`;
export const SliderButton = styled.View<{isActive: boolean; activeColor}>`
  width: ${({isActive}) => (isActive ? 19 : 8)}px;
  height: 8px;
  border-radius: 8px;
  background-color: ${({isActive, activeColor}) =>
    isActive ? activeColor : '#D8D8D8'};
`;
export const SliderButtonArea = styled.TouchableOpacity`
  width: 5px;
  height: 25px;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
`;
