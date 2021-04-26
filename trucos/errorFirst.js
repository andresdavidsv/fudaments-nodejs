function asincrona(callback) {
  setTimeout(function () {
    try {
      let a = 3 + z;
      callback(null, a);
    } catch (error) {
      callback(error);
    }
  }, 1000);
}
asincrona(function (error, dato) {
  if (error) {
    console.error('Tenemos un error');
    console.error(error);
    // throw error; //NO VA AFUNCIONAR
    return false;
  }
  console.log('Todo fue exitoso');
});
