import axios from "axios";
console.log('Servicios http');

// 1) xhr- HHRHttpRequest
/* const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');
xhr.addEventListener('load', () => {
    if(xhr.status == 200){
        const posts = JSON.parse(xhr.response);
        conosole.log(posts)

    } else {
        console.error(`Error en la solicitud: ${xhr.status}`);
    }
})
xhr.send();
 */


// 2) fetch API- Implementacion moderna de solicitudes HTTP, basada en promesas
// a) Sintaxis basica, then/ catch
/* fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => {
    console.log(response);
    return response.json()
}) // convertir la respuesta a JSON
.then(posts => console.log(posts)) // manejar los datos de los posts
.catch(error => console.error('Error en la solicitud:', error)); // manejar errores
 */
// b) Sintaxis con async/ await
// await espera a que se resuelva
//  la promesa

// IIFE - Immediately Invoked Function Expression- Funcion que se ejecuta inmediatamente ifi

/* ;(async function(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts = await response.json();
        console.log(posts);
    } catch (error) {
        console.error('Error en la solicitud:', error);
    }   
})();
 */

// 3) Axios- Libreria externa para hacer solicitudes HTTP
/* ;(async function(){
    try {
        // const rta = await axios('https://jsonplaceholder.typicode.com/posts');
        //console.log(rta.data); 

        //Object destructuring
        //const {data} = await axios('https://jsonplaceholder.typicode.com/posts');
        //console.log(data); 

        // Renombrar la variable data a posts
        const {data : posts} = await axios('https://jsonplaceholder.typicode.com/posts');
        console.log(posts);

    } catch (error) {
        console.error('Error en la solicitud:', error);
    }   
})();
 */

export const obtenerPosts = async () => {
    try {
        const {data : posts} = await axios('https://jsonplaceholder.typicode.com/posts');
        return posts;

    } catch (error) {
        console.error('Error en la solicitud:', error);
    }   
}
