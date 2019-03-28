//file system
const fs = require('fs');

listaEstudiantes = [];

//funcion crear
const crear = (estudiante) => {
    listar();
    let est = {
        nombre: estudiante.nombre,
        matematicas: estudiante.matematicas,
        ingles: estudiante.ingles,
        programacion: estudiante.programacion
    };
//validamos para que no hayan datos duplicados
let duplicado=listaEstudiantes.find(nom => nom.nombre == estudiante.nombre);
//si no se encontro duplicado
if(!duplicado){
    //ingresamos el estudiante al array de estudiantes
    listaEstudiantes.push(est);
  
    console.log(listaEstudiantes);
    //llamamos la funcion guardar
    guardar();
}else{
        console.log("Ya existe un estudiante con ese nombre");
    }
}


const listar=()=>{
    //se puede usar de ambas maneras

    //como funcion sincronica
    try{
    listaEstudiantes=require('./listado.json');
    }catch(error){
        listaEstudiantes=[];
    }
    //como funcion asincronica
    // listaEstudiantes=JSON.parse(fs.readFileSync('listado.json'));
}



const mostrar = () => {
    listar();
   console.log("Notas d elos estudiantes:");
    listaEstudiantes.forEach(estudiante => {
        console.log(estudiante.nombre);
        console.log("Notas:");
        console.log('Matemáticas: ' +estudiante.matematicas);
        console.log('Ingles: ' +estudiante.ingles);
        console.log('Programación: ' +estudiante.programacion);
    });
}

//funcion que guarda el estudiante en el archivo .json
const guardar = () => {
    //guardamos el array en el archivo json
let datos = JSON.stringify(listaEstudiantes);
fs.writeFile('listado.json',datos,(err)=>{
    if(err) throw (err);
    console.log("Archivo creado con exito");
})
}

//esportamos la funcion
module.exports = {
    crear,
    mostrar
}
