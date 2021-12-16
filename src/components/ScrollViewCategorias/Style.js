import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2C67A4',
    },
    Titulo: {
        color: '#000000',
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold',
        paddingBottom: 20,
    },
    containerC: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    capa: {
        width: 180,
        height: 180,
        marginBottom: 5,
        borderWidth: 1,
        borderColor: '#1d3557',
        borderRadius: 5
    },
    CapaB: {
        marginRight: 3,
    },
    capaD: {
        marginBottom: 5,
        color: '#000000',
        fontSize: 15,
        fontWeight: 'bold',
        textAlign:'center',
       
    },
    CapaT: {
        color: '#000000',
        textAlign: 'center',
        marginBottom: 10
    },
});

export default styles;
