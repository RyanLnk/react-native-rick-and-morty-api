import React from 'react';
import { StyleSheet, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const BlankPageLoading = () => {
  return (
    <SafeAreaView>
      <ActivityIndicator size={25} color="#9CA3AF" />
    </SafeAreaView>
  );
};

export default BlankPageLoading;

const styles = StyleSheet.create({});
