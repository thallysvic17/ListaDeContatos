import { createSlice, PayloadAction} from '@reduxjs/toolkit'
import Contato from '../../Models/Contatos';

interface Contatos {
    nome : string 
    contato : number
    email : string
    id: number
}


const contatosSlice = createSlice({
    name: 'contatos',
    initialState : {
        itens: [
            new Contato(
                'thallys',
                999516826,
                'thallysvic17@gmail.com',
                1),
            new Contato(
                'lorenna',
                999516826,
                'lorenna@gmail.com',
                2),
            new Contato(
                'pitoco',
                999516826,
                'pitoco@gmail.com',
                3)
        ] as Contatos[]
    },

    reducers: {
        remover: (state, action: PayloadAction<number>) =>{
            state.itens = state.itens.filter(contato => contato.id !== action.payload)
        }
    }
})

export const { remover } = contatosSlice.actions

export default contatosSlice.reducer



