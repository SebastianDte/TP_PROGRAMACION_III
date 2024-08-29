import readline from 'readline';
import { 
  getCharacter, 
  getAndSaveAllCharacters, 
  displayStarkFamily, 
  addCharacter, 
  removeCharactersWithHighID, 
  showUpdatedList
} from './ejercicio01.js';

import {
  getAllProducts
} from './ejercicio02.js';

// interfaz E/S de datos en la consola.
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Menú principal
function showMainMenu() {
  console.clear();
  console.log("Pulse '1' para ejecutar el Ejercicio 1.");
  console.log("Pulse '2' para ejecutar el Ejercicio 2.");
  console.log("Pulse '0' para salir.");
  
  rl.question('Seleccione una opción: ', (opcion) => {
    switch (parseInt(opcion)) {
      case 1:
        ejercicioUnoMenu(); 
        break;
      case 2:
        ejercicioDosMenu(); 
        break;
      case 0:
        console.log('Saliendo...');
        rl.close(); 
        return;
      default:
        console.log('Opción no válida.');
        break;
    }
  });
}

// Menú del Ejercicio 1
function ejercicioUnoMenu() {
  console.log("Pulse '1' para recuperar la información del personaje “Ned Stark”");
  console.log("Pulse '2' para recuperar todos los personajes disponibles y guardarlos localmente en JSON.");
  console.log("Pulse '3' para mostrar los personajes de la familia Stark.");
  console.log("Pulse '4' para agregar un nuevo personaje.");
  console.log("Pulse '5' para eliminar personajes con ID mayor a 25.");
  console.log("Pulse '6' para ver la lista actualizada de personajes.");
  console.log("Pulse '0' para volver al menú principal.");

  rl.question('Seleccione una opción: ', async (opcion) => {
    switch (parseInt(opcion)) {
      case 1:
        console.log('Recuperando la información del personaje “Ned Stark”...');
        await getCharacter('Ned Stark');
        break;
      case 2:
        console.log('Recupernado todos los personajes disponibles y guardandolos localmente...');
        await getAndSaveAllCharacters();
        break;
      case 3:
        console.log('Mostrando personajes de la familia Stark...');
        displayStarkFamily();
        break;
      case 4:
        const newCharacter = {
          id: 100, 
          firstName: 'Jon',
          lastName: 'Snow',
          fullName: 'Jon Snow',
          title: 'King in the North',
          family: 'House Stark',
          image: 'jon-snow.jpg',
          imageUrl: 'https://thronesapi.com/assets/images/jon-snow.jpg'
        };
        console.log('Agregando un nuevo personaje...');
        addCharacter(newCharacter);
        break;
      case 5:
        console.log('Eliminando personajes con ID mayor a 25...');
        removeCharactersWithHighID();
        break;
        case 6:
          console.log('Mostrando la lista actualizada de personajes...');
          showUpdatedList();
          break;
      case 0:
        showMainMenu(); 
        return;
      default:
        console.log('Opción no válida.');
        break;
    }

    setTimeout(() => {
      ejercicioUnoMenu(); 
    }, 1000); 
  });
}

// Función Ejercicio 2.
async function ejercicioDosMenu() {
  console.clear();
  console.log("Pulse '1' para Recuperar la información de todos los productos");
  console.log("Pulse '2' para Recuperar la información de un número limitado de productos.");
  console.log("Pulse '3' para Agregar un nuevo producto.");
  console.log("Pulse '4' para Retornar un producto según un ID.");
  console.log("Pulse '5' para Eliminar un producto.");
  console.log("Pulse '0' para volver al menú principal.");

  rl.question('Seleccione una opción: ', async(opcion) => {
    switch (parseInt(opcion)) {
      case 1:
        console.log('Recuperando la información de todos los productos...');
        await getAllProducts();
        break;
      case 2:
        console.log('Recuperando la información de un número limitado de productos...');
        getLimitedProducts();
        break;
      case 3:
        console.log('Agregando un nuevo producto...');
        //función.
        break;
      case 4:
        console.log('Buscando el producto por ID ');
        //función.
        break;
      case 5:
        console.log('Eliminando el producto por ID ');
        //función.
        break;
      case 0:
        showMainMenu(); 
        return;
      default:
        console.log('Opción no válida.');
        break;
    }

    setTimeout(() => {
      ejercicioDosMenu();
    }, 1000);
  });
}

showMainMenu();
