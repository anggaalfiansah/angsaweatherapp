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
        <Text style={styles.kota}>{item.waktu_tempat}</Text>
        <Text style={styles.waktu}>{item.keterangan}</Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>PERINGATAN DINI</Text>
      <Carousel
        data={listPeringatan}
        renderItem={renderPeringatanItem}
        sliderWidth={width * 0.925}
        itemWidth={width * 0.9}
        layout={'default'}
        autoplay={true}
        autoplayInterval={5000}
        loop={true}
        initialNumToRender={listPeringatan.length}
      />
    </View>
  );
};

export default CarousellPeringatan;

const styles = StyleSheet.create({
  container: {
    height: '35%',
    paddingBottom: 5,
    marginBottom: 10,
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  itemContainer: {
    backgroundColor: 'rgba(255, 56, 56, 0.45)',
    padding: 10,
    alignItems: 'center',
    borderRadius: 20,
    height: '100%',
  },
  icon: {width: 50, height: 50, marginVertical: 5},
  kota: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  waktu: {
    ...baseFont,
    color: '#eee',
  },
});
