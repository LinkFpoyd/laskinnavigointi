import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function Historia ({ route, navigation }) {
  
  const {list} = route.params;

  return(
    <View style={styles.container}>
      <View style={styles.lista}> 
        <FlatList 
          data={list}
          renderItem={({ item }) =>
            <Text>{item.key}</Text>
          }
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  )
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lista: {
    marginTop: 10,    
  }
});