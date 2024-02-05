import { StatusBar } from 'expo-status-bar';
import {Button, Image, StyleSheet, Text, TextInput, View} from 'react-native';

const Separator = () => <View style={styles.separator} />;

export default function App() {
  return (
    <View style={styles.container}>
      <Encabezado/>
      <Cuerpo/>
      <Pie/>
    </View>
  );
}
export const Encabezado = () => {
  return (
    <View style={styles.encabezado}>
      <Image
        source={require('./assets/logo.png')}
        style={styles.imagenEncabezado}
      />
    </View>
  );
}

export const Cuerpo=()=>{
  return(
    <View style={styles.cuerpo}>
        <Text style={styles.texto1}>¡Hola!</Text>
        <Separator />
        <Text style={styles.texto2}>Inicia sesión con tu correo electrónico</Text>
        <Separator />
        <Login/>
    </View>
  )
}

export const Boton=({texto,logo,accion,colorA,colorB})=>{
  return(
    <Pressable
      style={({pressed})=>[{
        backgroundColor:pressed?colorB:colorA,
        margin: pressed?10:5
      },styles.boton]}
      onPress={accion}
      >
      <Image 
      style={styles.logoB}
      source={logo}
      />
      <Text style={styles.textoB} >{texto}</Text>
    </Pressable>
  )
}

export const Login=()=>{
  return(
    <View>
      <TextInput style={styles.caja} placeholder='Correo electrónico*'/>
      <Separator />
      <TextInput style={styles.caja} placeholder='Contraseña*'/>
      <Text style={styles.texto3}>¿Olvidaste tu contraseña?</Text>
      <Separator />
      <Button color="lightskyblue" title='INICIAR SESIÓN'/>
      <Separator />
      <Text style={styles.texto4}>¿No tienes cuenta?</Text>
    </View>
  )
}
export const Pie=()=>{
  //aqui podria tener varias operaciones sin problemas 
  return(
    <View style={styles.pie}>
        <Image
        source={require('./assets/crea.jpg')}
        style={styles.imagenPie}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'stretch',
    justifyContent: 'center',
  },
  encabezado: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    paddingTop: 125,
  },
  imagenEncabezado: {
    width: 250,
    height: 45,
    borderRadius:4,
  },
  cuerpo:{
    flex:8,
    alignItems: 'center',
    alignSelf: 'center',
  },
  texto1:{
    color: 'black',
    fontSize: 40,
    paddingTop: 40,
  },
  texto2:{
    color: 'black',
    fontSize: 15,
    paddingTop: 10,
  },  
  textoB:{
    color:'white',
    fontSize:20
  },
  logoB:{
    height:35,
    width:35,
    marginRight:7
  },
  caja:{
    height:40,
    borderColor:'gray',
    height:50,
    borderBottomWidth:1,
    paddingLeft:10,
    width:320,
    fontSize:16,
  },
  texto3:{
    color: 'lightskyblue',
    fontSize: 15,
    alignSelf: 'center',
    paddingTop: 25,
  },
  texto4:{
    color: 'black',
    fontSize: 15,
    alignSelf: 'center',
    fontSize:20,
  },
  
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  separator: {
    paddingTop: 25,
  },
  pie:{
    flex:17,
    flexDirection:'row',
    justifyContent:'space-evenly',
    alignItems:'center',
  },
  imagenPie: {
    width: 330,
    height: 55,
    borderRadius:4,
  },
});