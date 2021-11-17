/* eslint-disable prettier/prettier */
import React from 'react';
import {View} from 'react-native';
import HomePageScrapper from '../../scrapper/HomePageScrapper/';
import PerkiraanCuacaIndonesia from '../../scrapper/PerkiraanCuacaIndonesia';

const Scrapper = () => {
  return (
    <View>
      <HomePageScrapper />
      <PerkiraanCuacaIndonesia />
    </View>
  );
};

export default Scrapper;
