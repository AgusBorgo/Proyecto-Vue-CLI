
<template>
  <div class="container-fluid mt-3">
    <div class="card">
      <div class="card-header">
        <header>
          <h2>Componente principal (App)</h2>
        </header>
      </div>
      <div class="card-body">
        <main>
          <!-- Uso del componente Binding -->
           <!-- <Binding /> -->
           <!-- <Estructura /> -->
            <!-- <Atributos /> -->
          
          <Formulario />
        </main>
      </div>
    </div>
  </div>
</template>

<script>

  /*Componentes de simple archivo 
 (template, script, scope)*/
import Binding from './components/Binding.vue';
import Estructura from './components/Estructura.vue';
import Atributos from './components/Atributos.vue';



  /*Componentes de multiples archivos
 (.html, .js, .css)*/

 import Formulario from './components/Formulario/index.vue';

export default {
  name: 'App',
  components: {
    // Importar y registrar componentes hijos aquí
    Binding,
    Estructura,
    Atributos,
    Formulario,
  },
};
</script>

<style scoped>
.card-header {
  background-color: #17bb1f;
  color: white;
}
</style>
