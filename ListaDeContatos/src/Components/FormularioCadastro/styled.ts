import { styled } from "styled-components";

export const ContainerForm = styled.div`
    width: 80vh;
    height: 100vh;
    margin: 0 auto;
    padding: 60px 0;
`

export const Formulario = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;
    row-gap: 25px;
`

export const Inputs = styled.input`
    padding: 14px ;
    width: 80%;
    background-color: #ecf0f1;
    border: none;
    outline: none;
    border-radius: 2px;

`

export const Buttons = styled.button`
    width: 20%;
    height: 25px;
    border: none;
    background-color:#7f8c8d;
    cursor: pointer;
`

export const BtnVoltar = styled(Buttons)`
    background-color: #34495e;
`