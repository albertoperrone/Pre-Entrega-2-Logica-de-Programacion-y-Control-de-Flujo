
let bienvenido = false
for (let intentos = 3; intentos >0 && !bienvenido; intentos--) {
    let usuario =prompt("Ingrese el usuario del Presidente o Vicepresidente")
if(usuario =="alberto") {
    bienvenido=true
    alert("Bienvenido señor presidente")
    console.log("Bienvenido al panel de administrador señor Presidente")
} else if (usuario =="ezequiel") {
    bienvenido=true
    alert("Bienvenido señor Vicepresidente")
    console.log("Bienvenido al panel de sub-administrador señor Vicepresidente")
} else {
    alert("Acceso denegado")
    console.log("Acceso denegado")
    }
}
if (!bienvenido) {
    alert("ALERTA DE SEGURIDAD, INTRUSO EN LA OFICINA DEL PRESIDENTE!")
    console.log("Sistema bloqueado por intento de infiltración")
}