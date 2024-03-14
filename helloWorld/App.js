import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Hello Word!</Text>
      <TextInput 
        style = {styles.input}
        defaultValue='Exemplo de input'
      />
      <Image
        style={styles.image}
        source = {
          uri="https://img.freepik.com/vetores-premium/ilustracao-de-cabeca-de-caveira_43623-794.jpg?w=740"
        }
        //contentFit="cover"
        //transition={1000}
      />

      <TouchableOpacity
        style={styles.btn}
      >
        <Text>Exemplo de botão</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',    
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    color: 'white',
    fontSize: 50,
    fontWeight: 500,
  },
  input: {
    marginTop: 30,
    width: '90%',
    height: '40',
    borderWidth: 4,
    borderColor: 'white',
    backgroundColor: 'grey',
    color: 'white',
    padding: 16,
  },
  image:{
    // flex: 1,
    width: 50,
    height: 50
    // backgroundColor: 'white',
  },
  btn:{
    borderColor: 'Black',
    width: "60%",
    height: 40,
    borderWidth: 1,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5
  }
});
