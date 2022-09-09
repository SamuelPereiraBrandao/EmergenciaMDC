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
                
                <div class="row borda">
                    
                    <div class="col-2"><h6>Enfermeiro</h6> </div>
                    <div class="col-2"> <h6>Socorrista</h6></div>
                    <div class="col-2"><h6>Medico</h6></div>
                    <div class="col-2"><h6>Carro</h6></div>
                    <div class="col-2"><h6>Telefone</h6></div>
                    <div class="col-2"><h6>Kit</h6></div>
                </div>
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
<style scoped>
    .borda{
        border: solid 1px rgb(190, 190, 190);
        border-radius: 5px;

    }
</style>