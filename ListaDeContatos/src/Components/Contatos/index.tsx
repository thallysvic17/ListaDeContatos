import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import * as S from "./styled"
import { remover, editar } from '../../Store/reducers/contatos'
import Contato from "../../Models/Contatos"

type Props = Contato


const Contatos = ({nome, contato, email, id}: Props) => {

//logica das tarefas

    const [edit, setEdit] = useState(false)
    const dispatch = useDispatch()

    return (
        <>                
        <S.Tr>
        <S.Td>
            {id}
        </S.Td>
        <S.Td>
            {nome}
        </S.Td>
        <S.Td>
            {contato}
        </S.Td>
        <S.Td>
            {email}
        </S.Td>
        <S.Td className="Actions">
        {edit ? (
            <>
            <S.Button onClick={()=> {
                dispatch(editar({
                   nome,
                   contato,
                   email,
                   id
                })
                )
                setEdit(false)
            }}>Salvar</S.Button>
            <S.Button onClick={()=> setEdit(false)}>Cancelar</S.Button>
            </>
        ) : (
            <>
            <S.Button onClick={()=> setEdit(true)}>Editar</S.Button>
            <S.Button  onClick={()=> dispatch(remover(id))}>Remover</S.Button>
            </>
        )}
        </S.Td>
        </S.Tr>
    </>
    )}
    export default Contatos