import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, search } from 'react-native';
import { Searchbar, Button, Headline } from 'react-native-paper';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const onChangeSearch = query => setSearchQuery(query);

  // submit query and initiates the search
  const onSubmit = query => console.log('wassup mfer', query)

  return (
    <View style={styles.container}>
      <Headline>WindowShop</Headline>
      {/* TODO implement camera icon that will take you to camera app and scan barcode auto search */}
      <Searchbar 
        placeholder="Search Product"
        icon="camera"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      <Button 
        mode='contained'
        // loading={}
        onPress={() => onSubmit(searchQuery)}
        style={{
          marginTop: 25
        }}
      >Submit</Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 25
  },
});
