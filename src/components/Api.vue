<template>
  <section class="card">
    <div class="card-hearder">
        <h3>Componente API</h3>
    </div>

    <div class="card-body">


      <!-- Formulario de ingreso a productos -->
      <form @submit.prevent="enviar">
        <!-- Campo nombre -->
        <div class="form-group">
          <label for="nombre">Nombre:</label>
          <input type="text" id="nombre" class="form-control"
           v-model.trim="producto.nombre"
            @input="productoDirty.nombre = true">
        <!-- Campo validacion -->    
          <div v-if="!producto.nombre && productoDirty.nombre " class="alert alert-danger mt-3">
            Campo obligatorio
          </div>
        </div>
        <!-- Campo precio -->
        <div class="form-group">
          <label for="precio">precio:</label>
          <input type="text" id="precio" class="form-control"
           v-model.number="producto.precio"
            @input="productoDirty.precio = true">
        <!-- Campo validacion -->    
          <div v-if="!producto.precio && productoDirty.precio " class="alert alert-danger mt-3">
            Campo obligatorio
          </div>
        </div>
        <!-- Campo stock -->
        <div class="form-group">
          <label for="stock">stock:</label>
          <input type="text" id="stock" class="form-control"
           v-model.number="producto.stock"
            @input="productoDirty.stock = true">
        <!-- Campo validacion -->    
          <div v-if="!producto.stock && productoDirty.stock " class="alert alert-danger mt-3">
            Campo obligatorio
          </div>
        </div>
        <!-- Campo marca -->
        <div class="form-group">
          <label for="marca">marca:</label>
          <input type="text" id="marca" class="form-control"
           v-model.trim="producto.marca"
            @input="productoDirty.marca = true">
        <!-- Campo validacion -->    
          <div v-if="!producto.marca && productoDirty.marca " class="alert alert-danger mt-3">
            Campo obligatorio
          </div>
        </div>
        <!-- Campo categoria -->
        <div class="form-group">
          <label for="categoria">categoria:</label>
          <input type="text" id="categoria" class="form-control"
           v-model.trim="producto.categoria"
            @input="productoDirty.categoria = true">
        <!-- Campo validacion -->    
          <div v-if="!producto.categoria && productoDirty.categoria " class="alert alert-danger mt-3">
            Campo obligatorio
          </div>
        </div>
        <!-- Campo detalles -->
        <div class="form-group">
          <label for="detalles">detalles:</label>
          <input type="text" id="detalles" class="form-control"
           v-model.trim="producto.detalles"
            @input="productoDirty.detalles = true">
        <!-- Campo validacion -->    
          <div v-if="!producto.detalles && productoDirty.detalles " class="alert alert-danger mt-3">
            Campo obligatorio
          </div>
        </div>
        <!-- Campo foto -->
        <div class="form-group">
          <label for="foto">foto:</label>
          <input type="text" id="foto" class="form-control"
           v-model.trim="producto.foto"
            @input="productoDirty.foto = true">
        <!-- Campo validacion -->    
          <div v-if="!producto.foto && productoDirty.foto " class="alert alert-danger mt-3">
            Campo obligatorio
          </div>
        </div>
        <!-- Campo envio -->
        <div class="form-check my-3">
          <label for="envio">envio:</label>
          <input type="checkbox" id="envio" class="form-check-input"
           v-model="producto.envio"
           >
          <label for="envio">envio</label>
        </div>
        
        <!--Boton de envio -->
        <button class="btn-success my-3" :disabled="algunCampoNoValido">Enviar</button>

      </form>

      <hr>
       <button class="btn btn-primary my-3 me-2" @click="obtener">
        Obtener 
       </button>

       <button class="btn btn-danger my-3" @click="productos = []">
        Borrar
        </button>

       <!-- <<pre><p>{{ productos }}</p></pre>  -->

      <div v-if="productos.length">
        <div class="table-responsive">
       <table class="table table-dark">
        <thead>
          <tr>
            <th>id</th>
            <th>nombre</th>
            <th>precio</th>
            <th>stock</th>
            <th>marca</th>
            <th>categoria</th>
            <th>detalles</th>
            <th>foto</th>
            <th>envio</th>
            
          </tr>
        </thead>
        <tbody>
          <tr v-for="(productos, index) in productos" :key="index">
            <td>{{ productos.id }}</td>
            <td>{{ productos.nombre }}</td>
            <td>{{ productos.precio }}</td>
            <td>{{ productos.stock }}</td>
            <td>{{ productos.marca }}</td>
            <td>{{ productos.categoria }}</td>
            <td>{{ productos.detalles }}</td>
            <td><img :src="productos.foto" alt="foto producto" width="50"/></td>
            <td>{{ productos.envio ? 'Si' : 'No' }}</td>
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
import servicioProductos from '@/Servicios/productos';

export default {
  name: 'Api',

    props: {
    // Definición de props
    },

  data() {
    return {
      servicioProductos: new servicioProductos(),
      producto: this.iniForm(),
      productoDirty: this.iniForm(),
      productos: [],
    };
  },

  computed: {
    // Propiedades computadas, son como getters
    algunCampoNoValido(){
      return Object.entries(this.producto).filter
      (e => e[0]!='envio' ? !e[1] : false).length
    },
  },

  watch: {
    // Observadores para reaccionar a cambios en datos o props
  },

  methods: {
    iniForm(){
      return {
        nombre: null,
        precio: null,
        stock: null,
        marca: null,
        categoria: null,
        detalles: null,
        foto: null,
        envio: false,
      };
    },
    /* Metdo para consumir la api rest full*/
    // GET
    async obtener(){
      this.productos = await this.servicioProductos.getAll();
      console.log(this.productos);
      this.productos = this.productos;
    },
    //POST
   async  enviar(){
      const producto = { ...this.producto };
      console.log(producto);

      //agrego un producto en el recurso remoto
      const productoGuardado = await this.servicioProductos.postProducto(producto);
      console.log(productoGuardado);

      this.producto= this.iniForm();
      this.productoDirty= this.iniForm();
    },
    // PUT
    actualizar(id){

    },
    // DELETE
    borrar(id){

    },
  },

  mounted() {
    console.log('Componente API montado');
  },
  
};
</script>

<style scoped>
  .card-hearder {
    background-color: rgb(20, 169, 35);
    padding: 10px;
    border-bottom: 1px solid #dee2e6;
  }
  .table th{
    text-transform: uppercase;
    font-size: 12px;
  }
  label{
    text-transform: uppercase;
    font-size: 12px;
  }
</style>
