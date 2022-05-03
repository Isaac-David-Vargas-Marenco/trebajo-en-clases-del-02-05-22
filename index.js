alert ('Esta funcionando');

//trabajo en clases del 2-05-22 *_* primera parte

var edad = 19;

if ((edad>=18)||(edad>60)) {
    console.log('me compraron un helado de chocochips');
}else{
    console.log('no me compraron helado de chocochips');
}
// trabajo en clases del 2-05-22 *_* segunda parte

var perro = true;
 var   gato = true;
 
if ((perro = true)&&(gato = true)) {  // hay que poner false en una de las dos variables
 console.log('entoces estoy feliz');   
}else{
    console.log('estoy triste');
}

var numero_inicial = 1

function contador_de_numeros_hasta_el_100(numero_inicial) {
    while (numero_inicial<100) {
       console.log(numero_inicial); 
    }
    numero_inicial = numero_inicial+3;
}

contador_de_numeros_hasta_el_100(numero_inicial);