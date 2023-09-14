import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { featured } from '../constants';
import { useNavigation } from '@react-navigation/native';
import MapView, { Marker } from 'react-native-maps'
import { themeColors } from '../theme';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

FontAwesome.loadFont();
AntDesign.loadFont();

const DeliveryScreen = () => {
  const restaurant = featured.restaurants[0];
  const navigation = useNavigation();

  onRegionChange = (region) => {
    console.log(region)
  }

  return (
    <View className='flex-1'>
      {/* <MapView
        initialRegion={{
          latitude: restaurant.lat,
          longitude: restaurant.lng,
          latitudeDelta: 0.01,
        }}
        className='flex-1'
        mapType='standard'
      >
        <Marker 
          coordinate={{
            latitude: restaurant.lat,
            longitude: restaurant.lng,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}
          title={restaurant.name}
          description={restaurant.description}
          pinColor={themeColors.bgColor(1)}
        >
          <Text>Pin</Text>
        </Marker>
      </MapView> */}
      <MapView
        // onRegionChange={onRegionChange}
        initialRegion={{
          // "latitude": 20.355550935210434, "latitudeDelta": 49.84215525135024, "longitude": 75.73139302432537, "longitudeDelta": 24.809624701738365
          "latitude": restaurant.lat,
          "longitude": restaurant.lng,
          "latitudeDelta": 0.005,
          "longitudeDelta": 0.005,
        }}
        mapType='standard'
        className='flex-1'
      >
        <Marker
          coordinate={{
            "latitude": restaurant.lat,
            "longitude": restaurant.lng,
            "latitudeDelta": 0.005,
            "longitudeDelta": 0.005,
          }}
          title={restaurant.name}
          description={restaurant.description}
          pinColor={themeColors.bgColor(1)}
        />
      </MapView>
      <View className='rounded-t-3xl -mt-12 bg-white relative'>
        <View className='flex-row justify-between px-5 pt-10'>
          <View>
            <Text className='text-lg text-gray-700 font-semibold'>Estimated Arrival</Text>
            <Text className='text-3xl text-gray-700 font-extrabold'>20-30 Minutes</Text>
            <Text className='mt-2 text-gray-700 font-semibold'>Your order is on its way!</Text>
          </View>
          <Image source={require('../assets/images/bikeGuy2.gif')} className='w-24 h-24' />
        </View>
        <View
          style={{ backgroundColor: themeColors.bgColor(0.8) }}
          className='p-2 flex-row justify-between items-center rounded-full my-5 mx-2'
        >
          <View className='p-1 rounded-full' style={{ backgroundColor: 'rgba(255,255,255,0.4)' }}>
            <Image source={require('../assets/images/deliveryGuy.png')} className='h-16 w-16 rounded-full' />
          </View>
          <View className='flex-1 ml-3'>
            <Text className='text-lg font-bold text-white'>Syed Noman</Text>
            <Text className='font-semibold text-white'>Your Rider</Text>
          </View>
          <View className='flex-row items-center space-x-3 mr-3'>
            <TouchableOpacity className='bg-white py-2 px-3 rounded-full'>
              <FontAwesome name="phone" size={32} color={themeColors.bgColor(1)} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Home')} className='bg-white p-2 rounded-full'>
              <AntDesign name="close" size={32} color={themeColors.bgColor(1)} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

export default DeliveryScreen;

const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: '100%',
  }
})