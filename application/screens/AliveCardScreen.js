import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Picker } from '@react-native-picker/picker';

const AliveCardScreen = ({ navigation }) => {

  const [characters, setCharacters] = useState([]);
  const [species, setSpecies] = useState('');
  const [gender, setGender] = useState('');
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character?status=alive')
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results);
      })
      .catch((error) => {
        console.error('Error fetching data :', error);
      });
  }, []);


  const filterCharacters = characters.filter((character) => {
    return (
      (species === '' || character.species === species) &&
      (gender === '' || character.gender === gender) &&
      character.name.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <View>
      <TextInput placeholder='Seach character name'
        value={search}
        onChangeText={setSearch}
        style={styles.textInput} />
      <View>
        <Text>Filter character by Species:</Text>
        <Picker
          selectedValue={species}
          onValueChange={(item) => setSpecies(item)}
        >
          <Picker.Item label="All" value="All" />
          <Picker.Item label="Human" value="Human" />
          <Picker.Item label="Alien" value="Alien" />
          <Picker.Item label="Humanoid" value="Humanoid" />
          <Picker.Item label="Unknown" value="unknown" />
        </Picker>
      </View>
      <View>
        <Text>Filter character by Gender:</Text>
        <Picker
          selectedValue={gender}
          onValueChange={(item) => setGender(item)}
        >
          <Picker.Item label='All' value="All" />
          <Picker.Item label='Male' value="Male" />
          <Picker.Item label='Female' value="Female" />
          <Picker.Item label='Genderless' value="Genderless" />
          <Picker.Item label='Unknown' value="Unknown" />

        </Picker>
      </View>
      <FlatList
        data={filterCharacters}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('DetailsScreen', { character: item })}>
            <View>
              <Text>{item.name}</Text>
            </View>
          </TouchableOpacity>
        )}

      />
    </View>
  )
}

export default AliveCardScreen

const styles = StyleSheet.create({})