/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CarousellCuaca from '../../component/CarousellCuaca';
import CarousellPeringatan from '../../component/CarousellPeringatan';
import BaseDataScrapper from '../../component/Scrapper/BaseDataScrapper';

const HomeScreen = () => {
  return (
    <LinearGradient colors={['#ff99cc', '#FFFFFF']} style={styles.container}>
      <CarousellCuaca />
      <CarousellPeringatan />
      <BaseDataScrapper />
    </LinearGradient>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: '5%',
  },
});
