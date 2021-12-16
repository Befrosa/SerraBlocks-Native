import React, {useState, useEffect} from 'react';
import {View, Image, StyleSheet} from 'react-native';

import ImagePicker from 'react-native-image-crop-picker';
import {ActionSheet, Root} from 'native-base';
import {TouchableOpacity} from 'react-native-gesture-handler';

//import styles from './Style';

const ImagePick = (props) => {
  const [resource, setResource] = useState('');
  const {url} = props;

  useEffect(() => {
    url(resource);
  }, [resource, url]);

  const handleRemoveImage = () => {
    setResource('');
  };
  const handleSelectImage = () => {
    const buttons = [
      {text: 'Galeria', icon: 'aperture', iconColor: '#ea943b'},
      {text: 'Remover', icon: 'trash', iconColor: '#fa213b'},
    ];
    ActionSheet.show(
      {
        options: buttons,
        cancelButtonIndex: 2,
      },
      (buttonIndex) => {
        switch (buttonIndex) {
          case 0:
            choosePhotosFromGallery();
            break;
          case 1:
            handleRemoveImage();
            break;
          default:
            break;
        }
      },
    );
  };

  const choosePhotosFromGallery = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 200,
      multiple: false,
    })
      .then((images) => {
        setResource(images.path);
      })
      .catch((err) => {
        console.log(' Error fetching images from gallery ', err);
      });
  };
  return (
    <Root>
      <View style={styles.container}>
        <TouchableOpacity onPress={handleSelectImage}>
          {resource === '' ? (
            <Image
              style={styles.image}
              source={require('./../../../assets/images/not-found.png')}
            />
          ) : (
            <Image style={styles.image} source={{uri: resource}} />
          )}
        </TouchableOpacity>
      </View>
    </Root>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    marginTop: 50,
  },
  image: {
    margin: 5,
    width: '100%',
    minWidth: '50%',
    height: 150,
  },
});

export default ImagePick;
