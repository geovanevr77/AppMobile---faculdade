import React from 'react';
import { View, Text } from 'react-native';
import telaDeInicioStyles from '../styles/HistoricoStyle';

export default function HistoricoAtendimentosScreen({ route }) {
  const dadosCliente = route.params ? route.params.dadosCliente : null;

  if (!dadosCliente) {
    return (
      <View style={telaDeInicioStyles.container}>
        <Text style={telaDeInicioStyles.topTitle}>Histórico de Atendimento</Text>
        <Text style={telaDeInicioStyles.errorText}>Dados do cliente não encontrados.</Text>
      </View>
    );
  }

  return (
    <View style={telaDeInicioStyles.container}>
      <Text style={telaDeInicioStyles.topTitle}>Histórico de Atendimento</Text>
      <View style={telaDeInicioStyles.infoContainer}>
        <Text style={telaDeInicioStyles.label}>Nome:</Text>
        <Text style={telaDeInicioStyles.value}>{dadosCliente.nome}</Text>
      </View>
      <View style={telaDeInicioStyles.infoContainer}>
        <Text style={telaDeInicioStyles.label}>Contato:</Text>
        <Text style={telaDeInicioStyles.value}>{dadosCliente.contato}</Text>
      </View>
      <View style={telaDeInicioStyles.infoContainer}>
        <Text style={telaDeInicioStyles.label}>Senha:</Text>
        <Text style={telaDeInicioStyles.value}>{dadosCliente.senha}</Text>
      </View>
      <View style={telaDeInicioStyles.infoContainer}>
        <Text style={telaDeInicioStyles.label}>Funcionário:</Text>
        <Text style={telaDeInicioStyles.value}>{dadosCliente.funcionario}</Text>
      </View>
    </View>
  );
}