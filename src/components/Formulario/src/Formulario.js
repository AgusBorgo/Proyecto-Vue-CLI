
export default {
  name: 'Formulario',

    props: {
    // Definición de props
    },

  data() {
    return {
      formData: this.getInicialData(),
      formDirty: this.getInicialData(),
    };
  },

  computed: {
    // Propiedades computadas, son como getters
    errorNombre() {
      let mensaje = '';
      if (!this.formData.nombre) {
        mensaje = 'El nombre es obligatorio.';
      } else if (this.formData.nombre.length < 3) {
        mensaje = 'El nombre debe tener al menos 3 caracteres.';
      } else if (this.formData.nombre.length > 20) {
        mensaje = 'El nombre no debe exceder los 20 caracteres.';
      } else if (!/^[a-zA-Z]+$/.test(this.formData.nombre)) {
        mensaje = 'El nombre solo debe contener letras.';
      } else if (this.formData.nombre.includes(' ')) {
        mensaje = 'El nombre no debe contener espacios.';
      }

      return{
        mensaje: mensaje,
        mostrar: mensaje != '' && this.formDirty.nombre,
        ok: mensaje == '',
      }
    },
    errorApellido() {
      let mensaje = '';
      if (!this.formData.apellido) {
        mensaje = 'El apellido es obligatorio.';
      } else if (this.formData.apellido.length < 3) {
        mensaje = 'El apellido debe tener al menos 3 caracteres.';
      } else if (this.formData.apellido.length > 20) {
        mensaje = 'El apellido no debe exceder los 20 caracteres.';
      } else if (!/^[a-zA-Z]+$/.test(this.formData.apellido)) {
        mensaje = 'El apellido solo debe contener letras.';
      } else if (this.formData.apellido.includes(' ')) {
        mensaje = 'El apellido no debe contener espacios.';
      }

      return{
        mensaje: mensaje,
        mostrar: mensaje != '' && this.formDirty.nombre,
        ok: mensaje == '',
      }
    },
    errorEdad() {
      let mensaje = ''; 
      if (this.formData.edad === null || this.formData.edad === '') {
        mensaje = 'La edad es obligatoria.';
      } else if(edad < 0){
        mensaje = 'La edad no puede ser negativa.';
      } else if (this.formData.edad < 18) {
        mensaje = 'Debes ser mayor de edad.';
      } else if (this.formData.edad > 120) {
        mensaje = 'Por favor ingresa una edad válida.';
      }
      return{
        mensaje: mensaje,
        mostrar: mensaje != '' && this.formDirty.edad,
        ok: mensaje == '',
      }
    }
  },

  watch: {
    // Observadores para reaccionar a cambios en datos o props
  },

  methods: {
    getInicialData(){
      return{
        nombre: null,
        apellido: null,
        edad: null,
      }

    },
    estadoBotonDesabilitado(){
      return !this.errorNombre.ok
          || !this.errorApellido.ok
          || !this.errorEdad.ok;
    },

    enviar(){
    const datosFormulario = { ...this.formData };
     console.log(datosFormulario);
     this.getInicialData();
     this.formData = this.getInicialData();
     this.formDirty = this.getInicialData();
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