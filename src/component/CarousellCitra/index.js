/* eslint-disable prettier/prettier */
import React from 'react';
import {useSelector} from 'react-redux';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {baseFont} from '../../constant/constant';

const CarousellCitra = () => {
  const {listCitra} = useSelector(state => state.home);
  const {width} = Dimensions.get('screen');

  const renderCitraItem = ({item}) => {
    return (
      <View style={styles.itemContainer}>
        <Text style={styles.kota}>{item.nama}</Text>
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
    <View style={styles.container}>
      <Carousel
        data={listCitra}
        renderItem={renderCitraItem}
        sliderWidth={width * 0.925}
        itemWidth={width * 0.9}
        layout={'default'}
        autoplay={true}
        autoplayInterval={5000}
        loop={true}
      />
    </View>
  );
};

export default CarousellCitra;

const styles = StyleSheet.create({
  // container: {height: '30%'},
  title: {fontSize: 15, fontWeight: 'bold', marginBottom: 5},
  itemContainer: {
    backgroundColor: 'rgba(41, 56, 255, 0.09)',
    padding: 10,
    alignItems: 'center',
    borderRadius: 20,
  },
  gambar: {width: 400, height: 225, marginVertical: 5},
  kota: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  waktu: {
    ...baseFont,
    color: '#eee',
  },
  kondisi: {...baseFont, color: '#eee'},
  suhu: {fontSize: 20},
});
