import {Image, View, Text} from 'react-native';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {
  BottomTabBar,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faStar, faCompass} from '@fortawesome/free-solid-svg-icons';

import {HomeStack, DiscoverStack, WalletStack} from './stacks';

const TabNavigation = () => {
  const Tab = createBottomTabNavigator();
  const getTabBarVisibility = route => {
    const routeName = getFocusedRouteNameFromRoute(route);
    const hideOnScreens = ['PromotionDetail'];
    const showTabBar = !(hideOnScreens.indexOf(routeName) > -1);
    return showTabBar;
  };

  return (
    <Tab.Navigator
      tabBar={props => {
        return (
          <View
            style={{
              justifyContent: 'center',
              borderTopRightRadius: 20,
              borderTopLeftRadius: 20,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: -3,
              },
              shadowOpacity: 0.1,
              shadowRadius: 3.84,
              elevation: 5,
            }}>
            <BottomTabBar {...props} />
          </View>
        );
      }}
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        options={({route}) => ({
          tabBarVisible: getTabBarVisibility(route),
          tabBarBackground: () => <></>,
          tabBarStyle: (currentRoute => {
            const routeName = getFocusedRouteNameFromRoute(currentRoute) ?? '';
            if (routeName === 'PromotionDetail') {
              return {display: 'none'};
            }
          })(route),
          tabBarIcon: ({focused}) =>
            focused ? (
              <>
                <FontAwesomeIcon
                  icon={faCompass}
                  size={22}
                  style={{marginTop: 15}}
                />

                <Text
                  style={{
                    color: '#000',
                    fontSize: 10,
                    marginTop: 6,
                    letterSpacing: 0.5,
                    fontWeight: '700',
                  }}>
                  KEŞFET
                </Text>
              </>
            ) : (
              <>
                <FontAwesomeIcon
                  icon={faCompass}
                  size={22}
                  style={{opacity: 0.7, marginTop: 15}}
                />

                <Text
                  style={{
                    color: '#000',
                    fontSize: 10,
                    marginTop: 6,
                    letterSpacing: 0.5,
                    fontWeight: '700',
                  }}>
                  KEŞFET
                </Text>
              </>
            ),
          tabBarLabel: () => null,
        })}
        name="Discover"
        component={DiscoverStack}
      />
      <Tab.Screen
        options={({route}) => ({
          tabBarVisible: getTabBarVisibility(route),
          tabBarIcon: () => (
            <View style={{}}>
              <Image
                resizeMode="contain"
                style={{width: 69, height: 69, marginBottom: 20}}
                source={require('../../assets/images/homeStackImg.png')}
              />
            </View>
          ),
          tabBarLabel: () => null,
        })}
        name="Home"
        component={HomeStack}
      />
      <Tab.Screen
        options={({route}) => ({
          tabBarVisible: getTabBarVisibility(route),
          tabBarIcon: ({focused}) =>
            focused ? (
              <>
                <FontAwesomeIcon
                  icon={faStar}
                  size={22}
                  style={{marginTop: 15}}
                />
                <Text
                  style={{
                    color: '#000',
                    letterSpacing: 0.5,
                    fontWeight: '700',
                    fontSize: 10,
                    marginTop: 6,
                  }}>
                  DAHA CÜZDAN
                </Text>
              </>
            ) : (
              <>
                <FontAwesomeIcon
                  icon={faStar}
                  size={22}
                  style={{opacity: 0.7, marginTop: 15}}
                />
                <Text
                  style={{
                    color: '#000',
                    fontSize: 10,
                    marginTop: 6,
                    letterSpacing: 0.5,
                    fontWeight: '700',
                  }}>
                  DAHA CÜZDAN
                </Text>
              </>
            ),
          tabBarLabel: () => null,
        })}
        name="Wallet"
        component={WalletStack}
      />
    </Tab.Navigator>
  );
};
export default TabNavigation;
