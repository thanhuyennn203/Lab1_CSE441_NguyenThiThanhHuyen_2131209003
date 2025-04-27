import React, {useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';

const SumDigits = () => {
  const [number, setNumber] = useState('');
  const [sum, setSum] = useState(null);

  const handleSum = () => {
    if (number.length === 0) return;
    const first = parseInt(number[0]);
    const last = parseInt(number[number.length - 1]);
    setSum(first + last);
  };

  return (
    <View style={{padding: 20}}>
      <Text>Enter a number:</Text>
      <TextInput
        style={{borderWidth: 1, marginBottom: 10}}
        keyboardType="numeric"
        value={number}
        onChangeText={setNumber}
      />
      <Button title="Sum First + Last Digit" onPress={handleSum} />
      {sum !== null && <Text>Result: {sum}</Text>}
    </View>
  );
};

export default SumDigits;
