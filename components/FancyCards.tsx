/* eslint-disable prettier/prettier */
import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const FancyCards = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.headingText}>Trending Places</Text>
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
                </View>
            </View>
            <View style={[styles.card]}>
                <Image
                    style={styles.cardImage}
                    source={{
                        uri: 'https://picsum.photos/500/200',
                    }}
                />
                <View style={styles.cardText}>
                    <Text style={styles.cardTitle}>Card Title</Text>
                    <Text style={styles.cardLabel}>Card Label</Text>
                    <Text style={styles.cardDescription}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                        nec purus urna. Aliquam et semper sem, sed pharetra nunc.
                    </Text>
                </View>
            </View>
            <View style={[styles.card]}>
                <Image
                    style={styles.cardImage}
                    source={{
                        uri: 'https://picsum.photos/400/200',
                    }}
                />
                <View style={styles.cardText}>
                    <Text style={styles.cardTitle}>Card Title</Text>
                    <Text style={styles.cardLabel}>Card Label</Text>
                    <Text style={styles.cardDescription}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                        nec purus urna. Aliquam et semper sem, sed pharetra nunc.
                    </Text>
                </View>
            </View>
        </View>
    );
};

export default FancyCards;

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
        flexDirection: 'column',
        backgroundColor: '#484848',
        borderRadius: 10,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowRadius: 10.0,
        elevation: 10,
        borderColor: '#545454',
        borderWidth: 1,
    },
    cardImage: {
        width: 'auto', // '100%' will make the image stretch
        height: 200,
    },
    cardText: {
        padding: 10,
        flex: 1,
        gap: 5,
    },
    cardTitle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    cardLabel: {
        fontSize: 16,
        color: '#a0a0a0',
    },
    cardDescription: {
        fontSize: 16,
    },
});
