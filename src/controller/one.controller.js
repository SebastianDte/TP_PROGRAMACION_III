const { writeFileSync } = require('fs');

async function getAllCharacters(req, res)  {
  try {
    const responseAllCharacters = await fetch('https://thronesapi.com/api/v2/Characters');
    const characters = await responseAllCharacters.json(); 

    if (characters) {
      
      
      return res.json(characters);
    } else {
      console.log('No se encontraron personajes.');
      return res.status(404).json({ message: 'No se encontraron personajes.' });
    }
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ message: 'Error al obtener los personajes.' });
  }
}

async function  getCharacterByName(req, res) {
  try {
    const { name } = req.params; 
    const response = await fetch(`https://thronesapi.com/api/v2/Characters?name=${name}`);
    if (!response.ok) {
      throw new Error(`API no repsonde. El status es: ${response.status}`);
    }

    const characters = await response.json();
    const matchingCharacter = characters.find(character => character.fullName.toLowerCase().includes(name.toLowerCase()));
    

    if (matchingCharacter) {
      const jsonData = JSON.stringify(characters, null, 2);
      writeFileSync('characters.json', jsonData, 'utf8');
      console.log('Los personajes han sido guardados en "characters.json".');
      return res.json(matchingCharacter);
    } else {
      console.log(`El personaje con el nombre "${name}"no existe.`);
      return res.status(404).json({ message: `El personaje no existe` }); 
    }
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ message: 'Error de servidor.' }); 
  }
}

module.exports = { getAllCharacters,getCharacterByName };