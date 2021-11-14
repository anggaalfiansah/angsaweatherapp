/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {baseColor} from '../../constant/constant';

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Selamat Datang</Text>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    ...baseColor,
  },
});
