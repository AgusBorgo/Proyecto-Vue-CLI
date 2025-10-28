
export default {
  name: 'Formulario',

    props: {
    // Definición de props
    },

  data() {
    return {
      formData:{
        /* Aquí podríamos agrupar los datos del formulario en un solo objeto */
        nombre: null,
        apellido: null,
        edad: null,
      }
    };
  },

  computed: {
    // Propiedades computadas, son como getters
  },

  watch: {
    // Observadores para reaccionar a cambios en datos o props
  },

  methods: {
    enviar(){
      const datosFormulario = { ...this.formData };
     console.log(datosFormulario);
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