//AVANCE EJERCICIO 2 DE ELIZABETH.

const urlApi = 'https://fakestoreapi.com/products';

// async function mostrarproductos() {
//     try{
//         const response = await fetch(urlApi);
//         if (!response.ok){ 
//             throw new Error('Error ' + response.status)
//         }
                
//         const datos = await response.json();
//         console.log(datos);
//     }catch(error){
//         console.log('error ', error);
//     }
// }

// mostrarproductos();

// async function obtenerProductosLimitados(cantidad) {
//     try {
//         let respuesta = await fetch('https://fakestoreapi.com/products');
//         let productos = await respuesta.json();
        
//         // Filtra y retorna solo la cantidad deseada de productos
//         let productosFiltrados = productos.filter((producto, index) => index < cantidad);
//         return productosFiltrados;
//     } catch (error) {
//         console.error(`Error al obtener ${cantidad} productos:`, error);
//     }
// }
// obtenerProductosLimitados(15).then(productos => console.log(productos));

const fs = require('fs');

const datos = fs.readFileSync('./productos.json', 'utf-8');
const productos = JSON.parse(datos);

// console.log(productos);
function escribirproducto (productos) {
fs.writeFileSync('./productos.json', JSON.stringify(productos, null, 2), 'utf-8');
}

const agregarproducto = {
    "id": 21,
    "title": "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
      "price": 109,
      "description": "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
      "category": "electronics",
      "image": "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
      "rating": {"rate": 4.8, "count": 319}
}

productos.push(agregarproducto);
console.log (productos)
escribirproducto (productos);