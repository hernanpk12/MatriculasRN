import React, { Component } from 'react';
import {AppRegistry,StyleSheet,Text,TextInput,View,Button, TouchableOpacity, Alert, } from 'react-native';
export default class persona extends Component{


  constructor(props){
        super(props);
        this.state ={id:'', nif:'',nombre:'',apellido1:'',apellido2:'',cuidad:'',direccion:'',telefono:'',fecha_nacimiento:'',sexo:'',tipo:'',clave:''};

    }

    //direccion ip:172.16.6.8

    insertarPersona = ()=>{
      //consumir API
      fetch('http://172.16.6.8:8090/ApiMatriculasGrupoSabado/Modelo/insertarPersona.php',
      {
        method: 'POST',
        headers:{
          'Accept':'application/json',
          'content-type':'application/json',
        },

        body: JSON.stringify(
          {
           persona_id:this.state.id,
           persona_nif:this.state.nif,
           persona_nombre:this.state.nombre,
           persona_apellido1:this.state.apellido1,
           persona_apellido2:this.state.apellido2,
           persona_cuidad:this.state.cuidad,
           persona_direccion:this.state.direccion,
           persona_telefono:this.state.telefono,
           persona_fecha_nacimiento:this.state.fecha_nacimiento,
           persona_sexo:this.state.sexo,
           persona_tipo:this.state.tipo,
           persona_clave:this.state.clave
          }
        )
      }
      ).then((response)=> response.json())
      .then((responseJson)=> 
      {
        alert(responseJson);

      }).catch((error)=>
      {
        console.error(error);
      }
      );




    }
    actualizarPersona = ()=>{
      fetch('ttp://172.16.6.8:8090/ApiMatriculasGrupoSabado/Modelo/editarPersona.php',
      {
        method: 'PUT',
        headers: {
          'Accept':'application/json',
          'Content-type':'application/json',

        },
        body: JSON.stringify(
          {
           persona_id:this.state.id,
           persona_nif:this.state.nif,
           persona_nombre:this.state.nombre,
           persona_apellido1:this.state.apellido1,
           persona_apellido2:this.state.apellido2,
           persona_cuidad:this.state.cuidad,
           persona_direccion:this.state.direccion,
           persona_telefono:this.state.telefono,
           persona_fecha_nacimiento:this.state.fecha_nacimiento,
           persona_sexo:this.state.sexo,
           persona_tipo:this.state.tipo,
           persona_clave:this.state.clave
          }
        )
      }

      ).then((response)=> response.json())
      .then((responseJson)=>
      {
        alert('registro Actualizado');
      }
      ).catch((error)=>
      {
        console.error(error);
      }
      )
      
    }
    eliminarPersona = ()=>{
      
      fetch('ttp://172.16.6.8:8090/ApiMatriculasGrupoSabado/Modelo/eliminarpersona.php',
      {
        method: 'DELETE',
        headers: {
          'Accept':'application/json',
          'Content-type':'application/json',

        },
        body: JSON.stringify(
          {
          persona_id:this.state.id,
          }
        )
      }

      ).then((response)=> response.json())
      .then((responseJson)=>
      {
        alert('registro eliminado');
      }
      ).catch((error)=>
      {
        console.error(error);
      }
      )
      
      
    }
    listarPersona = ()=>{
      fetch('ttp://172.16.6.8:8090/ApiMatriculasGrupoSabado/Modelo/ListarTodaslPersonas.php',
      {
        method: 'GET',
        headers: {
          'Accept':'application/json',
          'Content-type':'application/json',

        },
        body: JSON.stringify(
          {
            persona_id:this.state.id,
            persona_nif:this.state.nif,
            persona_nombre:this.state.nombre,
            persona_apellido1:this.state.apellido1,
            persona_apellido2:this.state.apellido2,
            persona_cuidad:this.state.cuidad,
            persona_direccion:this.state.direccion,
            persona_telefono:this.state.telefono,
            persona_fecha_nacimiento:this.state.fecha_nacimiento,
            persona_sexo:this.state.sexo,
            persona_tipo:this.state.tipo,
            persona_clave:this.state.clave
          }
        )
      }

      ).then((response)=> response.json)
      .then((responseJson)=>
      {
            this.state({
            id: responseJson[0]['id'],
            nif: responseJson[0]['nif'] ,
            nombre: responseJson[0]['nombre'],
            apellido1: responseJson[0]['apellido1'],
            apellido2: responseJson[0]['apellido2'],
            cuidad: responseJson[0]['cuidad'],
            direccion: responseJson[0]['direccion'],
            telefono: responseJson[0]['telefono'],
            fecha_nacimiento: responseJson[0]['fecha_nacimiento'],
            sexo: responseJson[0]['sexo'],
            tipo: responseJson[0]['tipo'],
            clave: responseJson[0]['clave']
            }
        )   
      }
      )
      
      
    }
    listarPersonaId = ()=>{
      fetch('ttp://172.16.6.8:8090/ApiMatriculasGrupoSabado/Modelo/ListarPersonaid.php',
      {
        method: 'GET',
        headers: {
          'Accept':'application/json',
          'Content-type':'application/json',

        },
        body: JSON.stringify(
          {
            persona_id:this.state.id,
            persona_nif:this.state.nif,
            persona_nombre:this.state.nombre,
            persona_apellido1:this.state.apellido1,
            persona_apellido2:this.state.apellido2,
            persona_cuidad:this.state.cuidad,
            persona_direccion:this.state.direccion,
            persona_telefono:this.state.telefono,
            persona_fecha_nacimiento:this.state.fecha_nacimiento,
            persona_sexo:this.state.sexo,
            persona_tipo:this.state.tipo,
            persona_clave:this.state.clave
          }
        )
      }

      ).then((response)=> response.json)
      .then((responseJson)=>
      {
            this.state({
            nif: responseJson[0]['nif'] ,
            nombre: responseJson[0]['nombre'],
            apellido1: responseJson[0]['apellido1'],
            apellido2: responseJson[0]['apellido2'],
            cuidad: responseJson[0]['cuidad'],
            direccion: responseJson[0]['direccion'],
            telefono: responseJson[0]['telefono'],
            fecha_nacimiento: responseJson[0]['fecha_nacimiento'],
            sexo: responseJson[0]['sexo'],
            tipo: responseJson[0]['tipo'],
            clave: responseJson[0]['clave']
            }
        )   
      }
      )
      
      
    }
   
