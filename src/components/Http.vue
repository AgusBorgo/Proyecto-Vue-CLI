<template>
  <section class="card">
    <div class="card-hearder">
        <h3>Componente Http - TIMER {{ timer }}</h3>
    </div>

    <div class="card-body">
       <button class="btn btn-primary my-3 me-2" @click="obtener">
        Obtener Posts
       </button>

       <button class="btn btn-danger my-3" @click="posts = []">
        Limpiar Posts
        </button>

       <!-- <pre><p>{{ posts }}</p></pre> -->

       <div v-if="posts.length">
        <div class="table-responsive">
       <table class="table table-dark">
        <thead>
          <tr>
            <th>userId</th>
            <th>id</th>
            <th>title</th>
            <th>body</th>
            
          </tr>
        </thead>
        <tbody>
          <tr v-for="(post, index) in posts" :key="index">
            <td>{{ post.userId }}</td>
            <td>{{ post.id }}</td>
            <td>{{ post.title }}</td>
            <td>{{ post.body }}</td>
          </tr>
        </tbody>
       </table>
       </div>
       </div>
       <h4 v-else> Pedir los post a traves del boton</h4>
    </div>
  </section>
</template>

<script>
import '../Servicios/posts.js'
import { obtenerPosts } from '../Servicios/posts.js';
export default {
  name: 'ComponenteHttp',

    props: {
    // Definición de props
    },

  data() {
    return {
      posts: [
      ],
      timer: 0,
      refTimer: null,
    };
  },

  computed: {
    // Propiedades computadas, son como getters
  },

  watch: {
    // Observadores para reaccionar a cambios en datos o props
  },

  methods: {
    async obtener(){
      const post = await obtenerPosts()
    //  console.log(post);
      this.posts = post;
    },
    
  },

  // ------------ LIFECYCLE HOOKS ------------
  // Estos son los hooks del ciclo de vida del componente
 // Puedes usar estos hooks para ejecutar código en diferentes etapas del ciclo de vida del componente
  // -----------------------------------------
  

  // Antes y después de la creación del componente en memoria
  beforeCreate() {
    // Código que se ejecuta antes de que el componente se cree
    console.log('Componente Http antes de ser creado');
  },
  created() {
    // Código que se ejecuta cuando el componente se crea
    console.log('Componente Http creado');
  },
  // Antes y después de montar el componente en el DOM (VISTA)
  beforeMount () {
    // Código que se ejecuta antes de que el componente se monte
    console.log('Componente Http antes de ser montado en el DOM');
  },

  mounted() {
    // Código que se ejecuta cuando el componente se monta
    this.obtener();
    console.log('Componente Http montado en el DOM');
  
    this.refTimer= setInterval( () => {
      this.timer++;
    }, 1000);
  },
  // Antes y después de actualizar el componente (datos/reactividad)

  beforeUpdate() {
    // Código que se ejecuta antes de que el componente se actualice
    //console.log('Componente Http antes de ser actualizado');
  },

  updated() {
    // Código que se ejecuta cuando el componente se actualiza
   // console.log('Componente Http actualizado');
  },

  // Antes y después de desmontar el componente del DOM (VISTA)
  beforeUnmount() {
    // Código que se ejecuta antes de que el componente se desmonte
    console.log('Componente Http antes de ser desmontado del DOM');
  },

  unmounted() {
    // Código que se ejecuta cuando el componente se desmonta
    console.log('Componente Http desmontado del DOM');
    
    clearInterval(this.refTimer);
    
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
