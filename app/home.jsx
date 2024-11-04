import { View, Text, SafeAreaView, StatusBar, Image } from "react-native";
import React from "react";
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import ImageSlider from "../components/ImageSlider";
import BodyContent from "../components/BodyContent";

export default function Home() {
  return (
    <SafeAreaView className="flex-1 bg-white" edges={["top"]}>
      <StatusBar style="dark" />

      {/* Punchline and Avatar */}
      <View className="flex-row justify-between items-center mx-5 py-5">
        <View className="space-y-2">
          <Text
            style={{ fontSize: hp(4.5) }}
            className="font-bold tracking-wider text-neutral-700"
          >
            READY TO
          </Text>
          <Text
            style={{ fontSize: hp(4.5) }}
            className="font-bold tracking-wider text-rose-500"
          >
            WORKOUT
          </Text>
        </View>
        <View className="flex justify-center items-center space-y-2">
          <Image
            source={require("../assets/images/avatar.png")}
            style={{ height: hp(6), width: hp(6) }}
            className="rounded-full"
          />
          <View style={{ height: hp(5.5), width: hp(5.5) }} className="bg-neutral-200 rounded-full flex justify-center items-center border-neutral-400 border-[3px]">
            <Ionicons name="notifications" size={hp(3)} color="green" />
          </View>
        </View>
      </View>

      {/* ImageSlider */}
      <View style={{ flex: 1 }}>
        <ImageSlider />
      </View>

      {/* Body Content */}
      <View style={{ flex: 2 }}>
        <BodyContent />
      </View>

    </SafeAreaView>
  );
}
