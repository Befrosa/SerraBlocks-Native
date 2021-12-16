import { StyleSheet } from 'react-native';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

const styles = StyleSheet.create({
    scroll: {
        backgroundColor: '#C7E6F4'
    },
    container: {
        flex: 1,
        alignContent: 'center',
        alignItems: 'center',
        paddingVertical: 120,
        paddingHorizontal: 35
    },
    image: {
        marginBottom: 150,
        padding: 10,
        width: 300,
        height: 80
    },
    destaque: {
        paddingBottom: 200,
        color: '#2C67A4',
        fontSize: 26,
        textAlign: 'center',
        fontWeight: 'bold'
    },
      button: {
        flexDirection: 'row',
        marginBottom: 30,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 6,
        backgroundColor: '#2C67A4'
        
    },
    buttonTexto: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20
    },
    link: {
        paddingBottom: 60,
        color: '#fff'
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    modalCenter: {
        alignItems: 'center',
        alignContent: 'center',
    },
    modalView: {
        position: 'absolute',
        bottom: 0,
        backgroundColor: "white",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        width: '90%',
        padding: 30,
        paddingBottom: 0,
        shadowColor: "#000",
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        backgroundColor: 'rgba(0,0,0,.1)'
    },

    modalView2: {
        position: 'absolute',
        bottom: 0,
        backgroundColor: "white",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        width: '90%',
        padding: 30,
        paddingBottom: 0,
        shadowColor: "#000",
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },

    modalHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    modalSub: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    closeButton: {
        position: 'absolute',
        top: 0,
        right: 0
    },
    iconButton: {
        marginTop: 1,
        marginRight: 5,
        color: 'white',
        fontSize: 26
    },
    destaqueStyle: {
        marginBottom: 30,
        fontSize: 20,
        color: 'white'
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
    },
    modalInput: {
        height: 50,
        marginBottom: 15,
        padding: 5,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        
    }
});

export default styles;