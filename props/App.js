import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import Person from './src/components/Person/Person';
import { useFonts, Poppins_400Regular_Italic } from '@expo-google-fonts/poppins';
import { SingleDay_400Regular } from '@expo-google-fonts/single-day';
import { FlatList } from 'react-native-web';


export default function App() {
  //configuração da fonte
  let [fontsLoaded, fontError] = useFonts({
    Poppins_400Regular_Italic,
    SingleDay_400Regular
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  //simulando uma lista de pessoas
  const peopleList = [
    {id: '1', name: 'Allan', age: 102},
    {id: '2', name: 'Pedro', age: 19},
    {id: '3', name: 'Gabriel', age: 20},
    {id: '4', name: 'Evellyn', age: 18},
    {id: '4', name: 'Evellyn', age: 18},
  ]
  
  return (
  <FlatList
  //dados que estão vindo do array
  data= {peopleList}
  keyExtractor = {(item) => item.id}

  renderItem= {({item}) => (

    //exibir cada item da lista 
    <Person name= {item.name} age={item.age}/>
  )} 
  />
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  Text: {
    fontFamily: 'SingleDay_400Regular'
  }
});
