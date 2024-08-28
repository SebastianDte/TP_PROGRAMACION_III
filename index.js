import readline from 'readline';
import { 
  getCharacter, 
  getAndSaveAllCharacters, 
  displayStarkFamily, 
  addCharacter, 
  removeCharactersWithHighID, 
  showUpdatedList
} from './ejercicio01.js';

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
function ejercicioDosMenu() {
  console.log("Pulse '1' para ejecutar el punto 1 del Ejercicio 2.");
  console.log("Pulse '2' para ejecutar el punto 2 del Ejercicio 2.");
  console.log("Pulse '0' para volver al menú principal.");

  rl.question('Seleccione una opción: ', (opcion) => {
    switch (parseInt(opcion)) {
      case 1:
        console.log('Ejecutando el punto 1 del Ejercicio 2...');
        // Aquí iría la llamada a la función correspondiente
        break;
      case 2:
        console.log('Ejecutando el punto 2 del Ejercicio 2...');
        // Aquí iría la llamada a la función correspondiente
        break;
      case 0:
        showMainMenu(); // Volver al menú principal
        return; // Sale de la función para detener el bucle
      default:
        console.log('Opción no válida.');
        break;
    }
    setTimeout(() => {
      showExercise2Menu(); 
    }, 1000); 
  });
}

showMainMenu();
