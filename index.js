const { argv } = require('./yargs');
const funciones = require('./funciones.js')

// console.log(argv);
// console.log('Posicion 0' + argv._[0])

let comando = argv._[0];

switch(comando){
    case 'crear':
    funciones.crear(argv);
    break

    case 'mostrar':
    funciones.mostrar();
    break

    default:
    console.log("No ingreso ninguna funcion existente");
}

// if(argv._[0] == 'crear'){
//  funciones.crear(argv);
// }