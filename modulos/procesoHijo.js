const { exec, spawn } = require('child_process');
// const { stdout, stderr } = require('node:process');
// exec('node errores.js', (error, stdout, stderr) => {
//   if (error) {
//     console.error(error);
//     return false;
//   }
//   console.log(stdout);
// });

let proceso = spawn('ls', ['la']);

console.log(proceso.pid);
console.log(proceso.connected);

proceso.stdout.on('data', function (dato) {
  console.log(process.kill);
  console.log(dato.toString());
});

proceso.on('exit',function () {
  console.log("El proceso termino");
  console.log(process.kill);
})