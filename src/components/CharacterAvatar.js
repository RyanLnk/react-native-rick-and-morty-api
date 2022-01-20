import { StyleSheet, View, Image } from 'react-native';
import React from 'react';
import tw from 'twrnc';

const CharacterAvatar = ({ character }) => {
  return (
    <View style={tw`w-28 h-28 m-1 bg-gray-800 rounded-xl`}>
      <Image
        style={tw`w-full h-full rounded-xl`}
        source={{ uri: character.image }}
      />
    </View>
  );
};

export default CharacterAvatar;

const styles = StyleSheet.create({});
