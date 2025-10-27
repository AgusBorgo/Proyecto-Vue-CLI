<template>
  <section class="card">
    <div class="card-hearder">
        <h3>Componente BIDING</h3>
    </div>

    <div class="card-body">
        <!-- -------------------------------- -->   
        <!-- Interpolacion / v-text / v-html -->   
        <!-- -------------------------------- -->   

        <h4><u>Interpolacion / v-text / v-html </u></h4>
        <br>
        <p>{{ 3 + 4 }}</p>
        <p>{{ mensaje }}</p>

        <p v-text="mensaje"></p>
        <p v-html="mensajeHTML"></p>
   
        <!-- ------------------------------ -->   
        <!-- Property Binding / v-bind      -->   
        <!-- ------------------------------ -->   

        <h4><u>Property Binding / v-bind </u></h4>
        <br>

        <input type="text" value="123"><br>
        <input type="text" value="valor"><br>
        <input type="text" v-bind:value="valor"> {{ valor }}<br>
        <input type="text" :value="valor"> {{ valor }}<br>
   
        <!-- ------------------------------ -->   
        <!-- Event Binding / v-on      -->   
        <!-- ------------------------------ -->   

        <h4><u>Event Binding / v-on </u></h4>
        <br>

        <button class="btn btn-success me-2"  v-on:click="contador++">
          Contar {{ contador }}</button>
   
        <button class="btn btn-warning me-2"  @click="contador2++">
          Contar {{ contador2 }}</button>
   
          <button class="btn btn-danger"  @click="incrementarContador">
          Contar {{ getContador() }}</button>
   
        <!-- ------------------------------ -->   
        <!-- Doble data Binding / v-model   -->   
        <!-- ------------------------------ -->   

        <h4><u>Doble data Binding / v-model </u></h4>
        <br>
        <h5>Manual</h5>
        <input type="text" :value="valor2" @input="actualizar($event)"> {{ valor2 }} <br>
   
        <h5>Automatico</h5>
        <input type="text" v-model="valor3"> {{ valor3 }} <br>
        
      </div>
  </section>
</template>

<script>
export default {
  name: 'MiComponente',

    props: {
    // Definición de props
    },

  data() {
    return {
      mensaje: 'Hola desde el componente Binding Vue.js!',
      mensajeHTML: '<strong>Este es un mensaje en negrita usando v-html</strong>',
      valor: '123',
      valor2: '253',
      valor3: '456',
      contador: 0,
      contador2: 0,
      contador3: 10,
    };
  },

  computed: {
    // Propiedades computadas, son como getters
  },

  watch: {
    // Observadores para reaccionar a cambios en datos o props
  },

  methods: {
    incrementarContador() {
      this.contador3++;
    },
    getContador() {
      return this.contador3;
    },
    actualizar(e){
      //console.log('actualizar', e)
      const nuevoValor = e.target.value;
      console.log(nuevoValor)

      this.valor2 = nuevoValor;
    }
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
  background-color: #007bff;
  color: white;
}
</style>
