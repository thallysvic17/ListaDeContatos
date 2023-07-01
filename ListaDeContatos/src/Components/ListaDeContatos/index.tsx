import { useDispatch, useSelector } from "react-redux"
import ButtonAdd from "../Button-Add"
import Contatos from "../Contatos" //esse componente esta passando o type com props
import * as S from "../ListaDeContatos/styled"
import { RootReducer } from "../../Store"
import { editar } from "../../Store/reducers/contatos"



//Abaixo estou fazendo o map com a const 'contatos' para adicionar cada item do array na tabela, passando o parametro 'c' e as propriedades 
const MainTabela = () => {
    const {itens} = useSelector((state: RootReducer) => state.contatos)
    const dispatch = useDispatch();

    const EditarContato = ( contato : any) => {
        dispatch(editar(contato));
    }

    return (
        <S.MainContainer>
            <S.Table>
                <S.Thead>
                    <S.Th>id</S.Th>
                    <S.Th>nome</S.Th>
                    <S.Th>contato</S.Th>
                    <S.Th>email</S.Th>
                    <S.Th>acoes</S.Th>
                </S.Thead>
                <S.Tbody>
                    {itens.map((c) => 
                        <Contatos key={c.id}
                        id={c.id}
                        nome={c.nome}
                        contato={c.contato}
                        email={c.email}
                        />
                        )}
                </S.Tbody>
            </S.Table>
            <ButtonAdd/>
        </S.MainContainer>
         
    )
}

export default MainTabela

