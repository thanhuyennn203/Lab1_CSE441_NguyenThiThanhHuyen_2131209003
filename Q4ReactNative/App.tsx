import React from 'react';
import {View, Text, StyleSheet, ScrollView, Button, Alert} from 'react-native';

// import data from './Data';
// import Square from './Square';
import styles from './style';
// import EmployeeForm from './EmployeeForm';
// import SumDigits from './SumDigits';
// import FindMin from './FindMin';
import Hailstone from './Hailstone';
const App = () => {
  return (
    <ScrollView style={styles.container}>
      <Hailstone />
    </ScrollView>
  );
};

export default App;
