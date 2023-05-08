import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Wallet} from '../../pages';

const Stack = createNativeStackNavigator();

const WalletStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Wallet" component={Wallet} />
    </Stack.Navigator>
  );
};

export default WalletStack;
