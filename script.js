
function pintarNumero(numero){

   // document.getElementById("data").value = numero
    pintarDatos(numero)
}
function pintarOperador(operador){
   //document.getElementById("data").value = operador
    pintarDatos(` ${operador} `)
}

function pintarDatos(dato){
    let valorInput = document.getElementById('data')

    //valorInput.value = valorInput.value + dato
     valorInput.value = `${valorInput.value}${dato}`


}
function limpiarResultados(){
   document.getElementById('data').value = null


}

function mostrarResultado(){
    let valorInput = document.getElementById('data').value
    let arreglo = valorInput.split (' ')
   
   // let suma = parseInt (arreglo[0])+parseInt(arreglo[2])
    //document.getElementById('data').value = suma


}
if (arreglo[1] =="+"){
    let suma = parseInt (arreglo[0])+ parseInt(arreglo[2])
    document.getElementById ('data').value = suma 
}else if (arreglo[1] =="-"){
    let resta = parseInt(arreglo[0]) - parseInt(arreglo[2])
    document.getElementById ('data').value = resta
}else if (arreglo[1] == "*"){
    let multiplicar = parseInt(arreglo[0]) * parseInt(arreglo[2])
    document.getElementById ('data').value = multiplicar
}else if (arreglo[1] == "/"){
    let dividir = parseInt(arreglo[0]) / parseInt(arreglo[2])
    document.getElementById ('data').value = dividir
 }


 switch(arreglo[1]){
     case '+':

 }
function preguntarDia(){
    let dia = prompt('¿Ingresa el Dia?')

    switch(dia){
        case "lunes":
        alert("Digitaste Lunes")
        break
    }
    switch(dia){
        case "Martes":
        alert("Digitaste Lunes")
        break
    }
    switch(dia){
        case "Miercoles":
        alert("Digitaste Lunes")
        break
    }
    switch(dia){
        case "Jueves":
        alert("Digitaste Lunes")
        break
    }
    switch(dia){
        case "Viernes":
        alert("Digitaste Lunes")
        break
    }
    switch(dia){
        case "Sabado":
        alert("Digitaste Lunes")
        break
    }
    switch(dia){
        case "Domingo ":
        alert("Digitaste Lunes")
        break
    }
}



