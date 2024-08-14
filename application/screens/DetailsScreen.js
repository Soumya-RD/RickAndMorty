import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const DetailsScreen = ({ route }) => {
  const { character } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: character.image }} style={styles.image} />
      <Text style={styles.name}>{character.name}</Text>
      <Text style={styles.details}>Status: {character.status}</Text>
      <Text style={styles.details}>Species: {character.species}</Text>
      <Text style={styles.details}>Gender: {character.gender}</Text>
      <Text style={styles.details}>Origin: {character.origin.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#132a13'
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
    borderColor: '#ff5400',
    borderWidth: 1,
    marginTop: 100
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff'
  },
  details: {
    fontSize: 18,
    marginBottom: 5,
    color: '#fff'
  },
});

export default DetailsScreen;
