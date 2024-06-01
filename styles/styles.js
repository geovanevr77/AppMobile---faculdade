import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    alignItems: 'center',
    marginTop: 100,
    marginBottom: 40,
  },
  header: {
    fontSize: 28,
    textAlign: 'center',
    color: '#1976D2',
    textShadowColor: '#B0E0E6',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  itemsContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
    paddingVertical: 15,
    paddingHorizontal: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 15,
  },
  itemText: {
    fontSize: 18,
  },
  button: {
    backgroundColor: '#1976D2',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 100,
    marginTop: 20,
    elevation: 1,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  notification: {
    position: 'absolute',
    top: 50,
    left: '50%',
    transform: [{ translateX: -100 }],
    width: 200,
    padding: 10,
    backgroundColor: '#4CAF50',
    borderRadius: 10,
    zIndex: 1,
  },
  notificationText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  errorMessage: {
    color: 'red',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
  },
});
