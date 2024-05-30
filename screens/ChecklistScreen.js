import React, { useState } from 'react';
import { View, ScrollView, TouchableOpacity, Text, Animated, Easing } from 'react-native';
import ChecklistItem from '../components/ChecklistItem';
import Notification from '../components/Notification';
import styles from '../styles/styles';

export default function ChecklistScreen() {
  const [items, setItems] = useState([
    { id: 1, name: 'Recepção de Peças', checked: false },
    { id: 2, name: 'Separação por Tipo de Tecido', checked: false },
    { id: 3, name: 'Verificar Manchas', checked: false },
    { id: 4, name: 'Produto de Limpeza Adequado', checked: false },
    { id: 5, name: 'Lavagem das Peças', checked: false },
    { id: 6, name: 'Enxágue', checked: false },
    { id: 7, name: 'Secagem', checked: false },
    { id: 8, name: 'Dobragem', checked: false },
  ]);

  const [showSuccessNotification, setShowSuccessNotification] = useState(false);

  const toggleItem = id => {
    const updatedItems = items.map(item =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(updatedItems);
  };

  const submitChecklist = () => {
    console.log('Check-list enviado:', items.filter(item => item.checked));
    setShowSuccessNotification(true);
    setTimeout(() => setShowSuccessNotification(false), 3000);
  };

  const animatedValue = new Animated.Value(0);
  Animated.loop(
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 5000,
      easing: Easing.linear,
      useNativeDriver: false,
    }),
  ).start();

  const interpolateColor = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['#fff', '#B0E0E6'],
  });
  const animatedStyle = {
    backgroundColor: interpolateColor,
  };

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      {showSuccessNotification && (
        <Notification message="ENVIADO COM SUCESSO!" />
      )}
      <View style={styles.titleContainer}>
        <Text style={styles.header}>Check-list Lavanderia Laundry Express</Text>
      </View>
      <ScrollView contentContainerStyle={styles.itemsContainer}>
        {items.map(item => (
          <ChecklistItem
            key={item.id}
            item={item}
            toggleItem={toggleItem}
          />
        ))}
      </ScrollView>
      <TouchableOpacity style={styles.button} onPress={submitChecklist}>
        <Text style={styles.buttonText}>Enviar Check-list</Text>
      </TouchableOpacity>
    </Animated.View>
  );
}