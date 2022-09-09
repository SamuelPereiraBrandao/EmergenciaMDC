<template>
  <div>
    <div class="row">
      <div class="col">
        <h5 :class="corTitulo">
          <i class="bi bi-heart-pulse-fill"></i>

{{tituloCustomizadoLocal}}</h5>
      </div>
    </div>
    <div class="row">
      <div class="col-8">
        <p>Enfermeiro: {{e.enfermeiro}}</p>
        <p>Socorrista: {{e.socorrista}}</p>
        <p>Médico: {{e.medico}} </p>
        <p>Carro: {{e.carro}} </p>
        <p>Telefone: {{e.telefone}}</p>
        <p>Kit de reanimação: {{e.kitDeReanimacao}}</p>
      </div>
      <div class="col-4 text-center">
        <div class="row">
          <div class="col">
            <img class="img-fluid" :src="require(`@/assets/ambulancias/${imgAmbulancia}`)">
          </div>
        </div>
        <div class="row mt-3">
          <div class="col">
            <button type="button" class="btn btn-primary" @click="montarEquipe">Montar a equipe</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'ConfiguracaoEquipe',
  data: () => ({
    titulo: 'Configuração das equipes'
  }),
  //computed: mapState(['equipe'])
  /*
  computed: {
    e(){
      return this.$store.state.equipe
    }
  }
  */
  computed: {
    ...mapState({
      e: state => state.equipe,
      tituloCustomizadoLocal(state) {
        return `${this.titulo} - ${state.equipe.carro}`
      },
      corTitulo() {
        let teste = true
        if (teste) {
          return 'text-danger'
        }
        return 'text-primary'
      }

    }),
    imgAmbulancia() {
      if (this.e.kitDeReanimacao) {
        return 'uti.png'
      }
      if (this.e.carro) {
        return 'simples.png'
      }
      return 'indefinida.png'

    }
  },
  methods: {
    montarEquipe(){
      console.log(this.$store.state.equipe)
      let equipe = Object.assign({}, this.$store.state.equipe)

        this.$store.commit('adicionarEquipeEmEquipes', equipe)
    }
  }
}
</script>
