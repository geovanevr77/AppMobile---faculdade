import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F5FCFF',
  },
  header: {
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
  itemContainer: {
    width: '100%',
    backgroundColor: '#E3F2FD', 
    padding: 15,
    borderRadius: 10,
    marginBottom: 10, 
  },
  itemText: {
    fontSize: 16,
    color: '#333',
  },
});
