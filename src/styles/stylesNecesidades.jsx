import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#FFFFFF',
    },
    Image:{
        width: 60, 
        height: 60,
        resizeMode: 'cover',
        marginRight: 10,
    },
    anotherImage: {
        width: 35, 
        height: 35, 
        resizeMode: 'cover',
        position: 'absolute',
        top: '50%',  
        left: '50%', 
        transform: [{ translateX: -16.5 }, { translateY: -30.5 }],
        borderRadius: 10, 
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    item: {
        backgroundColor: '#FFFFFFB3',
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
        width: '30%',
        borderColor: '#003F72',
    },
    title: {
        fontSize: 10,
        color: '#003F72',
    },
    titleNumber:{
        fontSize: 10,
        color:"#FFFFFF",
        transform: [{ translateX: -2 }, { translateY: -18.5 }],
    },
    textoBien: {
        color: '#003F72',
        fontSize: 15,
        textAlign: 'center',
        fontWeight: 'bold',
        padding:10
    },
    //estilos descripcion de patrones
    Contenedor:{
		marginRight:100,
		marginLeft:-80
	},
    containerDev: {
		backgroundColor: "#FFFFFF",
        alignItems: 'center',
		justifyContent: 'center',
		flex:1
	},
    anotherImageDev: {
        width: 35, 
        height: 35, 
        resizeMode: 'cover',
        position: 'absolute',
        top: '50%',  
        left: '50%', 
        transform: [{ translateX: -218.5 }, { translateY: -15.5 }],
        borderRadius: 10, 
    },
    txtArea: {
        color: '#003F72',
        fontSize: 13,
        textAlign: 'left',
        fontWeight: 'bold',
        marginLeft: 15,
        marginRight:10
    },
    colorTxtBtn: {
        color: '#003F72',
        fontSize: 14,
        textAlign: 'center',
        width: 150,
        fontWeight: 'bold',
    },
    colorBtn: {
        marginTop: 40,
        borderColor: '#EAAB00',
        backgroundColor: '#EAAB00',
        padding: 10,
        marginLeft: 90,
        borderRadius: 10,
        paddingLeft:40,
        paddingRight:40
    },
    colorTxtLogo: {
        color: '#003F72',
        fontSize: 15,
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop:20,
        marginLeft: 40
    },
});

export default styles;