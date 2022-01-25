import { StyleSheet } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import tw from 'twrnc';
import CharacterListScreen from '../screens/CharacterListScreen';
import CharacterScreen from '../screens/CharacterScreen';
import EpisodeScreen from '../screens/EpisodeScreen';

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, contentStyle: tw`bg-gray-900 p-3` }}
    >
      <Stack.Screen
        name="CharacterListScreen"
        component={CharacterListScreen}
      />
      <Stack.Screen name="CharacterScreen" component={CharacterScreen} />
      <Stack.Screen name="EpisodeScreen" component={EpisodeScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
