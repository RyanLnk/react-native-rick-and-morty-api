import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'twrnc';

const EpisodeScreen = ({ route }) => {
  const { episode } = route.params;

  return (
    <SafeAreaView>
      <Text style={tw`text-2xl text-gray-200 text-center font-bold`}>
        Characters
      </Text>

      <Text style={tw`mt-4 text-base text-gray-200 font-bold`}>
        Aqui vai ter uma lista com todos os personagens desse episódio.
      </Text>
    </SafeAreaView>
  );
};

export default EpisodeScreen;

const styles = StyleSheet.create({});
