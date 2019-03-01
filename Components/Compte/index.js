import React from 'react'
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native'

class Compte extends React.Component {
    render() {
        return (
            <View style={design.main_container}>
                <View >
                    <TouchableOpacity
                        onPress={() => this._searchFilms()}>
                        <Image
                            style={design.image}
                            source={require('../../Images/logo_ako.png')}
                        />
                    </TouchableOpacity>
                </View>


                <View style={design.header}>
                    <TouchableOpacity style={design.user}>
                        <Image
                            style={design.image_avatar}
                            source={require('../../Images/avatarbeta.png')}
                        />
                        <Image
                            style={design.image_crayon}
                            source={require('../../Images/crayonviolet.png')}
                        />
                    </TouchableOpacity>
                    <Text style={design.pseudo}>@pseudo</Text>
                </View>
                <View style={design.corps}>

                    <TouchableOpacity style={design.bouton}
                        title="Collections" onPress={() => this._searchFilms()}>
                        <Text style={design.text}>{'Collections'.toUpperCase()}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={design.bouton}
                        title="Réglages du temps" onPress={() => this._searchFilms()}>
                        <Text style={design.text}>{'Réglages du temps'.toUpperCase()}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={design.bouton}
                        title="Déconnexion" onPress={() => this._searchFilms()}>
                        <Text style={design.text}>{'Déconnexion'.toUpperCase()}</Text>
                    </TouchableOpacity>
                </View>


            </View>
        )
    }
}

const design = StyleSheet.create({
    main_container: {
        backgroundColor: '#41BABE',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    header: {
        flex: 1,
        position: 'relative',
        top: 0
    },
    user: {
        flex: 1,
        flexDirection: 'row',
        position: 'relative',
        top: 200
    },
    pseudo: {
        color: '#FFF',
        fontSize: 20,
        marginBottom: 5
    },
    image: {
        width: 65,
        height: 95,
        position: 'absolute',
        top: 40
    },
    image_avatar: {
        borderRadius: 50,
        width: 100,
        height: 100
    },
    image_crayon: {
        width: 20,
        height: 100,
        transform: [{ rotate: '35deg' }],
        position: 'relative',
        top: 30
    },
    corps: {
        flex: 1
    },
    bouton: {
        backgroundColor: '#9874AD',
        padding: 15,
        borderRadius: 30,
        margin: 15
    },
    text: {
        color: '#FFF',
        textTransform: 'uppercase',
        textAlign: 'center',
        fontSize: 20
    }
})

export default Compte