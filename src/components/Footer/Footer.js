import React from 'react';
import { View, Text } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import Styles from './Style';

const Footer = ({ navigation }) => {
    return (
        <>
            <View style={Styles.container}>
                <TouchableHighlight
                    underlayColor="transparent"
                    onPress={() => navigation.navigate('Home')}>
                    <View style={Styles.subcontainer}>
                        <Text style={Styles.texto}>Home</Text>
                    </View>
                </TouchableHighlight>
            </View>
        </>
    );
};

export default Footer;
