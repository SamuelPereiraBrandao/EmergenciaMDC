import Vuex from 'vuex'

export default new Vuex.Store({
    state: {
        titulo:'Emergências Médicas',
        equipe: {
            enfermeiro: '',
            socorrista: '',
            medico: '',
            carro: '',
            telefone: '',
            kitDeReanimacao: ''
        },
        enfermeiros: [
            { id: 1, nome: 'Samuel', escala: '12x36'},
            { id: 2, nome: 'Maria', escala: '12x36'},
            { id: 3, nome: 'Ana', escala: '24x48'},
            { id: 4, nome: 'José', escala: '24x48'},
            { id: 5, nome: 'Samara', escala: '24x48'},
            { id: 6, nome: 'Marcos', escala: '12x36'}
        ],
        socorristas: [
            { id: 1, nome: 'Pereira', turno: 'Manhã'},
            { id: 2, nome: 'Felipe', turno: 'Tarde'},
            { id: 3, nome: 'Cláudia', turno: 'Tarde'},
            { id: 4, nome: 'Michele', turno: 'Noite'},
            { id: 5, nome: 'Marcos', turno: 'Noite'},
            { id: 6, nome: 'Jose', turno: 'Manhã'},
            { id: 7, nome: 'Amanda', turno: 'Noite'},
            { id: 8, nome: 'Roberta', turno: 'Manhã'},
            { id: 9, nome: 'Marcela', turno: 'Manhã'},
            { id: 10, nome: 'Jorge', turno: 'Tarde'},
            { id: 11, nome: 'Thel', turno: 'Tarde'},
            { id: 12, nome: 'Udelsom', turno: 'Tarde'},
        ],
        medicos: [
            { id: 1, nome: 'Brandão', escala: '12x36'},
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
                { id: 4, kit: 'K0004' },
                { id: 5, kit: 'K0005' }
            ]
        }
    },
    getters: {
        totalEnfermeiros(state){
            return state.enfermeiros.length
        },
        socorristasPorTurno(state){ //closure
            return turno => !turno ? state.socorristas : state.socorristas.filter( s=> s.turno === turno)

        },
        totalSocorristas: state => state.socorristas.length,
        totalSocorristasPorTurno: (state, getters) => {

            return turno => getters.socorristasPorTurno(turno).length

           
        }
    },
    mutations: {
        //setItemEquipe: (state, item) => {
        setItemEquipe: (state, {item}) => {
            //console.log(payload)
            //let item = payload.item
             let t = item.tipo
            let d = item.dados

            if (t == 'enfermeiros') state.equipe.enfermeiro = d.nome
            if (t == 'socorristas') state.equipe.socorrista = d.nome
            if (t == 'medicos') state.equipe.medico = d.nome
            if (t == 'carros') state.equipe.carro = d.placa
            if (t == 'telefones') state.equipe.telefone = d.telefone
            if (t == 'kits-de-reanimacao') state.equipe.kitDeReanimacao = d.kit
            
        }
    }
})