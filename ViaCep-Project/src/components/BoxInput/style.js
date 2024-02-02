import styled from "styled-components/native";

// componente dinamico que contém a  label mais input
export const FieldContent= styled.View `
/* define o valor da largura da props.fielWith */
    width: ${props => `${props.fieldWidth}%`};
    margin-top: 20px;
    

`