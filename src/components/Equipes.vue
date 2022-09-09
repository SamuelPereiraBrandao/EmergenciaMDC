<template>
    <div>
        <div class="row">
            <div class="col">
                <h5>
                    <i class="bi bi-tags"></i>
                    Equipes Montadas:
                </h5>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <ListaEquipes tipo="equipes-montadas" />
            </div>
        </div>
    </div>
</template>

<script>
import ListaEquipes from '@/components/ListaEquipes'

export default {
    name: 'EquipesVue',
    components: {
    ListaEquipes
}
}
</script>