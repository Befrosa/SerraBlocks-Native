import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    Container: {
      flex: 1,
    },
  
    ContainerImage: {
      flex: 1,
      alignItems: 'center',
      paddingVertical: 30,
      borderWidth: 0.2,
    },
  
    Image: {
      width: 100,
      height: 100,
      backgroundColor: 'blue',
      alignItems: 'center',
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
      alignItems: "center",
    },

    Button:{
      justifyContent: 'center',
      height: 40,
      width: 250,
      marginBottom: 30,
      borderRadius: 20,
      borderWidth: 0.1,
      marginTop: 20,
      backgroundColor: ' rgb(199, 199, 199)',
    },

    ButtonText: {
      textAlign: 'center',
    }
  });

  export default styles;