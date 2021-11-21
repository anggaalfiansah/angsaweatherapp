/* eslint-disable prettier/prettier */
import React from 'react';
import {useSelector} from 'react-redux';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import Carousel from 'react-native-snap-carousel';

const CarousellCitra = () => {
  const {listCitra} = useSelector(state => state.home);
  const {width} = Dimensions.get('screen');

  const renderCitraItem = ({item}) => {
    return (
      <View style={styles.itemContainer}>
        <Text style={styles.nama}>{item.nama.toUpperCase()}</Text>
        <Image
          style={styles.gambar}
          source={{
            uri: item.gambar,
          }}
          resizeMode="contain"
        />
      </View>
    );
  };
  return (
    <Carousel
      data={listCitra}
      renderItem={renderCitraItem}
      sliderWidth={width * 0.925}
      itemWidth={width * 0.9}
      layout={'default'}
      autoplay={true}
      autoplayInterval={5000}
      loop={true}
      initialNumToRender={listCitra.length}
    />
  );
};

export default CarousellCitra;

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: '#fff',
    padding: 10,
    alignItems: 'center',
    borderRadius: 20,
  },
  gambar: {width: 500, height: 250, marginVertical: 5},
  nama: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
});
