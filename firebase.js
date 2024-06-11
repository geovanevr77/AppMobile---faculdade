import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import firebase from '../src/firebaseConfig';
import firebase from 'firebase/app';
import 'firebase/database';
import firebase from './src/firebaseC';

export default function TestFirebaseConnection() {
  useEffect(() => {
    firebase.database().ref('test').set({
      testData: 'Conexão bem-sucedida!',
    }).then(() => {
      console.log('Dados gravados com sucesso no Firebase');
    }).catch(error => {
      console.error('Erro ao gravar dados no Firebase:', error);
    });
  }, []);

  return (
    <View>
      <Text>Verifique o console para ver o status da conexão com o Firebase.</Text>
    </View>
  );
}