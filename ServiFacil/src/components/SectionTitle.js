import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SectionTitle({ children, style }) {
  return (
    <Text style={[styles.title, style]}>{children}</Text>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#222d3d',
    marginBottom: 10,
    marginTop: 10,
  },
});
