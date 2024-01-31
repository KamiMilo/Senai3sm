import { StatusBar } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts ,Roboto_500Medium ,Roboto_700Bold} from '@expo-google-fonts/roboto';
import { ContainerApp } from './styles';
import { Header } from './src/components/Header';
import { Home } from './src/screens/Home';




export default function App() {

    //Hooks para UseFonts (fontes)
  let [fontsLoaded, fontError] = useFonts({
    Roboto_500Medium,
    Roboto_700Bold
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <ContainerApp>
      <StatusBar/>

     <Header/>
     <Home/>
      
    </ContainerApp>
  );
}


