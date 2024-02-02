import styled from "styled-components/native";


        //HeaderContainer  - view
        //HeaderContent   - safeAreaView
        //TextHeader    - Text

export const HeaderContainer= styled.View`
background-color: #FECC2B;
height: 20%;

flex-direction: row;
align-items: center;
justify-content: center;

border-radius: 0px 0px 15px 15px;
box-shadow: 0px 0px 10px #00000030;
/* shadow-color: red; */
elevation: 5;
`

export const HeaderContent = styled.SafeAreaView`
margin-top: 45px;
`

export const TextHeader = styled.Text`
font-family: "Roboto_500Medium";
color: #333e33;
font-size: 24px;
text-align: center;

`