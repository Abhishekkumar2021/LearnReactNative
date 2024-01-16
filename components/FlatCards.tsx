/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const FlatCards = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Flat Cards</Text>
      <View style={styles.cardContainer}>
        <View style={[styles.card, styles.cardOne]}>
          <Text>Card One</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text>Card Two</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text>Card Three</Text>
        </View>
      </View>
    </View>
  );
};

export default FlatCards;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    gap: 10,
  },
  cardContainer: {
    flexDirection: 'row',
    gap: 10,
    padding: 10,
    borderRadius: 10,
  },
  headingText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  card: {
    flex: 1,
    width: 100,
    height: 100,
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

  },
  cardOne: {
    backgroundColor: '#242424',
  },
  cardTwo: {
    backgroundColor: '#424242',
  },
  cardThree: {
    backgroundColor: '#242424',
  },
});
