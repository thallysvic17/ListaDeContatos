import { useState } from "react"
import * as S from "./styled"

type Props = {
    nome: string
    contato: number
    email : string
    id : number

}


const Contatos = ({nome, contato, email}: Props) => {

//logica das tarefas
    const [edit, setEdit] = useState(false)
    return (
        <>                
        <S.Tr>
        <S.Td>
            1
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
            <S.Button>Salvar</S.Button>
            <S.Button onClick={()=> setEdit(false)}>Cancelar</S.Button>
            </>
        ) : (
            <>
            <S.Button onClick={()=> setEdit(true)}>Editar</S.Button>
            <S.Button >Remover</S.Button>
            </>
        )}
        </S.Td>
        </S.Tr>
    </>
    )}
    export default Contatos