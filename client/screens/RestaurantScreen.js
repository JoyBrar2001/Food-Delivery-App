import { Image, ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { themeColors } from '../theme';
import DishRow from '../components/DishRow';
import CartIcon from '../components/CartIcon';
import { useDispatch } from 'react-redux';
import { setRestaurant } from '../slices/restaurantSlice';

AntDesign.loadFont();
EvilIcons.loadFont();

const RestaurantScreen = () => {
  const { params } = useRoute();
  const navigation = useNavigation();
  let item = params;

  const dispatch = useDispatch();
  useEffect(() => {
    if(item && item.id){
      dispatch(setRestaurant({...item}));
    }
  },[]);

  return (
    <View>
      <CartIcon />
      <StatusBar style='light' />
      <ScrollView>
        <View className='relative'>
          <Image className='w-full h-72' source={item.image} />
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className='absolute top-12 left-4 bg-gray-50 p-2 rounded-full'
            style={{}}
          >
            <AntDesign name="arrowleft" size={24} color={themeColors.bgColor(1)} />
          </TouchableOpacity>
        </View>
        <View
          style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40, }}
          className='bg-white -mt-12 pt-6'
        >
          <View className='px-5'>
            <Text className='text-3xl font-bold'>{item.name}</Text>
            <View className='flex-row space-x-2 my-1'>
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
            <Text className='tetx-gray-500 mt-2'>{item.description}</Text>
          </View>
        </View>
        <View className='pb-36 bg-white'>
          <Text className='px-4 py-4 text-2xl font-bold'>Menu</Text>
          {item.dishes.map((dish, index) => (
            <DishRow key={index} item={dish} />
          ))}
        </View>
      </ScrollView >
    </View >
  );
}

export default RestaurantScreen;