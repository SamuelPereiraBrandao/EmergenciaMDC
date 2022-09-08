<template>
  <div>
    <div class="row">
      <div class="col">
        <h5><i class="bi-boxes me-2"></i>Configuração da equipe</h5>
      </div>
    </div>
    <div class="row">
      <div class="col-8">
        <p>Enfermeiro:</p>
        <p>Socorrista:</p>
        <p>Médico:</p>
        <p>Carro:</p>
        <p>Telefone:</p>
        <p>Kit de reanimação:</p>
      </div>
      <div class="col-4 text-center">
        <div class="row">
          <div class="col">
            <img class="img-fluid" :src="require('@/assets/ambulancias/indefinida.png')">
          </div>
        </div>
        <div class="row mt-3">
          <div class="col">
            <button type="button" class="btn btn-primary">Montar equipe</button>
          </div>
        </div>              
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'ConfiguracaoEquipe'
}
</script>
