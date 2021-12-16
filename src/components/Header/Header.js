import React from 'react';
import { View, Image} from 'react-native';

import Styles from './Style';

const Footer = () => {
    return (
        <>
            <View style={Styles.container}>
                <Image style={Styles.logo}
                    source={require('./../../../assets/images/LogoSerraBlocksBranco.png')}
                />
                <View style={Styles.subcontainer}>
                </View>
            </View>
        </>
    )
}

export default Footer;