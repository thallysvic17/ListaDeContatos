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
            state.itens = [
                ...state.itens.filter(contato => contato.id !== action.payload)
            ]
        },
    editar: ( state, action: PayloadAction<Contatos>) =>{
         const  indexContatos = state.itens.findIndex(
            (c) => c.id === action.payload.id)

           if(indexContatos >= 0) {
            state.itens[indexContatos] = action.payload
           }
    }
    }
})

export const { remover, editar } = contatosSlice.actions

export default contatosSlice.reducer



