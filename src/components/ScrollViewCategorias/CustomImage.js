import React, {useState} from 'react';
import {Image, StyleSheet} from 'react-native';

const CustomImage = (props) => {
  const [loeaded, setLoaded] = useState(false);
  const {imageuri} = props;
  return (
    <Image
      style={styles.capa}
      source={
        loeaded
          ? require('./../../../assets/images/not-found.png')
          : {uri: imageuri}
      }
      onError={(error) => {
        setLoaded(true);
      }}
      key={imageuri}
    />
  );
};

const styles = StyleSheet.create({
  capa: {
    width: 120,
    height: 120,
    marginBottom: 10,
    marginLeft: 10 ,
    borderWidth: 3,
    borderColor: '#1d3557',
    borderRadius: 100,
  
  },
});

export default CustomImage;
