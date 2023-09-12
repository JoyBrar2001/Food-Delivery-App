import { ScrollView, Text, TextInput, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { themeColors } from '../theme';
import Categories from '../components/Categories';
import { featured } from '../constants';
import FeaturedRow from '../components/FeaturedRow';

AntDesign.loadFont();
EvilIcons.loadFont();
Feather.loadFont();

const HomeScreen = () => {
  return (
    <SafeAreaView className='bg-white'>
      <StatusBar style='dark' />
      <View className='flex-row items-center space-x-2 px-4 pb-2'>
        <View className='flex-row flex-1 items-center p-3 rounded-full border border-gray-300'>
          <AntDesign name="search1" size={24} color="gray" />
          <TextInput placeholder='Restaurants' className='ml-2 flex-1' />
          <View className='flex-row items-center space-x-1 boredr-0 border-l-2 pl-2 border-l-gray-300'>
            <EvilIcons name="location" size={30} color="gray" />
            <Text className='text-gray-600'>New york, NYC</Text>
          </View>
        </View>
        <View className='p-3 rounded-full' style={{ backgroundColor: themeColors.bgColor(1) }}>
          <Feather name="sliders" size={24} color="white" />
        </View>
      </View>

      <ScrollView
        vertical
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 20,
        }}
      >
        <Categories />

        <View className='mt-5'>
          {[featured, featured, featured].map((item, index) => {
            return (
              <FeaturedRow 
                key={index}
                title={item.title}
                restaurants={item.restaurants}
                description={item.description}                
              />
            )
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen;