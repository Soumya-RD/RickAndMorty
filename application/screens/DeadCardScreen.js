import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Picker } from '@react-native-picker/picker';

const DeadCardScreen  = ({ navigation }) => {

  const [characters, setCharacters] = useState([]);
  const [species, setSpecies] = useState('');
  const [gender, setGender] = useState('');
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character?status=dead')
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
    <View style={styles.Conatiner}>
      <View style={styles.inputContainer}>
        <Image source={require('../assets/search.jpg')} style={{ height: 30, width: 30, borderRadius: 5, margin: 3, borderWidth: 1, borderColor: '#000' }} />
        <TextInput
          placeholder='Search a Character'
          style={styles.searchInput}
          value={search}
          onChangeText={setSearch}

        />
      </View>
      <View style={styles.speciesConatiner}>
        <Text style={styles.speciesText}>Filter character by Species:</Text>
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
      <View style={styles.genderConatiner}>
        <Text style={styles.genderText}>Filter character by Gender:</Text>
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
      <Text style={{ fontWeight: 'bold', color: '#fff', fontSize: 20, textAlign: 'center' }}>Search Result :</Text>
      <FlatList
        data={filterCharacters}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('DetailsScreen', { character: item })}>
            <View style={{ marginTop: 1, width: 200, marginLeft: 100 }}>
              <Text style={styles.nameText}>{item.name}</Text>
            </View>
          </TouchableOpacity>
        )}

      />
    </View>
  )
}

export default DeadCardScreen

const styles = StyleSheet.create({

  Conatiner: {
    flex: 1,
    backgroundColor: '#132a13',
   
  },
  inputContainer: {
    borderWidth: 1,
    marginTop: 7,
    width: 250,
    marginLeft: 50,
    borderRadius: 10,
    flexDirection: 'row',
    height: 38,
    backgroundColor: '#edf6f9',
    borderColor: '#f26419'

  },
  searchInput: {
    textAlign: 'center',
    width: 200,
    fontWeight: 'bold',
    height: 40,

  },
  speciesConatiner: {
    marginTop: 3,
    borderWidth: 1,
    width: 250,
    marginLeft: 50,
    height: 65,
    borderRadius: 25,
    padding: 10,
    paddingBottom: 15,
    backgroundColor: '#edf2f4',
    borderColor: '#f26419'
  },
  speciesText: {
    fontWeight: 'bold',

  },
  genderConatiner: {
    marginTop: 3,
    borderWidth: 1,
    width: 250,
    marginLeft: 50,
    height: 65,
    borderRadius: 25,
    padding: 10,
    paddingBottom: 15,
    backgroundColor: '#edf2f4',
    marginBottom: 5,
    borderColor: '#f26419'
  },
  genderText: {
    fontWeight: 'bold',

  },
  nameText: {
    fontWeight: 'bold',
    marginTop: 2,
    textAlign: 'center',
    borderWidth: 1,
    width: 150,
    borderRadius: 5,

    backgroundColor: '#edf6f9',
    borderColor: '#ffd300'
  },


})