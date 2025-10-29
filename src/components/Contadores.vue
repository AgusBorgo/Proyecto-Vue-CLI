<template>
  <section class="card">
    <div class="card-header">
        <h3>Componente Contadores</h3>
    </div>
  </section>

    <div class="card-body">
      <contador ini="123" fondo="success"/>
      <contador ini="456" fondo="warning"/>
      <contador ini="789" fondo="danger"/>
      <contador />
    </div>
</template>

<script>
import Contador from './Contador/index.vue';     
export default {
  name: 'Contadores',

  // Registro del componente hijo
  components: {
    Contador,
  },

    props: {
    // Definición de props
    },

  data() {
    return {
      
    };
  },

  computed: {
    // Propiedades computadas, son como getters
  },

  watch: {
    // Observadores para reaccionar a cambios en datos o props
  },

  methods: {
    // Métodos del componente
  },

  created() {
    // Código que se ejecuta cuando el componente se crea
  },

  mounted() {
    // Código que se ejecuta cuando el componente se monta
  },

  unmounted() {
    // Código que se ejecuta cuando el componente se desmonta
  },
};
</script>

<style scoped>
  .card-hearder {
    background-color: #f39c12;
    color: white;
    padding: 10px;
    margin-bottom: 10px;
  }
</style>
