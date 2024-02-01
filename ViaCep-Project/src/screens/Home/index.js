import { BoxInput } from "../../components/BoxInput"
import {ContainerForm ,ScrollForm } from "./style"


export function Home() {

    //hooks - states
    //hooks - effect
      //chamada da API

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
              maxLenth={9}
              minLeth={8}  
              />

              <BoxInput 
              textLabel = "Logradouro:"
              placeholder= "Logradouro..."
              fieldWidth= {90}
              maxLenth={9}
              minLeth={8} 
              /> 

              <BoxInput 
              textLabel = "Bairro:"
              placeholder= "Bairro..."
              fieldWidth= {90}
              maxLenth={9}
              minLeth={8} 
              /> 

              <BoxInput 
              textLabel = "Cidade:"
              placeholder= "Cidade..."
              fieldWidth= {90}
              maxLenth={9}
              minLeth={8} 
              /> 

              <BoxInput 
              textLabel = "Estado:"
              placeholder= "Estado..."
              fieldWidth= {90}
              maxLenth={9}
              minLeth={8} 
              /> 
     
            </ContainerForm>
        </ScrollForm>
    )
    
}