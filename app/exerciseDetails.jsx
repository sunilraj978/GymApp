import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Image } from "expo-image";
import { TouchableOpacity } from "react-native";
import AntIcons from 'react-native-vector-icons/AntDesign';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { ScrollView } from "react-native";
import Animated, { FadeInDown } from 'react-native-reanimated';

export default function ExerciseDetails() {
  const item = useLocalSearchParams();
  const router = useRouter();
  return (
    <View className="flex flex-1 bg-white">
      {/* Header Image */}
      <View className="rounded-b-[40px] bg-neutral-200 shadow-lg shadow-black">
        <Image
          source={{ uri: item?.gifUrl }}
          contentFit="cover"
          style={{ width: wp(100), height: wp(100) }}
          className="rounded-b-[40px]"
        />
      </View>

      {/* Close Button */}
      <TouchableOpacity
        onPress={() => router.back()}
        className="absolute top-4 right-4 rounded-full bg-white p-2 shadow-lg shadow-black">
        <AntIcons name="closecircle" size={hp(4)} color="#f43f5e" />
      </TouchableOpacity>

      {/* Details Section */}
      <ScrollView
        className="mx-6 space-y-4 mt-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 80 }}>
        
        {/* Exercise Name */}
        <Animated.Text entering={FadeInDown.duration(500).springify()}
          style={{ fontSize: hp(3.5) }}
          className="font-bold text-neutral-900 tracking-wide text-center">
          {item?.name}
        </Animated.Text>
        
        {/* Equipment */}
        <View className="flex-row justify-between items-center">
          <Animated.Text entering={FadeInDown.delay(200).duration(500).springify()} style={{ fontSize: hp(2.2) }} className="text-neutral-700">
            Equipment: 
          </Animated.Text>
          <Animated.Text entering={FadeInDown.delay(300).duration(500).springify()} style={{ fontSize: hp(2.2) }} className="font-semibold text-neutral-800">
            {item?.equipment}
          </Animated.Text>
        </View>

        {/* Secondary Muscles */}
        <View className="flex-row justify-between items-center">
        <Animated.Text entering={FadeInDown.delay(400).duration(500).springify()} style={{ fontSize: hp(2.2) }} className="text-neutral-700">
            Secondary Muscles: 
          </Animated.Text>
          <Animated.Text entering={FadeInDown.delay(500).duration(500).springify()} style={{ fontSize: hp(2.2) }} className="font-semibold text-neutral-800">
            {item?.secondaryMuscles}
          </Animated.Text>
        </View>

        {/* Target Muscle */}
        <View className="flex-row justify-between items-center">
          <Animated.Text entering={FadeInDown.delay(600).duration(500).springify()} style={{ fontSize: hp(2.2) }} className="text-neutral-700">
            Target: 
          </Animated.Text>
          <Animated.Text entering={FadeInDown.delay(700).duration(500).springify()} style={{ fontSize: hp(2.2) }} className="font-semibold text-neutral-800">
            {item?.target}
          </Animated.Text>
        </View>

        {/* Instructions Section */}
        <Animated.Text entering={FadeInDown.delay(800).duration(500).springify()}
          style={{ fontSize: hp(3) }}
          className="font-bold text-neutral-900 tracking-wide">
          Instructions:
        </Animated.Text>

        {/* Instructions List */}
        <View className="space-y-2">
          {item?.instructions.split(',').map((ins, index) => (
            <Animated.Text entering={FadeInDown.delay((index+6)*100).duration(500).springify()}
              key={index}
              style={{ fontSize: hp(1.9) }}
              className="text-neutral-700 leading-5">
              {index + 1}. {ins.trim()}
            </Animated.Text>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
