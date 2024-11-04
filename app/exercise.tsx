import { View, Text, StatusBar, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { fetchDataByItem } from "../app/api/exercise";
import { dummy_data } from "@/constants/Index";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Ionicons from "react-native-vector-icons/Ionicons";
import ExerciseList from "../components/ExercisesList";
import { ScrollView } from "react-native-virtualized-view";

export default function Exercise() {
  const route = useRouter();
  const [exercises, setExercises] = useState([]);
  const data = useLocalSearchParams();

  useEffect(() => {
    if (data?.name) {
      getDataFromApi(data?.name);
    }
  }, [data?.name]);

  const getDataFromApi = async (bodyPart: any) => {
    const data = await fetchDataByItem(bodyPart)
    setExercises(data)
  };

  return (
    <ScrollView>
      <StatusBar style="light" />
      <Image
        source={data.images}
        style={{ width: wp(100), height: hp(45) }}
        className="rounded-b-[40px]"
      />
      <TouchableOpacity
        onPress={() => route.back()}
        className="bg-rose-500 pr-1 mx-4 rounded-full absolute flex justify-center items-center"
        style={{ height: hp(5.5), width: hp(5.5), marginTop: hp(7) }}
      >
        <Ionicons name="caret-back-outline" size={hp(4)} color="white" />
      </TouchableOpacity>

      {/* {exercise} */}

      <View className="mt-4 space-y-3 mx-4">
        <Text
          style={{ fontSize: hp(4) }}
          className="font-semibold text-neutral-700"
        >
          {data.name} exercises
        </Text>

        <View>
          <ExerciseList data={exercises} />
        </View>
      </View>
    </ScrollView>
  );
}
