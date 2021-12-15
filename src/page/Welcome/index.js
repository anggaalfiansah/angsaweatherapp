/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {baseColor} from '../../constant/constant';

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selamat Datang</Text>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    ...baseColor,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
});
