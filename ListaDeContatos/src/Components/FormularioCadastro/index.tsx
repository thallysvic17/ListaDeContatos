import * as S from "./styled"

const FormularioCadastro = () => (
    <S.ContainerForm>
    <S.Formulario> 
        <h2>Novo Contato</h2>
        <S.Inputs name='name'type="text" placeholder="Nome Completo"/>
        <S.Inputs type="text" placeholder="Contato"/>
        <S.Inputs type="text" placeholder="Email"/>
        <S.Buttons>Cadastrar</S.Buttons>
        <S.BtnVoltar>Voltar</S.BtnVoltar>
    </S.Formulario>
    </S.ContainerForm>
)

export default FormularioCadastro