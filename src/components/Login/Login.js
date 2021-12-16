import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableHighlight,
  Modal,
  TextInput,
  ScrollView,
  ImageBackground,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import IconFA5 from 'react-native-vector-icons/FontAwesome5';
import Styles from './Style';

const Login = ({navigation}) => {
  const [Login, setLogin] = useState(false);
  const [Senha, setSenha] = useState(false);

  return (
    <ScrollView style={Styles.scroll}>
      <View style={Styles.container}>
        <Image
          style={Styles.image}
          source={require('./../../../assets/images/LogoSerraBlocks.png')}
        />
        <Text style={Styles.destaque}>Estoque SerraBlocks</Text>

        <TouchableHighlight
          style={Styles.button}
          underlayColor="#fff"
          onPress={() => {
            setLogin(true);
          }}>
          <View style={{flexDirection: 'row'}}>
            <Text style={Styles.buttonTexto}>ACESSAR</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight
          style={Styles.button}
          underlayColor="transparent"
          onPress={() => {
            setSenha(true);
          }}>
          <View>
            <Text style={Styles.buttonTexto}>ESQUECI MINHA SENHA</Text>
          </View>
        </TouchableHighlight>

        <Modal
          animationType="fade"
          transparent={true}
          visible={Login}
          onRequestClose={() => {
            setLogin(!Login);
          }}>
          <View style={Styles.centeredView}>
            <View style={Styles.modalView2}>
              <View style={Styles.modalHeader}>
                <Text style={Styles.destaqueStyle}>Conecte-se</Text>
                <View style={Styles.modalSub}>
                  <TouchableHighlight
                    style={Styles.closeButton}
                    underlayColor="#aaa"
                    onPress={() => {
                      setLogin(!Login);
                    }}>
                    <Icon style={Styles.iconButton} />
                  </TouchableHighlight>
                </View>
              </View>

              <TextInput style={Styles.modalInput} placeholder={'E-mail'} />
              <TextInput
                style={Styles.modalInput}
                placeholder={'Senha'}
                secureTextEntry={true}
              />

              <View style={Styles.modalCenter}>
                <TouchableHighlight
                  style={Styles.button}
                  underlayColor="#2C67A4"
                  onPress={() => navigation.navigate('Home', setLogin(!Login))}>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={Styles.buttonTexto}>ACESSAR</Text>
                  </View>
                </TouchableHighlight>
              </View>
            </View>
          </View>
        </Modal>

        <Modal
          animationType="fade"
          transparent={true}
          visible={Senha}
          onRequestClose={() => {
            setSenha(!Senha);
          }}>
          <View style={Styles.centeredView}>
            <ImageBackground style={{ width: '120%', height: '110%', marginBottom: 230}} source={{uri:'https://avatars.githubusercontent.com/u/67978908?v=4'}} />
            <View style={Styles.modalView}>
              <View style={Styles.modalHeader}>
                <Text style={Styles.destaqueStyle}>Recuperar senha</Text>
                <View style={Styles.modalSub}>
                  <TouchableHighlight
                    style={Styles.closeButton}
                    underlayColor="#2C67A4"
                    onPress={() => {
                      setSenha(!Senha);
                    }}>
                    <Icon name="close" style={Styles.iconButton} />
                  </TouchableHighlight>
                </View>
              </View>

              <TextInput style={Styles.modalInput} placeholder={'E-mail'} placeholderTextColor={'white'}/>
              <TextInput
                style={Styles.modalInput}
                placeholder={'Insira a nova senha'}
                placeholderTextColor={'white'}
                secureTextEntry={true}
              />
              <TextInput
                style={Styles.modalInput}
                placeholder={'Coloque de novo a senha'}
                placeholderTextColor={'white'}
                secureTextEntry={true}
              />

              <View style={Styles.modalCenter}>
                <TouchableHighlight
                  style={Styles.button}
                  underlayColor="#feec90">
                  <View style={{flexDirection: 'row'}}>
                    <IconFA5 style={Styles.icon} />
                    <Text style={Styles.buttonTexto}>RECUPERAR</Text>
                  </View>
                </TouchableHighlight>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </ScrollView>
  );
};

export default Login;
