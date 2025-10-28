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
        <div v-if="alumnos.length"> 
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

        <div v-else>
          <p class="alert alert-warning">No hay alumnos registrados</p>
          <button class="btn btn-danger ms-3" @click="agregarAlumno()">
            Agregar Alumno
          </button>
          
        </div>
        <br>
      <!-- cards  -->
       <!-- La w hace las tarjetas mas chicas -->
       <div v-for="(alumno, index) in alumnos" :key="index" class="media alert alert-danger w-50">
        <img :src="alumno.foto" :alt="alumnos.nombre" width="70" >
        <div>
          <strong>Nombre: <a :href="alumno.foto">{{alumno.nombre}}  </a></strong> <br>
          <strong>Edad:</strong> {{alumno.edad}} <br>
          <strong>Curso:</strong> {{ alumno.curso? 'Si' : 'No' }} <br>
          <!-- Ejemplo de v-model, modifica la info con el checkbox -->
          Hizo el curso: <input type="checkbox" v-model="alumno.curso"> <br>
          <button class="btn btn-danger ms-3" @click="borrarAlumno(index)" >Borrar</button>
        </div>
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
    borrarAlumno(index) {
      this.alumnos.splice(index, 1);
    },
    agregarAlumno(){
      this.alumnos.push({
        nombre: 'Marcos',
        edad: 18,
        foto: 'https://randomuser.me/api/portraits/men/5.jpg',
        curso: false,
      });
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
  background-color: #da1cbe;
  color: rgb(81, 64, 64);
}

.table td{
  vertical-align: middle;
}

.media {
  display: flex;
  justify-content: start;
  align-items: start;
  gap: 1rem;
}
</style>
