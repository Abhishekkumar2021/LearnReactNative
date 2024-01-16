/* eslint-disable prettier/prettier */
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const ElevatedCards = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.headingText}>Elevated Cards</Text>
            <ScrollView horizontal>
                <View style={[styles.card, styles.cardOne]}>
                    <Text>Card One</Text>
                </View>
                <View style={[styles.card, styles.cardTwo]}>
                    <Text>Card Two</Text>
                </View>
                <View style={[styles.card, styles.cardThree]}>
                    <Text>Card Three</Text>
                </View>
                <View style={[styles.card, styles.cardFour]}>
                    <Text>Card Four</Text>
                </View>
                <View style={[styles.card, styles.cardFive]}>
                    <Text>Card Five</Text>
                </View>
            </ScrollView>
        </View>
    );
};

export default ElevatedCards;

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
        flex: 1,
        width: 100,
        height: 100,
        borderRadius: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 10,
        marginHorizontal: 5,
    },
    cardOne: {
        backgroundColor: '#242424',
    },
    cardTwo: {
        backgroundColor: '#424242',
    },
    cardThree: {
        backgroundColor: '#616161',
    },
    cardFour: {
        backgroundColor: '#757575',
    },
    cardFive: {
        backgroundColor: '#212121',
    },
});

