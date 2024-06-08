import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F5FCFF',
  },
  topTitle: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#1976D2',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  orderContainer: {
    width: '100%',
    backgroundColor: '#E3F2FD', // Fundo azul claro
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  infoContainer: {
    width: '100%',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1976D2',
  },
  value: {
    fontSize: 18,
    color: '#333',
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
  },
});