    render() {     
            return (  
 
           <View style = {MisEstilos.Maincontainer}>
              <Text style ={{fontSize:20, textAlign: 'center', marginBottom: 7}}>Registro de personas</Text>
              <TextInput style = {MisEstilos.TextoInput} placeholder="Ingrese el id" onChangeText={id => this.setState({id:id})} underlineColorAndroid='transparent' value={this.state.id}> </TextInput>
              <TextInput style = {MisEstilos.TextoInput} placeholder="Ingrese el nif" onChangeText={nif => this.setState({nif:nif})} underlineColorAndroid='transparent' value={this.state.nif}> </TextInput>    

              <TouchableOpacity activeOpacity={0.4} style={MisEstilos.EstiloBoton} onPress={this.insertarPersona}> </TouchableOpacity>


           </View> 
        );
      }
}

const MisEstilos = StyleSheet.create({
  Maincontainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
  TextoInput:{
    textAlign: 'center',
    width: '50%',
    marginBottom: 7,
    height: 40,
    borderWidth: 1,
    borderColor: '#FF5722',
    borderRadius: 5,

  },
  EstiloBoton:{

    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 5,
    marginBottom: 7,
    width: '90%',
    backgroundColor: '#00BCD4' 

  },
  TextoTitulos:{
    color: '#fff',
    textAlign: 'center',
    fontSize: 16
  },
  RowViewContainer:{
    fontSize:20,
    paddingRight:10,
    paddingTop:10,
    paddingLeft:10,
    paddingBottom:10
  }
});