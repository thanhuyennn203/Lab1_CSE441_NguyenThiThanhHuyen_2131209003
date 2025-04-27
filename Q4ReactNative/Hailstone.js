import React, {useState} from 'react';
import {View, Text, TextInput, Button, ScrollView} from 'react-native';

const Hailstone = () => {
  const [number, setNumber] = useState('');
  const [sequence, setSequence] = useState([]);

  const handleHailstone = () => {
    let n = parseInt(number);
    let seq = [];

    while (n !== 1) {
      seq.push(n);
      if (n % 2 === 0) {
        n = n / 2;
      } else {
        n = n * 3 + 1;
      }
    }
    seq.push(1);
    setSequence(seq);
  };

  return (
    <ScrollView style={{padding: 20}}>
      <Text>Enter a positive number:</Text>
      <TextInput
        style={{borderWidth: 1, marginBottom: 10}}
        keyboardType="numeric"
        value={number}
        onChangeText={setNumber}
      />
      <Button title="Generate Hailstone Sequence" onPress={handleHailstone} />
      {sequence.length > 0 && (
        <Text style={{marginTop: 10}}>Sequence: {sequence.join(' -> ')}</Text>
      )}
    </ScrollView>
  );
};

export default Hailstone;
