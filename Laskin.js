import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

export default function Laskin({ navigation }) {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [c, setC] = useState('');
  const [list, setList] = useState([]);


  function yhteenlasku(){
    const lasku = parseInt(a) + parseInt(b)
    setC(lasku)
    const x = a + " + " + b + " = " + lasku
    setList([...list, {key: x}])
  }

  function vahennys(){
    const lasku = parseInt(a) - parseInt(b)
    setC(lasku)
    const x = a + " - " + b + " = " + lasku
    setList([...list, {key: x}])
  }

  return (
    <View style={styles.container}>
      <Text>Tulos: {c}</Text>
      <TextInput style={styles.input} keyboardType='number-pad' textAlign={'center'} onChangeText={input => setA(input)} value={a}/>
      <TextInput style={styles.input} keyboardType='number-pad' textAlign={'center'} onChangeText={input => setB(input)} value={b}/>
      <View style={styles.button}>
        <Button onPress={yhteenlasku} title='+'/>
        <Button onPress={vahennys} title='-'/>
        <Button title="Historia" onPress={() => navigation.navigate('Historia', {list})}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 40,
    height: 40,
    marginBottom: 2,
    borderColor: 'gray', 
    borderWidth: 1,
  },
  button : {
    flexDirection: 'row',
    width: 100,
    margin: 2
  }
});
