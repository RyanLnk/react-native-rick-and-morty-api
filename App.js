import { NavigationContainer } from '@react-navigation/native';
import { StatusBar, StyleSheet } from 'react-native';
import StackNavigator from './src/components/StackNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
      <StatusBar backgroundColor={'#111827'} />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
