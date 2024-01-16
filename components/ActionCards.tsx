/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View, Linking, Image, TouchableOpacity } from 'react-native';
import React from 'react';

const ActionCards = () => {
  const openWebPage = (url: string) => {
    // Open the web page in a browser
    try {
      Linking.openURL(url);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Action Cards</Text>
      <View style={[styles.card]}>
        <Image
          style={styles.cardImage}
          source={{
            uri: 'https://picsum.photos/300/200',
          }}
        />
        <View style={styles.cardText}>
          <Text style={styles.cardTitle}>Card Title</Text>
          <Text style={styles.cardLabel}>Card Label</Text>
          <Text style={styles.cardDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            nec purus urna. Aliquam et semper sem, sed pharetra nunc.
          </Text>
          <TouchableOpacity
          style={styles.linkButton}
            onPress={() => openWebPage('https://www.google.com')}>
            <Text style={styles.linkButtonText}>Learn More</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ActionCards;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    gap: 10,
  },
  headingText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#313131',
    borderColor: '#525252',
    borderWidth: 1,
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
    elevation: 10,
    display: 'flex',
    alignItems: 'center',
  },
  cardImage: {
    width: 400,
    height: 200,
  },
  cardText: {
    padding: 10,
    flex: 1,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  cardLabel: {
    fontSize: 16,
    color: '#666',
  },
  cardDescription: {
    fontSize: 16,
    marginTop: 10,
  },
  linkButton: {
    backgroundColor: '#5fdecb',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    marginHorizontal: 'auto',
    width: '50%',
    borderWidth: 1,
  },
  linkButtonText: {
    textAlign: 'center',
    color: '#000',
    // fontWeight: 'bold',
  },
});
