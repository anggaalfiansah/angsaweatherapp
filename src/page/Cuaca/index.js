/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const CuacaScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Cuaca Indonesia</Text>
    </View>
  );
};

export default CuacaScreen;

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
