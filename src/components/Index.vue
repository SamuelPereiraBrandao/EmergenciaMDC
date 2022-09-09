<template>
  <div>
    
    <nav class="navbar navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">{{tituloCustomizado}}</a>
      </div>
    </nav>

    <div class="container">

      <div class="row mt-5">
        <div class="col-6 p">
          <profissionais />
        </div>

        <div class="col-6">
          <equipamentos />
        </div>
      </div>

      <div class="row mt-5 mb-5 bg-light p-2">
        <div class="col">
          <configuracao-equipe />
        </div>
      </div>

      <div class="row mt-5 mb-5">
        <div class="col">
          <equipes />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ConfiguracaoEquipe from './ConfiguracaoEquipe.vue'
import Equipamentos from './Equipamentos.vue'
import Equipes from './Equipes.vue'
import Profissionais from './Profissionais.vue'
import { mapMutations } from 'vuex'

export default {
  components: { 
    ConfiguracaoEquipe,
    Equipamentos,
    Equipes,
    Profissionais
  },
  name: 'IndexVue',
  props: {
    msg: String
  },
  computed:{
    tituloCustomizado(){
      return `${this.$store.state.titulo}`
    }
  },
  methods:{
    ...mapMutations(['setInfermeiros','setSocorristas','setMedicos','setCarros','setTelefones','setKit'])
  },
  created(){
    fetch('http://localhost:3001/enfermeiros')
    .then (response => response.json())
    .then (dados => this.$store.commit('setEnfermeiros', dados) )

    fetch('http://localhost:3001/socorristas')
    .then (response => response.json())
    .then (dados => this.setSocorristas(dados) )

    fetch('http://localhost:3001/medicos')
    .then (response => response.json())
    .then (dados => this.setMedicos(dados) )
/*
    fetch('http://localhost:3001/equipamentos')
    .then (response => response.json())
    .then (dados => {
      this.setCarros(dados.carros) 
      this.setTelefones(dados.telefones)
      this.setKit(dados.kitsDeReanimacao)
    })
    */
    fetch('http://localhost:3001/equipamentos')
    .then (response => response.json())
    .then (dados => {
      this.$store.dispatch('adicionarEquipamentos', dados)
    } )
}
}
</script>
