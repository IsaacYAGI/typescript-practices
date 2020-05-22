(function(){
    function miFuncionConvencional (a: string){
      return a.toUpperCase();
    }
  
    const miFuncionEnVar = function (a: string){
      return a.toUpperCase();
    }
  
    const miFuncionEnVarFlecha = (a: string) => a.toUpperCase();
  
    console.log(miFuncionConvencional("Convencional"));
    console.log(miFuncionEnVar("EnVar"));
    console.log(miFuncionEnVarFlecha("EnVarFlecha"));
  
  
    const sumarNormal = function (a:number, b:number){
        return a + b;
    }
  
    const sumarFlecha = (a: number, b: number) => a + b;
  
    console.log(`sumarNormal= ${sumarNormal(1,2)}`);
    console.log(`sumarFlecha= ${sumarFlecha(1,2)}`);
  
    const hulk = {
        nombre: 'Hulk',
        smash() {
            setTimeout( () => {
                console.log(`${this.nombre} smash!!!`);
            }, 1000)
        }
    }
  
    hulk.smash();
  })()
  
  