import { Image, Text, TouchableWithoutFeedback, View } from 'react-native';
import React from 'react';
import { EvilIcons } from '@expo/vector-icons';
import { themeColors } from '../theme';
import { useNavigation } from '@react-navigation/native';

EvilIcons.loadFont();

const RestaurantCard = ({ item }) => {
  const navigation = useNavigation();

  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate('Restaurant', { ...item })}
    >
      <View
        className='mr-6 rounded-3xl mb-5'
        style={{
          shadowColor: themeColors.bgColor(1),
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.30,
          shadowRadius: 7,

          elevation: 8,
          // background color must be set
          backgroundColor: "#fff" // invisible color

        }}
      >
        <Image source={item.image} className='h-36 w-64 rounded-t-3xl' />
        <View className='px-3 pb-4 space-y-2'>
          <Text className='text-lg font-bold pt-2'>{item.name}</Text>
          <View className='flex-row items-center space-x-1'>
            <Image source={require('../assets/images/fullStar.png')} className='h-4 w-4' />
            <Text className='text-xs'>
              <Text className='text-green-700'>{item.stars}</Text>
              <Text className='text-gray=700'>
                ({item.reviews} review) • <Text>{item.category}</Text>
              </Text>
            </Text>
          </View>
          <View className='flex-row items-center space-x-1'>
            <EvilIcons name="location" size={30} color="gray" />
            <Text className='text-gray-700 text-xs'>Nearby • {item.address}</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default RestaurantCard;