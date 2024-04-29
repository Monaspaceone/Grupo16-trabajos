var user = "director";
var password = "2024";

var usuario=prompt("Ingrese usuario","");
var clave=prompt("Ingrese contraseña","");
if (user!=usuario || password!=clave)
{
    document.write("Usuario o clave incorrectos. Intente nuevamente"); 
} else 
{
    document.write("Bienvenido ",usuario)
}

console.log("Datos guardados: ",user," ",password);
console.log("Datos ingresados: ",usuario," ",clave);

