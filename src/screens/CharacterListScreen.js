import React, { useState, useEffect } from 'react';
import { ActivityIndicator, FlatList, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'twrnc';
import api from '../services/api';
import BlankPageLoading from '../components/BlankPageLoading';
import CharacterItem from '../components/CharacterItem';
import Header from '../components/Header';

const CharacterListScreen = () => {
  const [character, setCharacter] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);

  async function loadCharacter() {
    setLoading(true);
    if (character.length === 0 || character.length < total) {
      const response = await api.get(`/character/?page=${page}`);
      setCharacter([...character, ...response.data.results]);
      setPage(page + 1);
      setTotal(response.data.info.count);

      setLoading(false);
    }
  }

  useEffect(() => {
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
        onEndReached={loadCharacter}
        onEndReachedThreshold={0.15}
        showsVerticalScrollIndicator={false}
      />

      {loading && <ActivityIndicator size={25} color="#9CA3AF" />}
    </SafeAreaView>
  );
};

export default CharacterListScreen;

const styles = StyleSheet.create({});
