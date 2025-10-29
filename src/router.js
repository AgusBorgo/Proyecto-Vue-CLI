import {
    createRouter,
    createWebHashHistory
}from 'vue-router';

import Binding from './components/Binding.vue';
import Estructura from './components/Estructura.vue';
import Atributos from './components/Atributos.vue';
import Formulario from './components/Formulario/index.vue';  


const routes = [

    /*Definicion de la ruta raiz*/

    { path: '/binding', component: Binding },
    { path: '/estructura', component: Estructura },
    { path: '/atributos', component: Atributos },
    { path: '/formulario', component: Formulario },

]

const router = createRouter({
    // your router options here
    // historial de rutas
    history: createWebHashHistory(),
    routes: routes
});

export default router;