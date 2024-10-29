import { StyleSheet, Text, View } from 'react-native';
import Lista from './Components/Hooks/HookComponents';
import { EstudiantesProvider } from './Context/EstudiantesContext';
import React from 'react';

export default function App() {
  return (
    <EstudiantesProvider>
      <Lista />
    </EstudiantesProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
