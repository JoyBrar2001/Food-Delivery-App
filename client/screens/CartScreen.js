import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { featured } from '../constants'
import { themeColors } from '../theme';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

AntDesign.loadFont();

const CartScreen = () => {
  const restaurant = featured.restaurants[0];
  const navigation = useNavigation();

  return (
    <SafeAreaView className='relative flex-1'>
      <View className='relative py-4 shadow-sm'>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ backgroundColor: themeColors.bgColor(1) }}
          className='absolute z-10 rounded-full p-1 shadow top-2 left-2'
        >
          <AntDesign name="arrowleft" size={24} color="white" />
        </TouchableOpacity>
        <View>
          <Text className='text-center font-bold text-xl'>Your Cart</Text>
          <Text className='text-center text-gray-500'>{restaurant.name}</Text>
        </View>
      </View>

      <View
        style={{ backgroundColor: themeColors.bgColor(0.2) }}
        className='flex-row px-4 items-center'
      >
        <Image
          source={require('../assets/images/bikeGuy.png')}
          className='w-20 h-20 rounded-full'
        />
        <Text className='flex-1 pl-4'>Deliver in 20-30 minutes</Text>
        <TouchableOpacity>
          <Text className='font-bold' style={{ color: themeColors.text }}>Change</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        vertical
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 50,
        }}
        className='bg-white pt-5'
      >
        {restaurant.dishes.map((dish, index) => {
          return (
            <View
              key={index}
              className='flex-row items-center space-x-3 px-4 bg-white mx-2 mb-3 rounded-xl'
              style={{
                shadowColor: 'black',
                shadowOffset: {
                  width: 0,
                  height: 4,
                },
                shadowOpacity: 0.10,
                shadowRadius: 7,

                elevation: 5,
                // background color must be set
                backgroundColor: "#fff" // invisible color
              }}
            >
              <Text className='font-bold' style={{ color: themeColors.text }}>
                2x
              </Text>
              <Image
                className='h-14 w-14 rounded-full'
                source={dish.image}
              />
              <Text className='flex-1 font-bold text-gray-700'>{dish.name}</Text>
              <Text className='font-semibold text-base'>${dish.price}</Text>
              <TouchableOpacity
                className='p-1 rounded-full'
                style={{ backgroundColor: themeColors.bgColor(1) }}
              >
                <AntDesign name="minus" size={24} color="white" />
              </TouchableOpacity>
            </View>
          )
        })}
      </ScrollView>
    </SafeAreaView>
  )
}

export default CartScreen;