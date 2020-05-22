(function(){
  function activar ( 
      //Orden de parametros
      //1. Obligatorios
      //2. Opcionales sin valores por defecto
      //3. Opcionales con valores por defecto
      quien: string, 
      momento?: string, //Opcional sin valor por defecto
      objeto: string = 'Batiseñal' //Opcional con valor por defecto
    ) {
        if ( momento ){
            console.log(`${quien} activo ${objeto} por la ${momento}`)
            
        }else{
            console.log(`${quien} activo ${objeto}`)
        }
  }

  activar( "Gordon");
  activar( "Gordon", "tarde");
  activar( "Gordon", "tarde", "señal normal");
})()

