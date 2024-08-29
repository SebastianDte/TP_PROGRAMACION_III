import fetch from 'node-fetch';
import fs from 'fs';

//Punto1|Recuperar la información de todos los productos (products).
export async function getAllProducts() {
  try {
    
    const response = await fetch('https://fakestoreapi.com/products');
    const products = await response.json();

    console.log('Todos los productos:', products);

    fs.writeFileSync('products.json', JSON.stringify(products, null, 2), 'utf8');
    console.log('Los productos han sido guardados en "products.json".');

  } catch (error) {
    console.error('Error:', error);
  }
}

//Punto2|Recuperar la información de un número limitado de productos (products).
export async function getLimitedProducts() {
  const limit = 6; 

  try {
    const response = await fetch(`https://fakestoreapi.com/products?limit=${limit}`);
    const products = await response.json(); 

    console.log(`Productos limitados (mostrando ${limit} productos):`, products);
    return products;

  } catch (error) {
    console.error('Error:', error);
  }
}

// export async function addProduct(){
//   try {
//     const newProduct = {
//       id:101,
//       title:"Nuevo Producto",
//       price:29.99,
//       description:"Descripción del nuevo producto",
//       category:"electronics",
//       image:https://example.com/image.png
//     };

//     //-----------
//     let products = [];
//     try {
      
//     } catch (error) {
      
//     }

//   } catch (error) {
    
//   }
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

//const fs = require('fs');

// const datos = fs.readFileSync('./productos.json', 'utf-8');
// const productos = JSON.parse(datos);

// // console.log(productos);
// function escribirproducto (productos) {
// fs.writeFileSync('./productos.json', JSON.stringify(productos, null, 2), 'utf-8');
// }

// const agregarproducto = {
//     "id": 21,
//     "title": "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
//       "price": 109,
//       "description": "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
//       "category": "electronics",
//       "image": "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
//       "rating": {"rate": 4.8, "count": 319}
// }

// productos.push(agregarproducto);
// console.log (productos)
// escribirproducto (productos);