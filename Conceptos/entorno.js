// Variables de Entorno
// npm install dotenv
// require('dotenv').config()
// Y creamos el archivo .env

require('dotenv').config();
// Podemos configurarle valores por defecto
let nombre = process.env.NOMBRE || 'sin nombre';
let apellido = process.env.APELLIDO || 'sin apellido';

console.log('Saludos ' + nombre);
console.log('Mi apellido es ' + apellido);
