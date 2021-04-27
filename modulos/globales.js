console.log(global);

let i = 0;

let intervalo = setInterval(function () {
  console.log('hola');
  if (i === 3) {
    clearInterval(intervalo);
  }
  i++;
}, 1000);

setImmediate(function () {
  console.log('Inmediate');
});

console.log(process);

console.log(__dirname);

global.miVariable = 'valor';

console.log(miVariable);
