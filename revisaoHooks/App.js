import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {

  //Hook
  const [count, setCount] = useState(0);
  
  //effect
  useEffect(() => {
    console.warn(`Contador Atualizado : ${count}`)
  },[count])

  //função de incremento
  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    setCount(count - 1)
  }

  return (
    <View style={styles.container}>

      <Text style= {styles.titulo}> Contador: {count}</Text>

      <TouchableOpacity style= {styles.button}  onPress={increment}>
        <Text style={styles.texto}>Incrementar</Text>
      </TouchableOpacity>

      <TouchableOpacity style= {styles.button} onPress={decrement}>
        <Text style={styles.texto}>Decrementar</Text>
      </TouchableOpacity>

      <StatusBar style="auto"/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  titulo: {
    fontSize: 25,
    marginBottom: 10,
    color: 'purple'
  },

  button:{
    width: '50%',
    backgroundColor: 'purple',
    borderRadius: 5,
    padding: 15, 
    marginBottom: 8

  },
  texto: {
    color: '#ffff',
    fontSize: 13,
    justifyContent: 'center',
    marginLeft: 50
  }
  

});
