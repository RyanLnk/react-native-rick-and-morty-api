import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import tw from 'twrnc';

const Header = () => {
  return (
    <View>
      <Text style={tw`mt-3 text-3xl text-gray-200 text-center font-bold`}>
        The Rick and Morty API
      </Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
