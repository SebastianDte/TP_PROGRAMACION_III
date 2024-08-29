import fetch from 'node-fetch';
import fs from 'fs';

//Punto1|Recuperar la información de todos los productos (products).
export async function getAllProducts() {
  try {
    
    const response = await fetch('https://fakestoreapi.com/products');
    const products = await response.json();

    console.log('Todos los productos:', products);

    fs.writeFileSync('products.json', JSON.stringify(products, null, 2), 'utf-8');
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

//Punto3|Agregar un nuevo producto (product).
export function addProduct(){
  try {
    const newProduct = {
      id:101,
      title:"Nuevo Producto",
      price:29.99,
      description:"Descripción del nuevo producto",
      category:"electronics",
      image:"https://example.com/image.png"
    };
    
    let products = [];
    try {
      const data = fs.readFileSync('products.json','utf-8');
      products = JSON.parse(data);
      products.push(newProduct);
      const jsonUpdated = fs.writeFileSync('products.json',JSON.stringify(products,null,2),'utf-8');
      console.log('Producto creado con éxito');
      return jsonUpdated

    } catch (error) {
      console.error('Error leyendo el archivo: ',error);
    }

  } catch (error) {
    console.error('Error',error);
  }
}

//Punto4|Retornar un producto (product) según un “id” como parámetro.
export function getProductById(){
  try {
    const productsData = fs.readFileSync('products.json','utf-8');
    const idProductToSearch = 3
    const products = JSON.parse(productsData); 
    const haveProduct =  products.filter(product => product.id === idProductToSearch)

    if(haveProduct){
      console.log(`El producto con el id ${idProductToSearch} es: `,haveProduct )
    } else {
      console.log(`El producto con el id ${idProductToSearch} no esta disponible.` )
    }
    
  } catch (error) {
    console.log("Error al buscar el producto. Intete nuevamente más tarde.")
  }
} 




//Punto5|Eliminar(product).
export function removePrductById(){
  try {
    const deleteProductId = 5
    let products = [];
    const data = fs.readFileSync('products.json','utf-8');
    products = JSON.parse(data);

    const filteredProducts = products.filter(product => product.id !== deleteProductId);
    if(filteredProducts.length === products.length){
       console.log(`El producto con el id ${idProductToSearch} noexiste en productos.` );
    } else {
       const jsonUpdated = fs.writeFileSync('products.json',JSON.stringify(filteredProducts,null,2),'utf-8');
      console.log("Producto eliminado satisfactoriamente.");
      return jsonUpdated;
    }
  } catch (error) {
    console.error('Error al leer el archivo ', error);
    return; 
  }
}




