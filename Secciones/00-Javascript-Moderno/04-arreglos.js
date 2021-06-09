

// Arreglos en JS
// const arreglo = new Array( 100 );
const arreglo = [1,2,3,4];
// arreglo.push(1)
// arreglo.push(2)
// arreglo.push(3)
// arreglo.push(4)

let arreglo2 = [ ...arreglo, 5 ];

const arreglo3 = arreglo2.map( function(numero) {
    return numero * 2;
});


console.log( arreglo );
console.log( arreglo2 );
console.log( arreglo3 );

//(4) [1, 2, 3, 4]
//(5) [1, 2, 3, 4, 5]
//(5) [2, 4, 6, 8, 10]





