var user = "director";
var password = "2024";

var usuario=prompt("Ingrese usuario","");
var clave=prompt("Ingrese contraseña","");
if (user!=usuario || password!=clave)//me parece que aca va el operador lógico && donde las 2 
{                                    //condiciones tienen que ser verdaderas
    document.write("Usuario o clave incorrectos. Intente nuevamente"); 
} else 
{
    document.write("Bienvenido ",usuario)
}

console.log("Datos guardados: ",user," ",password);//y aca no se concatena con un +?
console.log("Datos ingresados: ",usuario," ",clave);

