import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';

function HomeScreen({navigation}): JSX.Element {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.title}>Bienvenidos</Text>
        <Text style={styles.subtitle}>
          Este es el challengue realizado por{' '}
          <Text style={styles.myName}>Cufa Varela</Text> y esta pantalla sólo la
          hice para que tenga sentido usar el navigator 🤗
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Posts')}
          style={styles.button}>
          <Text style={styles.buttonText}>Ver Posteos de Reddit</Text>
        </TouchableOpacity>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require('../assets/grosos.jpg')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    justifyContent: 'center',
  },
  title: {
    fontSize: 50,
    fontWeight: '600',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 24,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#188180',
    padding: 18,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600',
  },
  myName: {
    fontWeight: '600',
  },
  imageContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 300,
    marginTop: 20,
    borderRadius: 20,
  },
});

export default HomeScreen;
