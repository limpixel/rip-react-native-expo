import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const Latihan1 = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{props.title}</Text>
      <Text style={styles.heading}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  heading: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#909090',
  },
});

export default Latihan1;
