import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	Contenedor:{
		marginRight:100,
		marginLeft:-80,
		paddingTop: 20
	},
    VistaImagenText:{
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        padding: 5
    },
	BotonesContenedor:{
		flexDirection: 'row', justifyContent: 'space-between', padding: 15
	},
	container: {
        flex:1,
		backgroundColor: "#FFFFFF",
		alignItems: 'center',
		justifyContent: 'center',
	  },
	  Image:{
		width: 120, height: 50, 
		justifyContent: 'right',
		resizeMode: 'contain',
		right: 100,
		marginLeft:30,
		marginTop: 20
	  },
	  textoBien: {
		  color: '#003F72',
		  fontSize: 25,
		  textAlign: 'center',
		  fontWeight: 'bold',
		  paddingTop: 30
	  },
	  colorBtn: {
        marginTop: 15,
        borderColor: '#003F72',
        backgroundColor: '#003F72',
        padding: 20,
        marginLeft: 50,
        marginRight: 5,
        borderRadius: 80,
    },
	colorTxtBtn: {
        color: '#FFFFFF',
        fontSize: 16,
        textAlign: 'center',
        fontWeight: 'bold',
		paddingLeft:60,
		paddingRight: 20
      },
	colorTxtLogo: {
        color: '#003F72',
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold',
		marginTop:15
      },

});

export default styles;