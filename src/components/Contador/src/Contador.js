
export default {
  name: 'Contador',

    props: ['ini', 'fondo'],

  data() {
    return {
      contador:this.ini || 0,  
    };
  },

  computed: {
    // Propiedades computadas, son como getters
    
  },

  methods: {
    contar(){
      this.contador++;
    },
    getColorFondo(){
      // el uso de || es para asignar un valor por defecto
      // se llama short circuiting
      
      return 'btn-' + ( this.fondo || 'primary' );
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