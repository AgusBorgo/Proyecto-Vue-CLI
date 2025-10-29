<template>
  <section class="card">
    <div class="card-hearder">
        <h3>Componente Http</h3>
    </div>

    <div class="card-body">
       
    </div>
  </section>
</template>

<script>
import '../Servicios/posts.js'
export default {
  name: 'ComponenteHttp',

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
    background-color: blueviolet;
    padding: 10px;
    border-bottom: 1px solid #dee2e6;
  }
</style>
