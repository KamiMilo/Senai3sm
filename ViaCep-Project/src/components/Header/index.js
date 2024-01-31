import { HeaderContainer, HeaderContent, TextHeader } from "./style";


export function Header() {
    return(
        //HeaderContainer  - view
        //HeaderContent   - safeAreaView
        //TextHeader    - Text

        <HeaderContainer>
            <HeaderContent>
                <TextHeader>Consumo da API ViaCep</TextHeader>
            </HeaderContent>
        </HeaderContainer>
    )
    
}