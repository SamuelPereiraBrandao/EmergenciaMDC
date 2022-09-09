<template>
    <div>     
        <div v-if="tipo == 'socorristas'">
            <select name="Turno" id="" class="form-control form-control-sm" v-model="turno">
                <option value="">Todos</option>
                <option value="Manhã">Manhã</option>
                <option value="Tarde">Tarde</option>
                <option value="Noite">Noite</option>
            </select>
        </div>   
        <item v-for="(item, indice) in itens" :key="indice" :dados="item" :tipo="tipo"/>
        <div v-if="tipo == 'socorristas'">
            Total: {{totalSocorristasPorTurno(turno)}}

        </div>
    </div>
</template>

<script>
    import {mapState, mapGetters} from 'vuex'
    
import Item from '@/components/Item.vue'

export default {
    name: 'ListaItens',
    components: { 
        Item
    },
    data: () => ({
        turno:'',
    }),
    props: {
        tipo: String
    },
    computed: {
        ...mapState({
            enfermeiros: state => state.enfermeiros,
            medicos: state => state.medicos,
            carros: state => state.equipamentos.carros,
            telefones: state => state.equipamentos.telefones,
            kitsDeReanimacao: state => state.equipamentos.kitsDeReanimacao
        }),
        ...mapGetters(['socorristasPorTurno','totalSocorristasPorTurno']),
       
        itens(){
            switch(this.tipo){
                case 'enfermeiros': return this.enfermeiros
                case 'socorristas': return this.$store.getters.socorristasPorTurno(this.turno, '10', 'abs', 500)
                case 'medicos': return this.medicos
                case 'carros': return this.carros
                case 'telefones': return this.telefones
                case 'kits-de-reanimacao': return this.kitsDeReanimacao
            }
            return []
        }
    }
}
</script>