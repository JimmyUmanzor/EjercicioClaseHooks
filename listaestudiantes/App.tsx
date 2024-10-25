import { StyleSheet, Text, View } from 'react-native';
import Lista from './Components/Hooks/HookComponents';

export default function App() {
  return (
    <Lista/>
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
