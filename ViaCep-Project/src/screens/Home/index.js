import { useEffect, useState } from "react"
import { BoxInput } from "../../components/BoxInput"
import {BoxContainer, ContainerForm ,ScrollForm } from "./style"

export function Home() {
  //Hooks - states e variaveis
  const [cep, setCep] = useState('');
  const [logradouro, setLogradouro] = useState('');
  const [bairro, setBairro] =useState('');
  const [cidade, setCidade] =useState('');
  const [estado, setEstado] =useState('');
  const [uf, setUf] =useState('');


    //hooks - effect e fuctions
    useEffect(async ()=> {
      //chamada da API
      try {
        if(cep != "" && cep.length === 8){
        const endereco = await axios.get(`https://viacep.com.br/ws${cep}/json/`)
        };
        if (!endereco.error) {
          alert("Verifique o CEP")
        }

        setLogradouro(endereco.data.logradouro);
        setBairro(endereco.data.bairro);
        setCidade(endereco.data.localidade);
        setEstado(endereco.data.estado);
        


     } catch (error) {
      console.log("erro ao buscar CEP!!");
      console.log(error);
    }

    },[cep]) //array de dependencia
    // [] = renderiza só ao carregar a pagina
    // [cep] = renderiza quando a variável dentro do array for alterado

    return(

        //ScrollForm
        
        //ContainerForm
        //BoxInput:
            //Label
            //Input


        <ScrollForm> 
            <ContainerForm>
              <BoxInput 
              textLabel = "Informe o CEP:"
              placeholder= "CEP..."
              editable= {true}
              fieldWidth= {90}
              maxLegth={9}
              fieldValue={cep}
              onChangeText= {(tx) => {setCep(tx)}}
               
              />

              <BoxInput 
              textLabel = "Logradouro:"
              placeholder= "Logradouro..."
              fieldWidth= {90}
              maxLegth={50}
              fieldValue={logradouro}
              onChangeText= {(tx) => {setLogradouro(tx)}}         
              /> 

              <BoxInput 
              textLabel = "Bairro:"
              placeholder= "Bairro..."
              fieldWidth= {90}
              maxLegth={50}
              fieldValue={bairro}
              onChangeText= {(tx) => {setBairro(tx)}}
              /> 

              <BoxInput 
              textLabel = "Cidade:"
              placeholder= "Cidade..."
              fieldWidth= {90}
              maxLegth={50}
              fieldValue={cidade}
              onChangeText= {(tx) => {setCidade(tx)}}
              /> 

             <BoxContainer>

              <BoxInput 
              textLabel = "Estado:"
              placeholder= "Estado..."
              fieldWidth= {70}
              fieldValue={estado}
              onChangeText= {(tx) => {setEstado(tx)}}
              
              /> 

              <BoxInput 
              textLabel = "UF:"
              placeholder= " UF"
              fieldWidth= {25}
              maxLegth={2}
              /> 

              </BoxContainer>
             
     
            </ContainerForm>
        </ScrollForm>
    )
    
}