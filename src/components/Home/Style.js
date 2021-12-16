import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 15,
    backgroundColor: '#C7E6F4',
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#2C67A4',
    marginBottom: 5,
    borderRadius: 20,
  },
  containerDestaque: {
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    flexDirection: 'column',
  },
  destaque: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 30,
    paddingBottom: 20,
  },
  destaque1: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
    paddingBottom: 0,
  },
});

export default styles;