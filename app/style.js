import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 40,
    paddingBottom: 20,
  },
  image: {
    width: '90%', // deixa margem de 20 dos dois lados
    height: 350,
    margin: 30,
    // borderRadius: 16,
    // marginBottom: 30,
    backgroundColor: '#eee',
    // resizeMode: 'cover',
  },

  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
    textAlign: 'center',
  },

  artist: {
    fontSize: 18,
    color: '#555',
    textAlign: 'center',
  },
});

export default styles;