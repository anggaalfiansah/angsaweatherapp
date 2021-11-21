/* eslint-disable prettier/prettier */
import React from 'react';
import {useSelector} from 'react-redux';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {baseFont} from '../../constant/constant';
import LinearGradient from 'react-native-linear-gradient';

const CarousellCuaca = () => {
  const {listCuaca} = useSelector(state => state.home);
  const {width} = Dimensions.get('screen');

  const renderCuacaItem = ({item}) => {
    const siangMalam =
      Number(item.waktu.slice(0, 2)) < 19
        ? ['#4db8ff', '#e6f5ff']
        : ['#000066', '#333399'];
    return (
      <LinearGradient colors={siangMalam} style={styles.itemContainer}>
        <Text style={styles.kota}>{item.nama_kota}</Text>
        <Text style={styles.waktu}>{item.waktu}</Text>
        <Image
          style={styles.icon}
          source={{
            uri: item.icon,
          }}
        />
        <Text style={styles.kondisi}>{item.kondisi}</Text>
        <Text style={styles.suhu}>{item.suhu}</Text>
      </LinearGradient>
    );
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>PERKIRAAN CUACA HARI INI</Text>
      <Carousel
        data={listCuaca}
        renderItem={renderCuacaItem}
        sliderWidth={width * 0.925}
        itemWidth={width * 0.9}
        autoplay={true}
        autoplayInterval={5000}
        loop={true}
        initialNumToRender={listCuaca.length}
      />
    </View>
  );
};

export default CarousellCuaca;

const styles = StyleSheet.create({
  container: {
    height: '26%',
    paddingBottom: 5,
    marginBottom: 5,
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  itemContainer: {
    backgroundColor: 'rgba(41, 56, 255, 0.09)',
    padding: 10,
    alignItems: 'center',
    borderRadius: 20,
  },
  icon: {width: 50, height: 50, marginVertical: 5},
  kota: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  waktu: {
    ...baseFont,
    color: '#eee',
  },
  kondisi: {...baseFont, color: '#eee'},
  suhu: {fontSize: 20},
});
