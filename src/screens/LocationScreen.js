import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import api from '../services/api';
import tw from 'twrnc';

const LocationScreen = ({ route }) => {
  const { character } = route.params;

  const [location, setLocation] = useState([]);

  useEffect(() => {
    async function loadLocation() {
      const response = await api.get(character.location.url);
      setLocation(response.data);
    }

    loadLocation();
  }, []);

  return (
    <SafeAreaView>
      {/* Nome */}
      <Text style={tw`text-2xl text-gray-200 text-center font-bold`}>
        {location.name}
      </Text>

      {/* Tipo*/}
      <Text style={tw`text-base text-gray-200 text-center font-bold`}>
        {location.type}
      </Text>

      {/* Dimensão */}
      <Text style={tw`text-base text-gray-200 text-center font-bold`}>
        {location.dimension}
      </Text>

      <Text style={tw`mt-4 text-base text-gray-200 font-bold`}>
        Aqui vai ter uma lista com todos os moradores desse local.
      </Text>
    </SafeAreaView>
  );
};

export default LocationScreen;

const styles = StyleSheet.create({});
