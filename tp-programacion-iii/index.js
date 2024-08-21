// index.js

import fetch from 'node-fetch'; 
import fs from 'fs';

// Punto 1: Función para obtener información del personaje
async function getCharacter(name) {
  try {
    const response = await fetch('https://thronesapi.com/api/v2/Characters');
    const characters = await response.json(); 
    
    // Buscar el personaje con el nombre especificado por parametro.
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
async function getAndSaveAllCharacters() {
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
function displayStarkFamily() {
    try {
        const data = fs.readFileSync('characters.json', 'utf8');
        const characters = JSON.parse(data);

        // Filtra los personajes que pertenecen a la familia Stark
        const starkFamily = characters.filter(character => character.family === 'House Stark');

        // Muestra los personajes de la familia Stark por consola
        console.log('Personajes de la familia Stark:', starkFamily);
    } catch (error) {
        console.error('Error:', error);
    }
}

// Punto 4b: Función para agregar un nuevo personaje y sobrescribir el archivo original
function addCharacter(newCharacter) {
    try {
        const data = fs.readFileSync('characters.json', 'utf8');
        const characters = JSON.parse(data);

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
function removeCharactersWithHighID() {
    try {
        const data = fs.readFileSync('characters.json', 'utf8');
        const characters = JSON.parse(data);

        // Filtra los personajes con ID menor o igual a 25
        const filteredCharacters = characters.filter(character => character.id <= 25);

        // Sobrescribe el archivo con el array filtrado
        fs.writeFileSync('characters.json', JSON.stringify(filteredCharacters, null, 2), 'utf8');
        console.log('Archivo actualizado eliminando personajes con ID mayor a 25.');
    } catch (error) {
        console.error('Error:', error);
    }
}

//***LLAMADAS A LAS FUNCIONES PARA PROBAR LOS PUNTOS.***

// Punto 1: Recuperar información del personaje "Ned Stark"
//getCharacter('Ned Star');

// Punto 2 y 3. Muestra por consola todos los persoajes y los guarda en un archivo JSON.
//etAndSaveAllCharacters();

// Punto 4.a. Función para mostrar los personajes de la familia Stark
//displayStarkFamily();

// Ejemplo para agregar Personaje. Punto 4.b
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
// Punto 4.b Llama a la función para agregar el nuevo personaje
//addCharacter(newCharacter);

// Punto 4.C. Función para eliminar personajes con ID mayor a 25
//removeCharactersWithHighID();


