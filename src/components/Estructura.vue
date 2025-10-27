<template>
  <section class="card">
    <div class="card-hearder">
        <h3>Componente Estructura</h3>
    </div>
    <div class="card-body">
      <!-- -------------- -->
      <!-- v-if  -->
      <!-- -------------- -->
       <h4><u>v-if</u></h4>
       <button class="btn btn-warning my-3" @click="mostrar = !mostrar"> {{mostrar ? 'Ocultar' : 'Mostrar'}} </button>
       
       <p v-if="mostrar" class="alert alert-warning">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores neque optio omnis veritatis blanditiis deleniti ratione asperiores voluptatem labore recusandae exercitationem vel voluptatibus magni aliquid similique, adipisci vero. Quis, et?
       </p>

       <p v-else class="alert alert-danger">
        ELEMENTO REMOVIDO
       </p>

       <!-- -------------- -->
      <!-- v-show  -->
      <!-- -------------- -->
       <h4><u>v-show</u></h4>
       <button class="btn btn-info my-3" @click="mostrar2 = !mostrar2"> {{mostrar2 ? 'Ocultar' : 'Mostrar'}} </button>
       
       <p v-show="mostrar2" class="alert alert-info">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores neque optio omnis veritatis blanditiis deleniti ratione asperiores voluptatem labore recusandae exercitationem vel voluptatibus magni aliquid similique, adipisci vero. Quis, et?
       </p>

      <!-- -------------- -->
      <!-- v-for          -->
      <!-- -------------- -->
        <h4><u>v-for</u></h4>
        <p>Lista de usuarios:</p>
        <ul>
          <li v-for="(usuaario, index) in usuaarios" :key="index">
            {{index + 1}}. {{usuaario}}
          </li>
        </ul>
        
        <hr>

        <ul>
          <li v-for="(alumnos, index) in alumnos" :key="index" >
            <!-- El pre es para que tenga mejor formato, tipo json -->
            <pre>
              {{ ` ${index + 1} -  ${alumnos.nombre} ${alumnos.edad}` }}
            </pre>
          </li>
        </ul>

        <hr>

        <div class="table-responsive">
        <table class="table table-dark">
          <thead>
            <tr>
              <th>Foto</th>
              <th>Nombre</th>
              <th>Edad</th>
              <th>Curso?</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(alumnos, index) in alumnos" :key="index">
              <td>
                <img :src="alumnos.foto" :alt="`Foto de ${alumnos.nombre}`" width="50">
              </td>
              <td>{{alumnos.nombre}}</td>
              <td>{{alumnos.edad}}</td>
              <td>{{ alumnos.curso? 'Si' : 'No' }}</td>
            </tr>
          </tbody>
        </table>
        </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Estructura',

    props: {
    // Definición de props
    },

  data() {
    return {
      mostrar: true,
      mostrar2: true,
      usuaarios:[
        'Juan',
        'María',
        'Pedro',
        'Ana',
        'Luis'
      ],
      alumnos:[
        {nombre: 'Carlos', edad: 20, foto: 'https://randomuser.me/api/portraits/men/1.jpg', curso: true},
        {nombre: 'Sofía', edad: 22, foto: 'https://randomuser.me/api/portraits/women/2.jpg', curso: false},
        {nombre: 'Miguel', edad: 19, foto: 'https://randomuser.me/api/portraits/men/3.jpg', curso: true},
        {nombre: 'Lucía', edad: 21, foto: 'https://randomuser.me/api/portraits/women/4.jpg', curso: false},
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
  background-color: #da1cbe;
  color: rgb(81, 64, 64);
}

.table td{
  vertical-align: middle;
}
</style>
