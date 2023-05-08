import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Discover, PromotionDetail} from '../../pages';

const Stack = createNativeStackNavigator();

const DiscoverStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Discover" component={Discover} />
      <Stack.Screen name="PromotionDetail" component={PromotionDetail} />
    </Stack.Navigator>
  );
};

export default DiscoverStack;
