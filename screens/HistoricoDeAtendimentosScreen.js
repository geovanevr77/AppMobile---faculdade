import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList } from 'react-native';
import telaDeInicioStyles from '../styles/HistoricoStyle';

export default function HistoricoAtendimentosScreen({ route }) {
  const [historico, setHistorico] = useState([]);
  const [filtro, setFiltro] = useState('');

  useEffect(() => {
    const pedidosSimulados = gerarPedidosSimulados();
    setHistorico(pedidosSimulados);
  }, []);

  const gerarPedidosSimulados = () => {
    const dataAtual = new Date().toLocaleString();
    const dataOntem = new Date(Date.now() - 86400000).toLocaleString(); // Data de ontem
    return [
      { id: 1, nome: 'João', contato: '999999999', senha: '12', funcionario: 'Maria', dateTime: dataAtual },
      { id: 2, nome: 'Maria', contato: '888888888', senha: '56', funcionario: 'Pedro', dateTime: dataAtual },
      { id: 3, nome: 'José', contato: '777777777', senha: '90', funcionario: 'Ana', dateTime: dataOntem },
      { id: 4, nome: 'Ana', contato: '666666666', senha: '34', funcionario: 'Lucas', dateTime: dataOntem },
      { id: 5, nome: 'Pedro', contato: '555555555', senha: '78', funcionario: 'Julia', dateTime: dataAtual },
    ];
  };

  const historicoFiltrado = historico.filter(item => 
    item.nome.includes(filtro) || item.dateTime.includes(filtro) || item.senha.includes(filtro)
  );

  return (
    <View style={telaDeInicioStyles.container}>
      <Text style={telaDeInicioStyles.topTitle}>Histórico de Atendimento</Text>
      <TextInput
        style={telaDeInicioStyles.input}
        placeholder="Filtrar por nome, senha ou data"
        value={filtro}
        onChangeText={setFiltro}
      />
      <FlatList
        data={historicoFiltrado}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={telaDeInicioStyles.orderContainer}>
            <Text style={telaDeInicioStyles.label}>Nome:</Text>
            <Text style={telaDeInicioStyles.value}>{`${item.nome} (ID: ${item.id})`}</Text>
            <Text style={telaDeInicioStyles.label}>Data e Hora:</Text>
            <Text style={telaDeInicioStyles.value}>{item.dateTime}</Text>
            <Text style={telaDeInicioStyles.label}>Contato:</Text>
            <Text style={telaDeInicioStyles.value}>{item.contato}</Text>
            <Text style={telaDeInicioStyles.label}>Senha:</Text>
            <Text style={telaDeInicioStyles.value}>{item.senha}</Text>
            <Text style={telaDeInicioStyles.label}>Funcionário:</Text>
            <Text style={telaDeInicioStyles.value}>{item.funcionario}</Text>
          </View>
        )}
      />
    </View>
  );
}
