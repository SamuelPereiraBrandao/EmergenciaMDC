<template>
    <div>
        <div class="row">
            <div class="col">
                <h5><i class="bi-file-person me-2"></i>Profissionais</h5>
                <ul class="nav nav-tabs">
                <li class="nav-item">
                    <router-link class="nav-link" :to="{ name: 'profissionais', params: { tipo: 'enfermeiros' } }">Enfermeiros ({{$store.getters.totalEnfermeiros}})</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" :to="{ name: 'profissionais', params: { tipo: 'socorristas' } }">Socorristas ({{$store.getters.totalSocorristas}})</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" :to="{ name: 'profissionais', params: { tipo: 'medicos' } }">Médicos ({{$store.getters.totalMedicos}})</router-link>
                </li>
                </ul>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <span><router-view name="profissionais"/></span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProfissionaisVue',
}
</script>
