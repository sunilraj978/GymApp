import * as React from 'react';
import { Dimensions, View, Image, StyleSheet } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { slideImage } from '../constants/Index';

function ImageSlider() {
    const width = Dimensions.get('window').width;
    
    return (
        <View style={{ flex: 1 }}>
            <Carousel
                loop
                width={width}
                height={width / 2}
                autoPlay={true}
                data={slideImage}
                scrollAnimationDuration={2000}
                renderItem={({ item }) => (
                    <View style={styles.imageContainer}>
                        <Image
                            source={item}
                            style={styles.image}
                            resizeMode="cover"
                        />
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 10,

    },
});

export default ImageSlider;
