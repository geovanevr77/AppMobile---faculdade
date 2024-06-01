import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Animated, Easing } from 'react-native';
import ChecklistItem from '../components/ChecklistItem';
import styles from '../styles/styles';

export default function ChecklistScreen({ navigation }) {
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

  const [isChecklistSent, setIsChecklistSent] = useState(false);
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const toggleItem = id => {
    const updatedItems = items.map(item =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(updatedItems);
  };

  const submitChecklist = () => {
    const allChecked = items.every(item => item.checked);
    if (!allChecked) {
      console.log('Ainda há itens não marcados.');
      return;
    }

    console.log('Check-list enviado:', items.filter(item => item.checked));
    setIsChecklistSent(true);
  };

  const handleButtonClick = () => {
    setIsButtonClicked(true);
    submitChecklist();
  };

  const handleReturnToInicio = () => {
    navigation.navigate('TelaDeInicio');
  };

  const animatedValue = new Animated.Value(0);

  Animated.loop(
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 5000,
      easing: Easing.linear,
      useNativeDriver: false,
    })
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
      <View style={styles.titleContainer}>
        <Text style={styles.header}>CHECK-LIST LAVANDERIA LAUNDRY EXPRESS</Text>
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
      <TouchableOpacity
        style={[styles.button, isButtonClicked && { backgroundColor: isChecklistSent ? '#4CAF50' : '#1976D2' }]}
        onPress={handleButtonClick}
        disabled={isChecklistSent} // Desabilita o botão se o checklist já foi enviado
      >
        <Text style={styles.buttonText}>
          {isChecklistSent ? 'ENVIADO COM SUCESSO' : 'Enviar Check-list'}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleReturnToInicio}>
        <Text style={styles.buttonText}>Voltar para a Tela Inicial</Text>
      </TouchableOpacity>
    </Animated.View>
  );
}
