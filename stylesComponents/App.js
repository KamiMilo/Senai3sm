import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Container } from './src/components/Container/Container';
import { Title } from './src/components/Title/Title';
import { Button, Button2 } from './src/components/Button/Button';
import { TextButton } from './src/components/TextButton/TextButton';

export default function App() {

  //Hook
  const [count, setCount] = useState(0);
  
  //effectr
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
    <Container>

      <Title> Contador:{count}</Title>

      <Button onPress={increment}>
        <TextButton>Incrementar</TextButton>
      </Button>
 
      <Button2 onPress={decrement}>
        <TextButton> Decrementar</TextButton>
      </Button2>

      <StatusBar style="auto"/>
      
    </Container>
  );
}

