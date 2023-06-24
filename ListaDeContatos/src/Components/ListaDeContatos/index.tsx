import Contatos from "../Contatos"
import * as S from "../ListaDeContatos/styled"



const contatos = [{
    nome : 'thalls victor',
    contato : 999516826,
    email : 'Thallysvic173@gmail.com',
    id : 1
},
{
    nome : 'lorenna ',
    contato : 999516826,
    email : 'lorenna@gmail.com',
    id : 1
},
{
    nome : 'pitoca ',
    contato : 999516826,
    email : 'pitoco@gmail.com',
    id : 1
},
]


const Tabela = () => (

    <div>
        <S.Table>
            <S.Thead>
                <S.Th>id</S.Th>
                <S.Th>nome</S.Th>
                <S.Th>contato</S.Th>
                <S.Th>email</S.Th>
                <S.Th>acoes</S.Th>
            </S.Thead>
            <S.Tbody>
                {contatos.map((c) => 
                <Contatos key={c.id}
                id={c.id}
                nome={c.nome}
                contato={c.contato}
                email={c.email}
                />
                )}
            </S.Tbody>
        </S.Table>
    </div>
    
    
)

export default Tabela

