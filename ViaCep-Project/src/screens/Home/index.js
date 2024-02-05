import { useEffect, useState } from "react"
import { BoxInput } from "../../components/BoxInput"
import { BoxContainer, ContainerForm, ScrollForm } from "./style"
import axios from "axios"

export function Home() {
  //Hooks - states e variaveis
  const [cep, setCep] = useState('');
  const [logradouro, setLogradouro] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado,setEstado] = useState('');
  const [uf, setUf] = useState('');


  //hooks - effect e fuctions
  useEffect(() => {
    const api = async () => {

      //chamada da API
      try {
        if (cep.length >= 8) {
          const endereco = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)

          setLogradouro(endereco.data.logradouro);
          setBairro(endereco.data.bairro);
          setCidade(endereco.data.localidade);
          setUf(endereco.data.uf);
        };

      } catch (error) {
        alert("erro ao buscar CEP!!");
        console.log(error);
      }
    }

    api();

  }, [cep]) //array de dependencia
  // [] = renderiza só ao carregar a pagina
  // [cep] = renderiza quando a variável dentro do array for alterado

  return (
  <ScrollForm>
      <ContainerForm>
        <BoxInput
          textLabel="Informe o CEP:"
          placeholder="CEP..."
          editable={true}
          fieldWidth={90}
          maxLength={9}
          KeyType="phone-pad"
          fieldValue={cep}
          onChangeText={(tx) => { setCep(tx) }}

        />

        <BoxInput
          textLabel="Logradouro:"
          placeholder="Logradouro..."
          fieldWidth={90}
          maxLength={50}
          fieldValue={logradouro}
          onChangeText={(tx) => { setLogradouro(tx) }}
        />

        <BoxInput
          textLabel="Bairro:"
          placeholder="Bairro..."
          fieldWidth={90}
          maxLength={50}
          fieldValue={bairro}
          onChangeText={(tx) => { setBairro(tx) }}
        />

        <BoxInput
          textLabel="Cidade:"
          placeholder="Cidade..."
          fieldWidth={90}
          maxLength={50}
          fieldValue={cidade}
          onChangeText={(tx) => { setCidade(tx) }}
        />

        <BoxContainer>

          <BoxInput
            textLabel="Estado:"
            placeholder="Estado..."
            fieldWidth={70}
            // fieldValue={estado}
            // onChangeText={(tx) => { setEstado(tx) }}
            

          />

          <BoxInput
            textLabel="UF:"
            placeholder=" UF"
            fieldWidth={25}
            maxLength={2}
            fieldValue={uf}
            onChangeText={(tx) => { setUf(tx) }}
          />

        </BoxContainer>


      </ContainerForm>
    </ScrollForm>
  )

}