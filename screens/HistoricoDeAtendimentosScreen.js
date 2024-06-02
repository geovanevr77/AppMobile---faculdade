import React from 'react';
import { View, Text } from 'react-native';
import telaDeInicioStyles from '../styles/HistoricoStyle';

export default function HistoricoAtendimentosScreen() {
  return (
    <View style={telaDeInicioStyles.container}>
      <Text style={telaDeInicioStyles.header}>Histórico de Atendimento</Text>
    </View>
  );
}
