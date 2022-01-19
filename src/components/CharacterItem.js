import { useNavigation } from '@react-navigation/native';
import { React } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import tw from 'twrnc';

const CharacterItem = ({ character }) => {
  const navigation = useNavigation();

  return (
    <View style={tw`m-4 bg-gray-800 rounded-xl`}>
      {/* Imagem do personagem */}
      <Image
        style={tw`w-full h-70 rounded-t-lg`}
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
          <TouchableOpacity>
            <Text style={tw`text-lg text-gray-300`}>
              Episódio onde apareceu a primeira vez
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CharacterItem;

const styles = StyleSheet.create({});
