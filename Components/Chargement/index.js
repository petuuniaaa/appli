import React from 'react'
import { StyleSheet, View, Image } from 'react-native'

class Chargement extends React.Component {
    RedirectionJavascript() {
    }

    // onLoad={() => setTimeout(() => 3500)}

    render() {
        return (
            <View style={design.main_container} >
                <Image
                    source={require('../../Images/ako.png')}
                    style={design.image}
                />
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
    image: {
        width: 200,
        height: 200,
    }
})

export default Chargement
