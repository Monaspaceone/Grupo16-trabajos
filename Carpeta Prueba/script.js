

/* 
Actividad Práctica Adicional - JavaScript Unidad 1
1. Escribe un programa de una sola línea que haga que aparezca en la pantalla un
alert que diga “Hello World”.


2. Escribe un programa de una sola línea que escriba en la pantalla un texto que
diga “Hello World” (document.write).


document.write("Hola Mundo");



3. Escribe un programa de una sola línea que escriba en la pantalla el resultado
de sumar 3 + 5.

document.write(3+5); 


4. Escribe un programa de dos líneas que pida el nombre del usuario con un
prompt y escriba un texto que diga “Hola nombreUsuario”

var userName= prompt("Escribe tu nombre");
document.write("Tu nombre es "+ userName); 


5. Escribe un programa de tres líneas que pida un número, pida otro número y
escriba el resultado de sumar estos dos números.

var num1= parseInt(prompt("escribe un numero"));
var num2= parseInt(prompt("escribe otro numero"));
document.write(num1 + num2);


6. Escribe un programa que pida dos números y escriba en la pantalla cual es el
mayor.

var num1= parseInt(prompt("escribe un numero"));
var num2= parseInt(prompt("escribe otro numero"));

if
    (num1 > num2) {
    document.write("El mayor es "+ num1);
} else if (num1 < num2) {
    document.write("El mayor es " + num2);
} else  {
    document.write ( "Los numeros son iguales"); 
}

/*
7. Escribe un programa que pida 3 números y escriba en la pantalla el mayor de
los tres.

var num1= parseInt(prompt("escribe un numero"));
var num2= parseInt(prompt("escribe otro numero"));
var num3= parseInt(prompt(  "escribe un tercer numero"));

if
    (num1 >= num2 && num1 >= num3) {
    document.write("El mayor es "+ num1);
} else if (num2 >= num1 && num2 >= num3) {
    document.write("El mayor es " + num2);
}  else {
    document.write ("El mayor es " + num3);
}




8. Escribe un programa que pida un número y diga si es divisible por 2


var num1= parseInt(prompt("escribe un numero"));

if (num1 % 2=== 0 && num1>1) {
    document.write ("el numero "+ num1+ " es divisible por 2");
} else {
    document.write ( "el numero "+ num1 + " no es divisible por 2");
}


9. Escribe un programa que pida una frase y escriba cuantas veces aparece la
letra a



var frase= prompt( "Escriba una frase");
var letra= frase.split(''); 
var contador=0; 



for (var i = 0; i < letra.length; i++) { 
 
     if ( letra[i]==="a" || letra[1]==="A") {
            contador++; 
        }

    } 

document.write("La cantidad de veces que se repite la letra A es: " + contador); 

/*

split lo use para separar cada una de las strings, ('') para guardar cada una de las letras.
el contador, es una variable creada para que luego se vaya sumando un uno por cada vez que la letra a esta.
length es para contar la cantidad de letras , para hacer la iteracion.


10. Escribe un programa que pida una frase y escriba las vocales que aparecen

var frase= prompt( "Escriba una frase en minuscula por favor");
var letras= frase.split(''); 
var array=[]; 

for (var i = 0; i < letras.length; i++) { 
    var letra= letras[i]; // 
     if ( letra ==="a" || letra==="e" || letra==="i" || letra==="o" || letra==="u") {
        array.push(letra); // Agregar la vocal al array con el push
    }

   
}

document.write("Las vocales que aparecen en la frase son: " + array.join(', '));
        // join es para unir los elementos del array

    



11. Escribe un programa que pida una frase y escriba cuántas de las letras que
tiene son vocales

   



var frase= prompt( "Escriba una frase en minuscula por favor");
var letras= frase.split(''); 
var array=[]; 

for (var i = 0; i < letras.length; i++) { 
    var letra= letras[i]; // 
     if ( letra ==="a" || letra==="e" || letra==="i" || letra==="o" || letra==="u") {
        array.push(letra); // Agregar la vocal al array con el push
    }
}

document.write("Las cantidad de vocales en total que aparecen en la frase son: " + array.length);





/*


12. Escribe un programa que pida una frase y escriba cuántas veces aparecen
cada una de las vocales


var frase= prompt( "Escriba una frase en minuscula por favor");
var letras= frase.split('');
var contA=0
var contE=0
var contI=0
var contO=0 
var contU=0 

for (var i = 0; i < letras.length; i++) { 
    var letra= letras[i]; // 
     if ( letra ==="a" ){
        contA++
     }if  (letra==="e") {
        contE++
     } if (letra==="i") { contI++
     } if (letra==="o") { 
        contO ++
     } if (letra==="u") { 
        contU ++}
}

document.write("Las cantidad de  vocales A es: " + contA + ",  la cantidad de E: " + 
contE + ", la cantidad de I: "+ contI + ",  la cantidad de O:  " + contO +  
",  la cantidad de u "+ contU);


/*

otra manera de hacerlo: 



for (var i = 0; i < frase.length; i++) {
    var letra = frase[i];

    // Verificar si la letra actual es una vocal y aumentar el contador correspondiente
    switch (letra) {
        case 'a':
            contadorA++;
            break;
        case 'e':
            contadorE++;
            break;
        case 'i':
            contadorI++;
            break;
        case 'o':
            contadorO++;
            break;
        case 'u':
            contadorU++;
            break;
    }
}

// Mostrar los resultados
console.log("La vocal 'a' aparece " + contadorA + " veces.");
console.log("La vocal 'e' aparece " + contadorE + " veces.");
console.log("La vocal 'i' aparece " + contadorI + " veces.");
console.log("La vocal 'o' aparece " + contadorO + " veces.");
console.log("La vocal 'u' aparece " + contadorU + " veces.");



13. Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o
7 (sólo hay que comprobar si lo es por uno de los cuatro)


var num= prompt("Escriba un número");

if (num % 2=== 0 || num % 3=== 0 || num % 5=== 0 || num % 7=== 0) {
    document.write("El numero es divisible por 2, 3, 5 o por 7"); 
} else {
    document.write( "este numero no es divisible ni por 2, ni por 3, ni por 5 ni por 7"); 
}


/*


14. Añadir al ejercicio anterior que nos diga por cual de los cuatro es divisible (hay
que decir todos por   que es divisible)


var num= prompt("Escriba un número");
var numeros= [];

if (num %2 ===0) {
 numeros.push(2);   

}if (num %3 ===0) {
 numeros.push(3); 
}if (num %5===0) {
 numeros.push(5); 
} if( num % 7 ===0) {
 numeros.push(7);
}

if (numeros.length > 0) {
    document.write("El número es divisible por los siguientes números: " + numeros.join(", "));
} else {
    document.write("El número no es divisible por los números 2, 3, 5 o 7");
}



/*
15. Escribir un programa que escriba en pantalla los divisores de un número dado


var num = parseInt(prompt("Escriba un número:"));
var num1=[]; 


for (var i = 1; i <= num; i++) {
    if (num % i === 0) {
        num1.push(i);
    }
}

document.write("Los divisores de " + num + " son: " + num1.join(', '));

/*

16. Escribir un programa que escriba en pantalla los divisores comunes de dos
números dados



var num = parseInt(prompt("Escriba un número:"));
var secNum= parseInt(prompt("Escriba un número:"));
var num1=[];  


for (var i = 1; i <= num; i++) {
    if (num % i === 0  && secNum % i ===0) {
        num1.push(i);
    }
}

document.write("Los divisores de " + num + " y " + secNum + " son: " + num1.join(', '));

/* 
17. Escribir un programa que nos diga si un número dado es primo (no es divisible
por ninguno otro número que no sea él mismo o la unidad)


*/
var numero= parseInt(prompt( "Escriba un numero"));

