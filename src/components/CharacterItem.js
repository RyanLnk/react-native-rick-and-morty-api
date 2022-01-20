import { useNavigation } from '@react-navigation/native';
import { React, useEffect, useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import tw from 'twrnc';
import api from '../services/api';

const CharacterItem = ({ character }) => {
  const navigation = useNavigation();

  const [episode, setEpisode] = useState([]);

  useEffect(() => {
    async function loadEpisode() {
      const response = await api.get(character.episode[0]);
      setEpisode(response.data);
    }

    loadEpisode();
  }, []);

  return (
    <View style={tw`m-4 bg-gray-800 rounded-xl`}>
      {/* Imagem do personagem */}
      <Image
        style={tw`w-full h-70 rounded-t-xl`}
        source={{ uri: character.image }}
      />

      {/* Informações do personagem */}
      <View style={tw`p-2`}>
        {/* Características do personagem */}
        <View style={tw`m-2`}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('CharacterScreen', { character })
            }
          >
            <Text style={tw`text-2xl text-gray-200 font-bold`}>
              {character.name}
            </Text>
          </TouchableOpacity>

          <Text style={tw`text-base text-gray-200 font-bold`}>
            {character.status} - {character.species}
          </Text>
        </View>

        {/* Última localização */}
        <View style={tw`m-2`}>
          <Text style={tw`text-base text-gray-500 font-bold`}>
            Last known location:
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('LocationScreen', { character })}
          >
            <Text style={tw`text-lg text-gray-300`}>
              {character.location.name}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Primeira localização */}
        <View style={tw`m-2`}>
          <Text style={tw`text-base text-gray-500 font-bold`}>
            Frist seen in:
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('EpisodeScreen', { episode })}
          >
            <Text style={tw`text-lg text-gray-300`}>{episode.name}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CharacterItem;

const styles = StyleSheet.create({});
