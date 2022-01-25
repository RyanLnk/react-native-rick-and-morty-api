import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'twrnc';
import api from '../services/api';
import BlankPageLoading from '../components/BlankPageLoading';
import CharacterItem from '../components/CharacterItem';
import Header from '../components/Header';

const CharacterListScreen = () => {
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    async function loadCharacter() {
      const response = await api.get('/character');
      setCharacter(response.data.results);
    }

    loadCharacter();
  }, []);

  if (character.length === 0) {
    return <BlankPageLoading />;
  }

  return (
    <SafeAreaView style={tw`flex-1`}>
      <Header />
      <FlatList
        data={character}
        renderItem={({ item }) => <CharacterItem character={item} />}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default CharacterListScreen;

const styles = StyleSheet.create({});
