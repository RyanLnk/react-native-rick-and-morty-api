import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'twrnc';
import api from '../services/api';
import CharacterAvatar from '../components/CharacterAvatar';

const EpisodeScreen = ({ route }) => {
  const { episode } = route.params;

  const [character, setCharacter] = useState([]);

  useEffect(() => {
    async function loadCharacter() {
      const arrayCharacters = [];

      for (const url of episode.characters) {
        const response = await api.get(url);
        arrayCharacters.push(response.data);
        setCharacter(arrayCharacters);
      }
    }

    loadCharacter();
  }, []);

  return (
    <SafeAreaView style={tw`flex-1`}>
      <Text style={tw`text-2xl text-gray-200 text-center font-bold mb-2`}>
        Characters
      </Text>

      {character.length === 0 && (
        <ActivityIndicator size={25} color="#9CA3AF" />
      )}

      <FlatList
        data={character}
        renderItem={({ item }) => <CharacterAvatar character={item} />}
        numColumns={3}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default EpisodeScreen;

const styles = StyleSheet.create({});
