import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from '../styles/styles';

export default function ChecklistItem({ item, toggleItem }) {
  return (
    <TouchableOpacity
      style={[styles.item, { backgroundColor: item.checked ? '#1976D2' : '#fff' }]}
      onPress={() => toggleItem(item.id)}
    >
      <Text style={[styles.itemText, { color: item.checked ? '#fff' : '#000' }]}>{item.name}</Text>
      <Text>{item.checked ? '✔️' : '❌'}</Text>
    </TouchableOpacity>
  );
}
