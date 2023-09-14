import { Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, RestaurantScreen, CartScreen, OrderPreparingScreen, DeliveryScreen } from './screens';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Restaurant' component={RestaurantScreen} />
        <Stack.Screen name='Cart' options={{ presentation: 'modal' }} component={CartScreen} />
        <Stack.Screen name='OrderPreparing' options={{ presentation: 'fullScreenModal' }} component={OrderPreparingScreen} />
        <Stack.Screen name='Delivery' options={{ presentation: 'fullScreenModal' }} component={DeliveryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;