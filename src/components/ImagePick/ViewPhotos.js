import React, {useEffect, useState} from 'react';
import {View, Platform, FlatList, Image, StyleSheet} from 'react-native';
import {useRoute} from '@react-navigation/native';

const ViewPhotos = () => {
  const [list, setList] = useState();
  const data = useRoute().params.images;

  useEffect(() => {
    extractRequiredImageData(data);
  }, []);

  const extractRequiredImageData = () => {
    let imageData = data;
    let imageList = [];

    for (let i = 0; i < Object.keys(imageData).length; i++) {
      let data = imageData[String(i)];
      let image = {
        id: String(i),
        contentType: data.mime,
        fileSize: data.size,
        filePath: data.path,
      };

      if (Platform.OS === 'ios') {
        image.fileName = data.filename;
      } else {
        let path = data.path.split('/');
        image.fileName = path[path.length - 1];
      }

      imageList.push(image);
    }
    setList(imageList);
  };
  return (
    <View style={styles.imageViewerContainer}>
      <View style={styles.imageContainer}>
        <FlatList
          data={list}
          numColumns={2}
          renderItem={({item}) => (
            <Image style={styles.image} source={{uri: item.filePath}} />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 30,
    paddingHorizontal: 10,
    alignContent: 'center',
    backgroundColor: '#fafafa',
  },
  icon: {
    color: '#fff',
    fontSize: 26,
  },
  image: {
    flex: 1,
    width: 185,
    height: 185,
    marginBottom: 5,
  },

  button: {
    width: 180,
    height: 60,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
});

export default ViewPhotos;
