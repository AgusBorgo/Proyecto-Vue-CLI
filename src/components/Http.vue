<template>
  <section class="card">
    <div class="card-hearder">
        <h3>Componente Http</h3>
    </div>

    <div class="card-body">
       <button class="btn btn-primary my-3" @click="obtener">
        Obtener Posts
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
      console.log(post);
      this.posts = post;
    }
  },

  // ------------ LIFECYCLE HOOKS ------------
  // Estos son los hooks del ciclo de vida del componente
 // Puedes usar estos hooks para ejecutar código en diferentes etapas del ciclo de vida del componente
  // -----------------------------------------
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
