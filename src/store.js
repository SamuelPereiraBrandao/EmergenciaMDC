import Vuex from 'vuex'

export default new Vuex.Store({
    state: {
        titulo:'Emergências Médicas',
        equipe: {
            enfermeiro: 'Nome do enfermeiro',
            socorrista: 'Nome do socorrista',
            medico: 'Nome do medico',
            carro: 'Placa do carro',
            telefone: '+55 11 91117-5506',
            kitDeReanimacao: 'Kit 0001'
        },
        enfermeiros: [
            { id: 1, nome: 'João', escala: '12x36'},
            { id: 2, nome: 'Maria', escala: '12x36'},
            { id: 3, nome: 'Ana', escala: '24x48'},
            { id: 4, nome: 'José', escala: '24x48'},
            { id: 5, nome: 'Samuel', escala: '24x48'},
            { id: 6, nome: 'Marcos', escala: '12x36'}
        ],
        socorristas: [
            { id: 1, nome: 'Marcos', turno: 'manhã'},
            { id: 2, nome: 'Felipe', turno: 'tarde'},
            { id: 3, nome: 'Cláudia', turno: 'tarde'},
            { id: 4, nome: 'Michele', turno: 'noite'}
        ],
        medicos: [
            { id: 1, nome: 'André', escala: '12x36'},
            { id: 2, nome: 'Roberta', escala: '12x36'},
            { id: 3, nome: 'Carlos', escala: '24x48'},
            { id: 4, nome: 'Juliana', escala: '24x48'}
        ],
        equipamentos: {
            carros: [
                { id: 1, placa: 'ABC-0000' },
                { id: 2, placa: 'BRA1A11' },
                { id: 3, placa: 'CBA-1111' },
                { id: 4, placa: 'ARB2B22' }
            ],
            telefones: [
                { id: 1, telefone: '+55 11 98888-8888' },
                { id: 2, telefone: '+55 11 97777-7777' },
                { id: 3, telefone: '+55 11 96666-6666' },
                { id: 4, telefone: '+55 11 95555-5555' }
            ],
            kitsDeReanimacao: [
                { id: 1, kit: 'K0001' },
                { id: 2, kit: 'K0002' },
                { id: 3, kit: 'K0003' },
                { id: 4, kit: 'K0004' }
            ]
        }
    },
    getters: {
        totalEnfermeiros(state){
            return state.enfermeiros.length
        }
    }
})