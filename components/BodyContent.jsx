import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
import { bodyParts } from '../constants/Index';
import { TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import Animated, { FadeInDown, FadeInLeft } from 'react-native-reanimated';

export default function BodyContent() {
    const router = useRouter()
  return (
    <View className="mx-4">
      <Text className="font-semibold text-neutral-700" style={{fontSize:hp(4)}}>Excerises</Text>
      <FlatList 
      data={bodyParts}
      numColumns={2}
      keyExtractor={item=>item.name}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{paddingBottom:50, paddingTop:20}}
      columnWrapperStyle={{justifyContent:'space-between'}}
      renderItem={({item, index})=> <BodyPartCard router={router} index={index} item={item} />} />
    </View>
  )
}


const BodyPartCard = ({item, router, index}) =>{
    return(
        <Animated.View entering={FadeInDown.duration(200).delay(index*200).springify()}>
            <TouchableOpacity
            onPress={()=>router.push({pathname:'/exercise', params:item})}
            style={{width:wp(44), height:wp(52)}} className="flex justify-end p-4 mb-4">

                <Image source={item?.images} resizeMode='cover' style={{width:wp(44), height:wp(52)}} className="rounded-[35px] absolute" />

                <LinearGradient
                colors={['transparent', 'rgba(0,0,0,0.9)']}
                style={{width:wp(44), height:hp(15)}}
                start={{x:0.5,y:0}}
                end={{x:0.5, y:1}}
                className="absolute bottom-0 rounded-b-[35px]"
                />

                <Text style={{fontSize:hp(2.3)}} className="text-white font-semibold text-center tracking-wide">
                    {item?.name}
                </Text>

            </TouchableOpacity>
        </Animated.View>
    )
}