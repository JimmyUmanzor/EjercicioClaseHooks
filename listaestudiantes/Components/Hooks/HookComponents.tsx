import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Estudiante } from '../../Modelos/Estudiante';
import { EstudiantesProvider } from '../../Context/EstudiantesContext';

export default function Lista() {
  const [estudiantes, setEstudiantes] = useState([
    { id: '1', nombre: 'Juan' },
    { id: '2', nombre: 'María' },
    { id: '3', nombre: 'Carlos' },
    { id: '4', nombre: 'Ana' },
    { id: '5', nombre: 'Jimmy' },
    { id: '6', nombre: 'Lucía' },
    { id: '7', nombre: 'Hillary' },
    { id: '8', nombre: 'Diana' },
    { id: '9', nombre: 'Luis' },
    { id: '10', nombre: 'Sofía' },
  ]);

useEffect(() => {
 const temporizador = setTimeout(() => {
   const nuevosEstudiantes = [
    { id: '11', nombre: 'Miguel' },
    { id: '12', nombre: 'Laura' },
    { id: '13', nombre: 'Rafael' },
    { id: '14', nombre: 'Valeria' },
    { id: '15', nombre: 'Fernando' }, ];
setEstudiantes((prevEstudiantes) => [...prevEstudiantes, ...nuevosEstudiantes]);
    }, 5000);
    return () => clearTimeout(temporizador);
   }, []);

  const renderEstudiante = ({ item }: { item: Estudiante }) => (
    <View>
      <Text style={styles.texto}>{item.id}.-{item.nombre}</Text>
    </View>
  );

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Lista de Estudiantes</Text>
      <FlatList
        data={estudiantes}
        keyExtractor={(item) => item.id}
        renderItem={renderEstudiante}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  contenedor: {
    flex: 2,
    backgroundColor: 'white',
  },
  titulo: {
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20
  },
  texto: {
    fontSize: 18

  },
});