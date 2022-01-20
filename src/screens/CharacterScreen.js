import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import api from '../services/api';
import tw from 'twrnc';
import EpisodeItem from '../components/EpisodeItem';

const CharacterScreen = ({ route }) => {
  const { character } = route.params;

  const [episode, setEpisode] = useState([]);

  useEffect(() => {
    async function loadEpisodes() {
      const arrayEpisodes = [];

      for (const url of character.episode) {
        const response = await api.get(url);
        arrayEpisodes.push(response.data);
        setEpisode(arrayEpisodes);
      }
    }

    loadEpisodes();
  }, []);

  return (
    <SafeAreaView style={tw`flex-1`}>
      {/* Nome */}
      <Text style={tw`text-2xl text-gray-200 text-center font-bold`}>
        {character.name}
      </Text>

      {/* Gênero */}
      <Text style={tw`text-base text-gray-200 text-center font-bold`}>
        {character.gender}
      </Text>

      {/* Origem */}
      <Text style={tw`text-base text-gray-200 text-center font-bold`}>
        {character.origin.name}
      </Text>

      {/* Episódios */}
      <Text style={tw`mt-4 text-base text-gray-200 font-bold`}>Episodes: </Text>
      {episode.length === 0 && <ActivityIndicator size={25} color="#9CA3AF" />}
      <FlatList
        data={episode}
        renderItem={({ item }) => <EpisodeItem episode={item} />}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default CharacterScreen;

const styles = StyleSheet.create({});
