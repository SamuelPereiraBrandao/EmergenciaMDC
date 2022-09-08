<template>
    <div>        
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
    props: {
        tipo: String
    },
    computed: {
        ...mapState({
            enfermeiros: state => state.enfermeiros,
            socorristas: state => state.socorristas,
            medicos: state => state.medicos,
            carros: state => state.equipamentos.carros,
            telefones: state => state.equipamentos.telefones,
            kitsDeReanimacao: state => state.equipamentos.kitsDeReanimacao
        }),
        itens(){
            switch(this.tipo){
                case 'enfermeiros': return this.enfermeiros
                case 'socorristas': return this.socorristas
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