import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList } from 'react-native';
import historicoStyles from '../styles/HistoricoStyle';

export default function HistoricoAtendimentosScreen({ route }) {
  const dadosSimulados = [
    { nome: 'João Silva', contato: '11987654321', senha: '12', funcionario: 'Pedro', dateTime: '01/01/2024 10:00' },
    { nome: 'Maria Oliveira', contato: '11987654322', senha: '23', funcionario: 'Ana', dateTime: '02/01/2024 11:00' },
    { nome: 'Carlos Souza', contato: '11987654323', senha: '34', funcionario: 'Lucas', dateTime: '03/01/2024 12:00' }
  ];

  const [historico, setHistorico] = useState(dadosSimulados);
  const [busca, setBusca] = useState('');
  const [atendimentosFiltrados, setAtendimentosFiltrados] = useState(dadosSimulados);
  const dadosCliente = route.params?.dadosCliente;

  useEffect(() => {
    if (dadosCliente) {
      setHistorico(prevHistorico => [...prevHistorico, dadosCliente]);
    }
  }, [dadosCliente]);

  useEffect(() => {
    if (busca === '') {
      setAtendimentosFiltrados(historico);
    } else {
      const historicoFiltrado = historico.filter(atendimento => {
        const termoBusca = busca.toLowerCase();
        return (
          atendimento.nome.toLowerCase().includes(termoBusca) ||
          atendimento.senha.includes(termoBusca) ||
          atendimento.dateTime.includes(termoBusca)
        );
      });
      setAtendimentosFiltrados(historicoFiltrado);
    }
  }, [busca, historico]);

  const renderItem = ({ item }) => (
    <View style={historicoStyles.itemContainer}>
      <Text style={historicoStyles.itemText}>Nome: {item.nome}</Text>
      <Text style={historicoStyles.itemText}>Contato: {item.contato}</Text>
      <Text style={historicoStyles.itemText}>Senha: {item.senha}</Text>
      <Text style={historicoStyles.itemText}>Funcionário: {item.funcionario}</Text>
      <Text style={historicoStyles.itemText}>Data e Hora: {item.dateTime}</Text>
    </View>
  );

  return (
    <View style={historicoStyles.container}>
      <Text style={historicoStyles.header}>Histórico de Atendimentos</Text>
      <TextInput
        style={historicoStyles.input}
        placeholder="Buscar por nome, senha ou data"
        value={busca}
        onChangeText={setBusca}
      />
      <FlatList
        data={atendimentosFiltrados}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}
