<template>
    <div class="row">
        <div class="col-1" v-if="dados.id" v-text="dados.id"></div>
        <div class="col" v-if="dados.nome" v-text="dados.nome"></div>
        <div class="col" v-if="dados.placa" v-text="dados.placa"></div>
        <div class="col" v-if="dados.telefone" v-text="dados.telefone"></div>
        <div class="col" v-if="dados.kit" v-text="dados.kit"></div>
        <div class="col-2" v-if="dados.escala" v-text="dados.escala"></div>
        <div class="col-2" v-if="dados.turno" v-text="dados.turno"></div>
        <div class="col-1">
            <i class="bi-check2-square" style="cursor:pointer"></i>
        </div>
        <br>
    </div>
</template>

<script>
export default {
    name: 'ItemVue',
    props: {
        dados: Object
    }
}
</script>