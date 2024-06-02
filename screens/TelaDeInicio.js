import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import telaDeInicioStyles from '../styles/TelaDeInicioStyles';
import { useFocusEffect } from '@react-navigation/native';

export default function TelaDeInicio({ navigation }) {
  const [nome, setNome] = useState('');
  const [contato, setContato] = useState('');
  const [senha, setSenha] = useState('');
  const [funcionario, setFuncionario] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useFocusEffect(
    React.useCallback(() => {
      setNome('');
      setContato('');
      setSenha('');
      setFuncionario('');
      setErrorMessage('');
    }, [])
  );

  const handleSubmit = () => {
    if (!nome || !contato || !senha || !funcionario) {
      setErrorMessage('Todos os campos são obrigatórios.');
      return;
    }

    if (nome.length < 8) {
      setErrorMessage('O nome deve ter no mínimo 8 caracteres.');
      return;
    }

    const celularRegex = /^\d{2}\d{5}\d{4}$/;
    if (!celularRegex.test(contato)) {
      setErrorMessage('Número de celular inválido. Use o formato: DD9XXXXYYYY.');
      return;
    }

    if (isNaN(parseInt(senha))) {
      setErrorMessage('A senha deve ser um número.');
      return;
    }

    const senhaNumerica = parseInt(senha);
    if (senhaNumerica < 1 || senhaNumerica > 100) {
      setErrorMessage('A senha deve ser um número de 1 a 100.');
      return;
    }

    if (funcionario.length < 5) {
      setErrorMessage('O nome do funcionário deve ter no mínimo 5 caracteres.');
      return;
    }

    console.log('Nome do Cliente:', nome);
    console.log('Contato:', contato);
    console.log('Senha:', senha);
    console.log('Nome do Funcionário:', funcionario);

    setNome('');
    setContato('');
    setSenha('');
    setFuncionario('');

    navigation.navigate('ChecklistScreen', {
      dadosCliente: { nome, contato, senha, funcionario },
    });
  };

  const handleHistorico = () => {
    navigation.navigate('HistoricoDeAtendimentoScreen');
  };

  return (
    <View style={telaDeInicioStyles.container}>
      <View style={telaDeInicioStyles.titleContainer}>
        <Text style={telaDeInicioStyles.topTitle}>Lavanderia Laundry Express</Text>
      </View>
      <Text style={telaDeInicioStyles.header}>Informações do Cliente</Text>
      <TextInput
        style={telaDeInicioStyles.input}
        placeholder="Nome e sobrenome do cliente"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={telaDeInicioStyles.input}
        placeholder="Número de Contato (DD9XXXXYYYY)"
        value={contato}
        onChangeText={setContato}
        keyboardType="phone-pad"
      />
      <TextInput
        style={telaDeInicioStyles.input}
        placeholder="Senha da Fila"
        value={senha}
        onChangeText={setSenha}
        keyboardType="numeric"
      />
      <TextInput
        style={telaDeInicioStyles.input}
        placeholder="Nome do Funcionário"
        value={funcionario}
        onChangeText={setFuncionario}
      />
      {errorMessage ? <Text style={telaDeInicioStyles.errorMessage}>{errorMessage}</Text> : null}
      <TouchableOpacity
        style={telaDeInicioStyles.button}
        onPress={handleSubmit}
      >
        <Text style={telaDeInicioStyles.buttonText}>Prosseguir</Text>
      </TouchableOpacity>
      <Text style={telaDeInicioStyles.orText}>OU</Text>
      <TouchableOpacity
        style={telaDeInicioStyles.button}
        onPress={handleHistorico}
      >
        <Text style={telaDeInicioStyles.buttonText}>Histórico de Atendimentos</Text>
      </TouchableOpacity>
    </View>
  );
}
