import { Image, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { themeColors } from '../theme';
import { AntDesign } from '@expo/vector-icons';

AntDesign.loadFont();

const DishRow = ({ item }) => {
  const [ amount, setAmount ] = useState(2);

  return (
    <View
      className='flex-row items-center bg-white p-3 rounded-3xl mb-3 mx-2'
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
      <Image className='rounded-3xl' style={{ height: 100, width: 100 }} source={item.image} />
      <View className='flex flex-1 space-y-3'>
        <View className='pl-3'>
          <Text className='text-xl'>{item.name}</Text>
          <Text className='text-gray-700'>{item.description}</Text>
        </View>
        <View className='flex-row justify-between pl-3 items-center'>
          <Text className='text-gray-700 text-lg font-bold'>
            $ {item.price}
          </Text>
          <View className='flex-row items-center'>
            <TouchableOpacity
              className='p-1 rounded-full'
              style={{ backgroundColor: themeColors.bgColor(1) }}
              onPress={() => setAmount(amount-1)}
              >
              <AntDesign name="minus" size={24} color="white" />
            </TouchableOpacity>
            <Text className='px-3'>{amount}</Text>
            <TouchableOpacity
              className='p-1 rounded-full'
              style={{ backgroundColor: themeColors.bgColor(1) }}
              onPress={() => setAmount(amount+1)}
            >
              <AntDesign name="plus" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

export default DishRow;