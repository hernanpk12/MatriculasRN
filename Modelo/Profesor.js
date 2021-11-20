import React, { Component } from 'react';
import {AppRegistry,StyleSheet,Text,TextInput,View,Button, TouchableOpacity, Alert, } from 'react-native';
export default class persona extends Component{


  constructor(props){
        super(props);
        this.state ={id_profesor:'', id_departamento:''};

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
           profesor_id:this.state.id_profesor,
           departamento_id:this.state.id_departamento,
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
      fetch('ttp://172.16.6.8:8090/ApiMatriculasGrupoSabado/Modelo/editarProfesor.php',
      {
        method: 'PUT',
        headers: {
          'Accept':'application/json',
          'Content-type':'application/json',

        },
        body: JSON.stringify(
          {
            profesor_id:this.state.id_profesor,
            departamento_id:this.state.id_departamento,
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
      
      fetch('ttp://172.16.6.8:8090/ApiMatriculasGrupoSabado/Modelo/eliminarProfesor.php',
      {
        method: 'DELETE',
        headers: {
          'Accept':'application/json',
          'Content-type':'application/json',

        },
        body: JSON.stringify(
          {
            profesor_id:this.state.id_profesor,
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
      fetch('ttp://172.16.6.8:8090/ApiMatriculasGrupoSabado/Modelo/ListarTodosProfesores.php',
      {
        method: 'GET',
        headers: {
          'Accept':'application/json',
          'Content-type':'application/json',

        },
        body: JSON.stringify(
          {
            profesor_id:this.state.id_profesor,
            departamento_id:this.state.id_departamento,
          }
        )
      }

      ).then((response)=> response.json)
      .then((responseJson)=>
      {
            this.state({
            id_profesor: responseJson[0]['id_profesor'],
            id_departamento: responseJson[0]['id_departamento'] 
            }
        )   
      }
      )
      
      
    }
    listarPersonaId = ()=>{
      fetch('ttp://172.16.6.8:8090/ApiMatriculasGrupoSabado/Modelo/ListarProfesorid.php',
      {
        method: 'GET',
        headers: {
          'Accept':'application/json',
          'Content-type':'application/json',

        },
        body: JSON.stringify(
          {
           profesor_id:this.state.id_profesor,
           departamento_id:this.state.id_departamento,
          }
        )
      }

      ).then((response)=> response.json)
      .then((responseJson)=>
      {
            this.state({
              id_profesor: responseJson[0]['id_profesor'],
              id_departamento: responseJson[0]['id_departamento'] 
            }
        )   
      }
      )
      
      
    }
   
    render() {     
            return (  
 
           <View style = {MisEstilos.container}>
                
           </View> 
        );
      }
}
const MisEstilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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
    width: '50%',
    backgroundColor: '#00BCD4' 

  },
  TextoTitulos:{
    color: '#fff',
    textAlign: 'center',
    fontSize: 16
  },
});