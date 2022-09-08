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
        }
    }
})