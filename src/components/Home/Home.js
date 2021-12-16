import React from 'react';
import {ScrollView, Text, View, TouchableHighlight} from 'react-native';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ListarProdutoPorCategoria from '../../components/ScrollViewCategorias/ScrollViewCategorias';
import StatusBar from 'react-native'
import Styles from './Style';

const Home = ({navigation}) => {
  return (
    <>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false} style={Styles.container}>
        <View style={Styles.containerDestaque}>
          <View style={{flexDirection: 'row'}}>
            <Text style={Styles.destaque}>Produto estoque</Text>
          </View>
          <TouchableHighlight
            style={Styles.button}
            underlayColor="transparent"
            onPress={() => {
              navigation.navigate('ProdCadastrar');
            }}>
            <View>
              <Text style={Styles.destaque1}>Cadastrar Produto</Text>
            </View>
          </TouchableHighlight>
        </View>
        <ListarProdutoPorCategoria navigation={navigation} />
      </ScrollView>
      <Footer navigation={navigation} />
    </>
  );
};

export default Home;
