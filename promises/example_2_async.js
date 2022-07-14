const doAsyncStuffWithPromises = (numero1, numero2) => {
  let resultado = numero1 + numero2

  return new Promise(resolve => {
    setTimeout(() => resolve(resultado), 1000)
  }, reject => {
    reject("Operación fallida")
  });
}


doAsyncStuffWithPromises(1, 3)
  .then(resultado => console.log(resultado))
  .catch(
    function mensajeDeError(mensaje) {
      console.log(mensaje);
    }
  )
