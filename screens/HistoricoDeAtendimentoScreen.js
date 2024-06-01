import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import historicoStyles from '../styles/HistoricoDeAtendimentoStyles';

export default function HistoricoDeAtendimentoScreen({ navigation }) {
  const [historico, setHistorico] = useState([
    { id: 1, cliente: 'João Silva', data: '01/05/2024', status: 'Concluído' },
    { id: 2, cliente: 'Maria Oliveira', data: '03/05/2024', status: 'Concluído' },
    { id: 3, cliente: 'Pedro Santos', data: '05/05/2024', status: 'Pendente' },
    // Adicione mais registros conforme necessário
  ]);

  return (
    <View style={historicoStyles.container}>
      <Text style={historicoStyles.header}>Histórico de Atendimento</Text>
      <ScrollView contentContainerStyle={historicoStyles.itemsContainer}>
        {historico.map(item => (
          <View key={item.id} style={historicoStyles.item}>
            <Text style={historicoStyles.itemText}>Cliente: {item.cliente}</Text>
            <Text style={historicoStyles.itemText}>Data: {item.data}</Text>
            <Text style={historicoStyles.itemText}>Status: {item.status}</Text>
          </View>
        ))}
      </ScrollView>
      <TouchableOpacity style={historicoStyles.button} onPress={() => navigation.goBack()}>
        <Text style={historicoStyles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}