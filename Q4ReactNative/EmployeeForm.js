import React from 'react';
import {View, Text, TextInput, Button, Alert} from 'react-native';

const EmployeeForm = props => {
  return (
    <View style={{padding: 20}}>
      <Text>Full Name:</Text>
      <TextInput style={{borderWidth: 1, marginBottom: 10}} />

      <Text>Age:</Text>
      <TextInput
        style={{borderWidth: 1, marginBottom: 10}}
        keyboardType="numeric"
      />

      <Text>Specialized Occupation:</Text>
      <TextInput style={{borderWidth: 1, marginBottom: 10}} />

      <Button
        title="Update"
        onPress={() => Alert.alert('Success', 'Employee updated successfully!')}
      />
    </View>
  );
};

export default EmployeeForm;
