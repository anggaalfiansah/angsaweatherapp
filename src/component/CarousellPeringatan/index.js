/* eslint-disable prettier/prettier */
import React from 'react';
import {useSelector} from 'react-redux';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {baseFont} from '../../constant/constant';

const CarousellPeringatan = () => {
  const {listPeringatan} = useSelector(state => state.home);
  const {width} = Dimensions.get('screen');
  const renderPeringatanItem = ({item}) => {
    return (
      <View style={styles.itemContainer}>
        <Text style={styles.title}>PERINGATAN DINI CUACA</Text>
        <Text style={styles.waktuTempat}>{item.waktu_tempat}</Text>
        <Text style={styles.keterangan}>{item.keterangan}</Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <Carousel
        data={listPeringatan}
        renderItem={renderPeringatanItem}
        sliderWidth={width}
        itemWidth={width}
        layout={'default'}
        autoplay={true}
        autoplayInterval={5000}
        loop={true}
        initialNumToRender={listPeringatan.length}
        removeClippedSubviews
      />
    </View>
  );
};

export default CarousellPeringatan;

const styles = StyleSheet.create({
  container: {
    height: '35%',
    borderBottomWidth: 1,
  },
  itemContainer: {
    backgroundColor: 'rgba(255, 162, 0, 0.82)',
    padding: 5,
    height: '100%',
  },
  title: {
    fontSize: 20,
    textAlign: 'justify',
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
  },
  waktuTempat: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  keterangan: {
    ...baseFont,
    color: '#eee',
  },
});
