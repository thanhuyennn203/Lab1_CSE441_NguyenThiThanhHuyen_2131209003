import React, {useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';

const FindMin = () => {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [c, setC] = useState('');
  const [min, setMin] = useState(null);

  const handleFindMin = () => {
    const nums = [parseFloat(a), parseFloat(b), parseFloat(c)];
    setMin(Math.min(...nums));
  };

  return (
    <View style={{padding: 20}}>
      <Text>Enter three numbers:</Text>
      <TextInput
        style={{borderWidth: 1, marginBottom: 10}}
        keyboardType="numeric"
        value={a}
        onChangeText={setA}
      />
      <TextInput
        style={{borderWidth: 1, marginBottom: 10}}
        keyboardType="numeric"
        value={b}
        onChangeText={setB}
      />
      <TextInput
        style={{borderWidth: 1, marginBottom: 10}}
        keyboardType="numeric"
        value={c}
        onChangeText={setC}
      />
      <Button title="Find Min" onPress={handleFindMin} />
      {min !== null && <Text>Min: {min}</Text>}
    </View>
  );
};

export default FindMin;
