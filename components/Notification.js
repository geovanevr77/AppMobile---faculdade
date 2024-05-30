import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/styles';

export default function Notification({ message }) {
  return (
    <View style={styles.notification}>
      <Text style={styles.notificationText}>{message}</Text>
    </View>
  );
}
