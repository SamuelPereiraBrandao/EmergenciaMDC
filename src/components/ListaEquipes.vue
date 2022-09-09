<template>
    <div>
        <ul class="list-group">
            <li class="list-group-item" v-for="(equipe, indice) in equipes" :key="indice">
            <Equipe :dados="equipe"/>
            </li>
        </ul>
        
    </div>
</template>

<script>
    import { mapState } from 'vuex';
import Equipe from '@/components/Equipe'
export default {

    name: 'ListaEquipesVue',
    components: {
        Equipe
    },
    computed: {
        ...mapState(['equipes'])
    }
}
</script>