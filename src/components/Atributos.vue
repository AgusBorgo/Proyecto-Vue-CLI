<template>
  <section class="card">
    <div class="card-hearder">
        <h3>Componente Atributo</h3>
    </div>

    <div class="card-body">
      <!-- :style -->
      <h4><u>Binding con :style</u></h4>

      <button class="btn btn-success my-3" @click="estado - !estado" > Cambiar color fondo</button>

      <p :style="{'background-color': estado? 'green' : 'crimson', color: aliceblue, padding: '10px', 'border-radius': '10px',}"> 
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam suscipit nobis velit perspiciatis quae tenetur veniam recusandae ducimus asperiores libero ipsum placeat quam, maiores non debitis voluptate. Odio, voluptas fuga.
      </p>

      <br>
      <hr>
      <!-- :class -->
      <h4><u>Binding con :class</u></h4>

      <button class="btn btn-success my-3" @click="estado2 = !estado2" > Cambiar color fondo</button>

      <p :class="{btn: true, 'btn-success': estado2, 'btn-danger': !estado2}"> 
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam suscipit nobis velit perspiciatis quae tenetur veniam recusandae ducimus asperiores libero ipsum placeat quam, maiores non debitis voluptate. Odio, voluptas fuga.
      </p>

    </div>


  </section>
</template>

<script>
export default {
  name: 'Atributo',

    props: {
    // Definición de props
    },

  data() {
    return {
      estado: true,
      estado2: true,
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
  background-color: #cd7742;
  color: white;
}
</style>
