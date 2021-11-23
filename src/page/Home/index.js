/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CarousellCuaca from '../../component/CarousellCuaca';
import CarousellPeringatan from '../../component/CarousellPeringatan';
import CarousellCitra from '../../component/CarousellCitra';
import Scrapper from '../../component/Scrapper';

const HomeScreen = () => {
  return (
    <LinearGradient colors={['#ff99cc', '#FFFFFF']} style={styles.container}>
      <CarousellCuaca />
      <CarousellPeringatan />
      <CarousellCitra />
      <Scrapper />
    </LinearGradient>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
