<template>
    <div>     
        <div v-if="tipo == 'socorristas'">
            {{turno}}
            <select name="Turno" id="" class="form-control form-control-sm" v-model="turno">
                <option value="">Todos</option>
                <option value="manhã">Manhã</option>
                <option value="tarde">Tarde</option>
                <option value="noite">Noite</option>
            </select>
        </div>   
        <item v-for="(item, indice) in itens" :key="indice" :dados="item"/>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
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