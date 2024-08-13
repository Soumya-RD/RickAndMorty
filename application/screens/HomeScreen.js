import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.Container}>
            <View>
                {/* All Character */}
                <View style={styles.allCharacterContainer}>
                    <Text style={styles.allCharacterText}>All Character</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('CardScreen')}>
                        <Image source={require('../assets/allCharacter.jpg')} style={styles.characterImage} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.aliveDeadView} >

                <View style={styles.aliveCharacterContainer}>
                    {/* Alive Characters */}

                    <Text style={styles.aliveCharacterText}>Alive Character</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('AliveCardScreen')}>
                        <Image source={require('../assets/ali.png')} style={styles.characterImage} />
                    </TouchableOpacity>

                </View>
                <View style={styles.deadCharacterContainer}>
                    {/* Dead Characters */}


                    <Text style={styles.deadCharacterText}>Dead Character</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('DeadCardScreen')}>
                        <Image source={require('../assets/dead.jpg')} style={styles.characterImage} />
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    Container: {
        backgroundColor: '#003049',
        flex: 1
    },

    allCharacterContainer: {
        marginTop: 50,
        marginLeft: 100,
        borderWidth: 1,
        height: 200,
        width: 150,
        borderRadius: 25,
        backgroundColor: '#000',
        borderColor:'#fff'
    },
    allCharacterText: {

        fontWeight: 'bold',
        textAlign: 'center',
        color: '#fff'

    },
    characterImage: {
        height: 180,
        width: 145,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        marginLeft: 1,

    },
    aliveDeadView: {
        flexDirection: 'row',
        marginTop: 40,
        marginLeft: 20
    },
    aliveCharacterContainer: {
        borderWidth: 1,
        height: 200,
        width: 150,
        borderRadius: 25,
        backgroundColor: '#000',
         borderColor:'#fff'
    },

    deadCharacterContainer: {
        borderWidth: 1,
        height: 200,
        width: 150,
        borderRadius: 25,
        marginLeft: 20,
        backgroundColor: '#000',
         borderColor:'#fff'
    },
    aliveCharacterText: {

        fontWeight: 'bold',
        textAlign: 'center',
        color: '#fff'
    },
    deadCharacterText: {

        fontWeight: 'bold',
        textAlign: 'center',
        color: '#fff'
    }


})