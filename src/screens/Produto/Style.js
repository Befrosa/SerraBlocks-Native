import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  Container: {
    flex: 1
  },

  ContainerImage: {
    flex: 1,
    alignItems: 'center',
    marginBottom: 20,
    marginLeft:-140,
    height:300,
    width:700
  },

  ContainerButton: {
    borderWidth: 0.1,
    elevation: 0.2,
  },

  Input: {
    marginLeft: 15,
    paddingVertical: 15,
    justifyContent: 'center',
  },

  ContainerButtonCadastrar: {
    flex: 1,
    alignItems: 'center'
  },

  Button: {
    justifyContent: 'center',
    height: 40,
    width: 250,
    marginBottom: 30,
    borderRadius: 20,
    borderWidth: 0.1,
    marginTop: 20,
    backgroundColor: '#e85d04',
  },

  ButtonText: {
    textAlign: 'center',
    color: '#000000',
    fontWeight:'bold'
  },

  Att: {
      textAlign: 'center',
      fontSize: 30,
      fontWeight:'bold'
  },
});

export default styles;
