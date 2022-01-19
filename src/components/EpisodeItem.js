import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import tw from 'twrnc';

const EpisodeItem = ({ episode }) => {
  const navigation = useNavigation();

  return (
    <View style={tw`my-2 p-2 bg-gray-800 rounded-lg`}>
      <TouchableOpacity
        onPress={() => navigation.navigate('EpisodeScreen', { episode })}
      >
        <Text style={tw`text-lg text-gray-300`}>{episode.name}</Text>
      </TouchableOpacity>
      <Text style={tw`text-base text-gray-500`}>{episode.air_date}</Text>
      <Text style={tw`text-base text-gray-500`}>{episode.episode}</Text>
    </View>
  );
};

export default EpisodeItem;

const styles = StyleSheet.create({});
