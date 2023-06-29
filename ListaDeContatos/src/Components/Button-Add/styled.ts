import styled  from "styled-components";
import { Link } from 'react-router-dom'

export const ButtonAdd = styled(Link)`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: none;
    background-color:#95a5a6;
    font-size: 25px;
    cursor: pointer;
    font-weight: 700;
    position: fixed;
    bottom: 40px;
    right: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: black;
    

    &:hover{
        background-color: #2ecc71;
        transform: scale(1.1);
    }
`