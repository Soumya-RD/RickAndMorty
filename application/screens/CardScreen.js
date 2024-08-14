import { FlatList, StyleSheet, Text, TextInput, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Picker } from '@react-native-picker/picker';

const CardScreen = ({ navigation }) => {
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

    const filterCharacters = Characters.filter((character) => {
        return (
            (status === '' || character.status === status) &&
            (species === '' || character.species === species) &&
            (gender === '' || character.gender === gender) &&
            character.name.toLowerCase().includes(search.toLowerCase())
        );
    });


    // const handlePress = (name) => {
    //     navigation.navigate('DetailsScreen')
    // };

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

            <View

                style={{ flexDirection: 'row' }}
            >
                <View>
                    <Image source={require('../assets/image2.jpg')} style={{ height: 100, width: 150, marginLeft: 15, borderRadius: 15, borderWidth: 1, borderColor: '#0aff99' }} />
                    <Image source={require('../assets/image3.jpg')} style={{ height: 140, width: 100, marginLeft: 35, borderRadius: 25, borderWidth: 1, borderColor: '#fff', marginTop: 5 }} />
                    <Image source={require('../assets/image1.jpg')} style={{ height: 100, width: 150, marginLeft: 15, borderRadius: 15, borderWidth: 1, borderColor: '#0aff99', marginTop: 5 }} />
                </View>
                <View>
                    <Text style={{ fontWeight: 'bold', color: '#fff', fontSize: 20, textAlign: 'center' }}>Search Result :</Text>
                    <FlatList


                        data={filterCharacters}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (


                            <View style={{ marginTop: 1, width: 200, marginLeft: 30 }}>
                                <TouchableOpacity onPress={() => navigation.navigate('DetailsScreen', { character: item })}>
                                    <Text style={styles.nameText}>{item.name}</Text>
                                </TouchableOpacity>

                            </View>

                        )}

                    />
                </View>
            </View>





        </View>
    );
};

export default CardScreen

const styles = StyleSheet.create({

    Conatiner: {
        flex: 1,
        backgroundColor: '#0f4c5c',
        borderWidth: 2,
        borderColor: '#a1ff0a',
        borderBottomLeftRadius: 150,
        borderTopRightRadius: 100
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
        width: 220,
        fontWeight: 'bold',
        height: 40,

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
    statusConatiner: {
        marginTop: 3,
        borderWidth: 1,
        width: 250,
        marginLeft: 50,
        height: 65,
        borderRadius: 25,
        padding: 10,
        paddingBottom: 10,
        backgroundColor: '#edf2f4',
        borderColor: '#f26419'
    },
    statusText: {
        fontWeight: 'bold',

    },
    picker: {
        fontWeight: 'bold',
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
})