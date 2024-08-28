import fetch from 'node-fetch';
import fs from 'fs';

// Punto 1: Función para obtener información del personaje
export async function getCharacter(name) {
  try {
    const response = await fetch('https://thronesapi.com/api/v2/Characters');
    const characters = await response.json(); 
    
    // Buscar el personaje con el nombre especificado por parámetro.
    const character = characters.find(character => character.fullName === name);
    
    if (character) {
      console.log(character); 
    } else {
      console.log(`Introdujo un Nombre incorrecto: "${name}" no existe.`);
    }
  } catch (error) {
    console.error('Error:', error); 
  }
}

// Punto 2 y 3: Función para obtener todos los personajes y guardarlos en un archivo JSON
export async function getAndSaveAllCharacters() {
  try {
    const response = await fetch('https://thronesapi.com/api/v2/Characters');
    const characters = await response.json(); 

    console.log('Todos los personajes:', characters);

    // Guarda los personajes en un archivo JSON
    fs.writeFileSync('characters.json', JSON.stringify(characters, null, 2), 'utf8');
    console.log('Los personajes han sido guardados en "characters.json".'); 

  } catch (error) {
    console.error('Error:', error); 
  }
}

// Punto 4a: Función para leer el archivo y mostrar los personajes de la familia Stark
export function displayStarkFamily() {
  try {
    const data = fs.readFileSync('characters.json', 'utf8');
    const characters = JSON.parse(data);

    // Filtro para los personajes que pertenecen a la familia Stark
    const starkFamily = characters.filter(character => character.family === 'House Stark');

    console.log('Personajes de la familia Stark:', starkFamily);
  } catch (error) {
    console.error('Error:', error);
  }
}

// Punto 4b: Función para agregar un nuevo personaje y sobrescribir el archivo original
export async function addCharacter(newCharacter) {
  try {
    // Lee el archivo actual de personajes
    let characters = [];
    try {
      const data = fs.readFileSync('characters.json', 'utf8');
      characters = JSON.parse(data);
    } catch (error) {
      console.error('Error leyendo el archivo:', error);
    }

    // Agrega el nuevo personaje al array de personajes
    characters.push(newCharacter);

    // Sobrescribe el archivo con el nuevo array de personajes
    fs.writeFileSync('characters.json', JSON.stringify(characters, null, 2), 'utf8');
    console.log('Archivo actualizado con el nuevo personaje.');
  } catch (error) {
    console.error('Error:', error);
  }
}

// Punto 4c: Función para eliminar personajes con ID mayor a 25 y sobrescribir el archivo original
export async function removeCharactersWithHighID() {
  try {
    // Lee el archivo actual de personajes
    let characters = [];
    try {
      const data = fs.readFileSync('characters.json', 'utf8');
      characters = JSON.parse(data);
    } catch (error) {
      console.error('Error leyendo el archivo:', error);
    }

    // Filtra los personajes con ID menor o igual a 25
    const filteredCharacters = characters.filter(character => character.id <= 25);

    // Sobrescribe el archivo con el array filtrado
    fs.writeFileSync('characters.json', JSON.stringify(filteredCharacters, null, 2), 'utf8');
    console.log('Archivo actualizado eliminando personajes con ID mayor a 25.');
  } catch (error) {
    console.error('Error:', error);
  }
}

// Función para mostrar la lista actualizada de personajes desde el archivo JSON.
export function showUpdatedList() {
  try {
    const data = fs.readFileSync('characters.json', 'utf8');
    const characters = JSON.parse(data);
    
    console.log('Lista actualizada de personajes:');
    console.log(characters);
  } catch (error) {
    console.error('Error:', error);
  }
}
