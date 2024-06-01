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
      // Limpar os campos sempre que a tela for exibida
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

    // Verifica se o nome tem pelo menos 8 caracteres
    if (nome.length < 8) {
      setErrorMessage('O nome deve ter no mínimo 8 caracteres.');
      return;
    }

    // Verifica se o número de contato é um número de celular válido
    const celularRegex = /^\d{2}\d{5}\d{4}$/; // Formato esperado: DD9XXXXYYYY
    if (!celularRegex.test(contato)) {
      setErrorMessage('Número de celular inválido. Use o formato: DD9XXXXYYYY.');
      return;
    }

    // Verifica se a senha é um número
    if (isNaN(parseInt(senha))) {
      setErrorMessage('A senha deve ser um número.');
      return;
    }

    // Verifica se a senha está dentro do intervalo de 1 a 100
    const senhaNumerica = parseInt(senha);
    if (senhaNumerica < 1 || senhaNumerica > 100) {
      setErrorMessage('A senha deve ser um número de 1 a 100.');
      return;
    }

    // Verifica se o nome do funcionário tem pelo menos 5 caracteres
    if (funcionario.length < 5) {
      setErrorMessage('O nome do funcionário deve ter no mínimo 5 caracteres.');
      return;
    }

    // Adicione lógica para processar os dados aqui
    console.log('Nome do Cliente:', nome);
    console.log('Contato:', contato);
    console.log('Senha:', senha);
    console.log('Nome do Funcionário:', funcionario);

    // Resetar os campos
    setNome('');
    setContato('');
    setSenha('');
    setFuncionario('');

    // Navegar para a tela de checklist
    navigation.navigate('ChecklistScreen');
  };

  return (
    <View style={telaDeInicioStyles.container}>
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
    </View>
  );
}