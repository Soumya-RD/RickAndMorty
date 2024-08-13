import { FlatList, StyleSheet, Text, TextInput, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Picker } from '@react-native-picker/picker';

const CardScreen = () => {
    const [Characters, setCharacters] = useState([]);
    const [status, setStatus] = useState('');
    const [species, setSpecies] = useState('');
    const [gender, setGender] = useState('');
    const [search, setSearch] = useState('');

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
            .then((response) => response.json())
            .then((data) => {
                setCharacters(data.results);
            })

            .catch((error) => {
                console.error('Error fetching data:', error);
            })
    }, []);

    const filterCharacters = Characters.filter((Character) => {
        return (
            (status === '' || Character.status === status) &&
            (species === '' || Character.species === species) &&
            (gender === '' || Character.gender === gender) &&
            Character.name.toLowerCase().includes(search.toLowerCase())
        );
    });


    const handlePress = (name) => {

    };

    return (
        
        <View style={styles.Conatiner}>
            <View style={styles.inputContainer}>
                <Image source={require('../assets/search.jpg')} style={{ height: 30, width: 30, borderRadius: 5 }} />
                <TextInput
                    placeholder='Search a Character'
                    style={styles.searchInput}
                    value={search}
                    onChangeText={setSearch}

                />
            </View>

            <View style={styles.statusConatiner}>
                <Text style={styles.statusText}>Filter by status: </Text>
                <Picker
                    selectedValue={status}
                    onValueChange={(item) => setStatus(item)}
                    style={styles.picker}

                >
                    <Picker.Item label='All' value="All" />
                    <Picker.Item label='Alive' value="Alive" />
                    <Picker.Item label='Dead' value="Dead" />
                    <Picker.Item label='Unknown' value="Unknown" />

                </Picker>
            </View>
            <View style={styles.speciesConatiner}>
                <Text style={styles.speciesText}>Filter by species: </Text>
                <Picker
                    selectedValue={species}
                    onValueChange={(item) => setSpecies(item)}
                    style={styles.picker}
                >
                    <Picker.Item label='All' value="All" />
                    <Picker.Item label='Human' value="Human" />
                    <Picker.Item label='Alien' value="Alien" />
                    <Picker.Item label='Humanoid' value="Humanoid" />
                    <Picker.Item label='Animal' value="Animal" />
                    <Picker.Item label='Unknown' value="Unknown" />

                </Picker>
            </View>
            <View style={styles.genderConatiner}>
                <Text style={styles.genderText}>Filter by gender: </Text>
                <Picker
                    style={styles.picker}
                    selectedValue={gender}
                    onValueChange={(item) => setGender(item)}

                >
                    <Picker.Item label='All' value="All" />
                    <Picker.Item label='Male' value="Human" />
                    <Picker.Item label='Female' value="Female" />
                    <Picker.Item label='Genderless' value="Genderless" />
                    <Picker.Item label='Unknown' value="Unknown" />

                </Picker>
            </View>



            <FlatList

                data={filterCharacters}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => handlePress(item.name)}>
                        <View>
                            <Text>{item.name}</Text>
                            <Text>
                                Status:{item.status},
                                Species:{item.species},
                                Gender:{item.gender}
                            </Text>
                        </View>
                    </TouchableOpacity>
                )}

            />



        </View>
    );
};

export default CardScreen

const styles = StyleSheet.create({

    Conatiner: {

    },
    inputContainer: {
        borderWidth: 1,
        marginTop: 10,
        width: 250,
        marginLeft: 50,
        borderRadius: 5,
        flexDirection: 'row',

    },
    searchInput: {
        textAlign: 'center',
        width: 200,
        fontWeight: 'bold',


    },
})