if (numero === 0 || numero === 1) {
    return false;
  }
  for (var i = 2; i < numero; i++) {
    if (numero % i === 0) {
      document.write("el numero no es primo");
    } else { 
  document.write(" El numero es primo")
    } 
} 

/*




18. Pide la edad y si es mayor de 18 años indica que ya puede conducir
19. Pide una nota (número). Muestra la calificación según la nota:
● 0-3: Muy deficiente
● 3-5: Insuficiente
● 5-6: Suficiente
● 6-7: Bien
● 7-9: Notable
● 9-10: Sobresaliente
20. Realiza un scriptque pida cadenas de texto hasta que se pulse “cancelar”. Al
salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión
21. Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un
número deberá indicarse con un «alert» y seguir pidiendo. Al salir con “cancelar”
deberá indicarse la suma total de los números introducidos.
22. Realizar una página con un script que calcule el valor de la letra de un número
de DNI (Documento Nacional de Identidad).
El algoritmo para calcular la letra del dni es el siguiente :
● El número debe ser entre 0 y 99999999
● Debemos calcular el resto de la división entera entre el número y el número
23.
● Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:
(T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E)
● Si lo introducido no es un número deberá indicarse con un alert y volver a
preguntar.
● Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».
23. Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma : 1
22
333
4444
55555
666666
…….
24. Haz un script que escriba una pirámide inversa de los números del 1 al
número que indique el usuario de la siguiente forma : (suponiendo que indica 6).
666666
55555
4444
333
22
1
25. Un script que escriba los números del 1 al 500, que indique cuáles son
múltiplos de 4 y de 9 y que cada 5 líneas muestre una línea horizontal. Por ejemplo :
1
2
3
4 (Múltiplo de 4)
5
————————————————————
6
7
8 (Múltiplo de 4)
9 (Múltiplo de 9)
10

*/