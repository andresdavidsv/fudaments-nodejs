let suma = 0;
console.time('bucle');
for (let i = 0; i < 100000; i++) {
  suma += 1;
}
console.timeEnd('bucle');

console.time('asincono');
asincrona().then(() => {
  console.timeEnd('asincono');
})

function asincrona() {
  return new Promise((resolve) => {
    setTimeout(function () {
      console.log('Asincrono');
    });
  });
}
