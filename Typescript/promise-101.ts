(() => {

  //CAMBIAR EL TSCONFIG PARA QUE TOME ES6
  console.log('Inicio');

    const prom1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            //resolve('Se termino el tiempo');
            reject('Se termino el tiempo');
        }, 1000);
    });

    prom1
        .then( mensaje => console.log(mensaje))
        .catch (err => console.warn(err));

  console.log('Fin');
})()

