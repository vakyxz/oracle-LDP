let listaGenerica = [];
let lenguagesDeProgramacion = ['JS','C','C++','Kotlin','Python'];
lenguagesDeProgramacion.push('Java','Ruby','GoLang');
//console.log(lenguagesDeProgramacion.length);
contador = lenguagesDeProgramacion.length;

function mostrarLista(){
    while (contador>=0){
        console.log(lenguagesDeProgramacion[contador]);
        contador--;
    }
}

mostrarLista();

function promedio(listaNumeros){
    contadorPromedio = listaNumeros.length;
    let result = 0;
    while (contadorPromedio>0){
        result = result + listaNumeros[contadorPromedio-1];
        contadorPromedio--;
    }
    return result/listaNumeros.length;
}
let listaEjemplo = [4,2,7]

let resultadoPromedio = promedio(listaEjemplo);
console.log(resultadoPromedio);
