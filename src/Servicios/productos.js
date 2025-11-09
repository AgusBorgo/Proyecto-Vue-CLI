import axios from 'axios';

class servicioProductos {
    #url = ''
    constructor() {
        this.#url = 'https://690c0b0d6ad3beba00f6f588.mockapi.io/api/productos';
    }

    getAll = async() =>{
       try{
        const {data:productos} = await axios.get(this.#url)
        return productos;
       } catch(error){
        console.log('Error productos GET', error.message)
       }
        
    }
}
export default servicioProductos;