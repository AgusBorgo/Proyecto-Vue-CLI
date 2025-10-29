import {
    createRouter,
    createWebHashHistory
}from 'vue-router';

import Binding from './components/Binding.vue';
import Estructura from './components/Estructura.vue';
import Atributos from './components/Atributos.vue';
import Formulario from './components/Formulario/index.vue';  
import Contadores from './components/Contadores.vue';

const routes = [

    /*Definicion de la ruta raiz*/
    {path: '/', redirect: '/binding'},
    /*Definicion de las rutas activas*/
    { path: '/binding', component: Binding },
    { path: '/estructura', component: Estructura },
    { path: '/atributos', component: Atributos },
    { path: '/formulario', component: Formulario },
    { path: '/contadores', component: Contadores },
    /*Definicion de ruta no encontrada*/
    {path: '/:pathMatch(.*)*', redirect: '/binding'},
]

const router = createRouter({
    // your router options here
    // historial de rutas
    history: createWebHashHistory(),
    routes: routes
});

export default router;