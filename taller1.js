// -------- *** TALLER 1 - PROGRAMACION AVANZADA *** -------- 
/*
// Ejercicio 1 - funcion tradicional
function calcularDistancia (x1,x2,y1,y2){
    return (Math.sqrt(Math.pow(x2-x1,2) + Math.pow(y2-y1,2)))
}
let distancia = calcularDistancia(1,1,2,0)
console.log('la distancia calculada fue: '+ distancia)

// Ejercicio 1 - funcion flecha
const calcularDistancia = (x1,x2,y1,y2)=> Math.sqrt(Math.pow(x2-x1,2) + Math.pow(y2-y1,2))

let distanciaFlecha = calcularDistancia(1,1,2,0)
console.log('la distancia calculada fue: '+ distanciaFlecha)

// Ejercicio 1 - callback
function calcularDistancia(x1,x2,y1,y2,secundaria){
    let distancia = Math.sqrt(Math.pow(x2-x1,2)+ Math.pow(y2-y1,2))
    secundaria(distancia)
}
calcularDistancia(1,1,2,0, function(parametro){
    console.log(' la distancia al planeta es: ' +parametro)
})

// Ejercicio 2 - funcion tradicional
function obtenerNombre(codigo){
    let nombre = codigo.split(':')[0] + codigo.split(':')[1]
    return nombre
}
let resultado = obtenerNombre('11012345 : Gilma')
console.log(resultado)
 
// Ejercicio 2 - funcion flecha --> como imprimir separado? 
obtenerNombre = codigo => nombre = codigo.split(' : ')[1] + codigo.split(' : ')[0]
let resultado = obtenerNombre('11012345 : Gilma') 
console.log(resultado)

// Ejercicio 2 - callback
function obtenerNombre(codigo,secundaria){
    let nombre = codigo.split(': ')[0] + codigo.split(':')[1]
    secundaria(nombre)
}
    obtenerNombre('12312dwf : Gilma', function(parametro) {
        console.log('El codigo de la nave y el piloto es: ' +parametro)
    })

// Ejercicio 3 - funcion tradicional
function monitorearTemperatura(grados){
    let temperaturaPromedio
    let sumaTemperaturaPorDia = 0
    let cantidadesTemperatura=0

    grados.forEach(function(grado){
        sumaTemperaturaPorDia=(sumaTemperaturaPorDia+grado)
        cantidadesTemperatura = cantidadesTemperatura +1
        temperaturaPromedio = sumaTemperaturaPorDia/cantidadesTemperatura
    })
    console.log('Segun el numero de ' +cantidadesTemperatura + ' días ingresados, la temperatura promedio es: ' +  temperaturaPromedio.toFixed() + ' grados')
}

let arregloGrados=[20,20,20,20,20,20, 10]
monitorearTemperatura(arregloGrados)

// Ejercicio 3 - funcion flecha
let monitorearTemperatura = grados =>{
    let temperaturaPromedio
    let sumaTemperaturaPorDia = 0
    let cantidadesTemperatura=0

    grados.forEach(function(grado){
        sumaTemperaturaPorDia=(sumaTemperaturaPorDia+grado)
        cantidadesTemperatura = cantidadesTemperatura +1
        temperaturaPromedio = sumaTemperaturaPorDia/cantidadesTemperatura
    })
    console.log('Segun el numero de ' +cantidadesTemperatura + ' días ingresados, la temperatura promedio es: ' +  temperaturaPromedio.toFixed() + ' grados')
}

let arregloGrados=[20,20,20,20,20,20, 10]
monitorearTemperatura(arregloGrados)

// Ejercicio 3 - callback
function calcularTemperatura(temperaturas ,secundaria){
    let sumaDias= 0
    let sumaGrados = 0
    let temperaturaMedia
        temperaturas.forEach(function(temperatura){
            sumaDias=sumaDias+1
            sumaGrados = (sumaGrados+temperatura)
            temperaturaMedia =sumaGrados/sumaDias
        })
        secundaria(temperaturaMedia,sumaDias)
    }

let arregloTemperaturas=[20,20,20,20,20,20,20,20]
    calcularTemperatura(arregloTemperaturas, function(temperaturaMedia, sumaDias){
        console.log( ' la cantidad de dias ingresados fue: ' + sumaDias/2  +' ---//--- La temperatura media fue: ' +temperaturaMedia )
    } )

// Ejercicio 4 - funcion tradicional
function revisarSables(sables){

    let filtro = sables.filter(function(sable){
        return(sable < 0)
    })
    console.log('la cantidad de sables ingresados fueron ' + sables.length+ ' y la cantidad de negativos fueron: ' +filtro.length)
}
arregloSables=[1,2,3,-4,-5]
revisarSables(arregloSables)

// Ejercicio 4 - funcion flecha
let revisarSables = sables =>{

    let filtro = sables.filter(function(sable){
        return(sable < 0)
    })
    console.log('la cantidad de sables ingresados fueron ' + sables.length+ ' y la cantidad de negativos fueron: ' +filtro.length)
}
arregloSables=[1,2,3,-4,-5]
revisarSables(arregloSables)

// Ejercicio 4 - callback

function revisarSables( sables ,secundaria){
    let filtrarSables = sables.filter(function(sable){
            return (sable < 0)
    })
    secundaria(filtrarSables)
}
let arregloSables=[9,8,-5,3,-10,11,-1,17,-58]

revisarSables(arregloSables, function(filtrarSables){
    console.log( 'los sables negativos fueron: ' + arregloSables.length + ' ----//----  la cantidad de sables con energia negativa es: ' +filtrarSables.length)
})



// Ejercicio 5 - funcion tradicional
function calcularSalario(licencias){
    let salario = 3500000
    let comision = 1500000
    let impuestos = 0.95    
    
    return ((salario+(licencias * comision))*impuestos)
}
console.log('El salario total es:' + calcularSalario(1))

// Ejercicio 5 - funcion flecha
calcularSalario1 = licencias => { salario = 3500000 , comision = 1500000, impuestos = 0.95   
    return ( (salario+(licencias * comision))*impuestos)
}
console.log(calcularSalario1(1))



// Ejercicio 6 - funcion tradicional
function principal (nombre, planeta, edad, estatura,secundaria){

    let aprendiz= {
        nombre: nombre,
        planeta: planeta,
        edad: edad,
        estatura: estatura,
        datosCompletos: function(){
            return `\n` + nombre + ' '+ `\n` + planeta + ' ' + `\n` + edad + ' ' +`\n`+ estatura + ' ' + `\n`
        }
    }
        secundaria(aprendiz)
}

    principal('juan', 'tierra', 16, 1.60, function(parametro){  
        if (parametro.edad > 15){
            console.log(parametro.datosCompletos() + "Manejo de la fuerza")
        } else{
            console.log(parametro.datosCompletos() + 'Manejo del sable de luz')
        }
    })


// Ejercicio 6 - funcion flecha
*/
let  principal = (nombre, planeta, edad, estatura, secundaria) => {aprendiz= {
    nombre: nombre,
    planeta: planeta,
    edad: edad,
    estatura: estatura,
    datosCompletos: function(){
        return `\n` + nombre + ' '+ `\n` + planeta + ' ' + `\n` + edad + ' ' +`\n`+ estatura + ' ' + `\n`
    }
}
    secundaria(aprendiz)
}
principal('juan', 'tierra', 16, 1.60, function(parametro){  
    if (parametro.edad > 15){
        console.log(parametro.datosCompletos() + "Manejo de la fuerza")
    } else{
        console.log(parametro.datosCompletos() + 'Manejo del sable de luz')
    }
})

/* 
// Ejercicio 7 - funcion callback
function filtrarPlanos (planos, arrancarNave){
let filtro = planos.filter(function(plano){

    return (planos >= 1 && planos <=10)
})
arrancarNave(filtro)

}

let planos = [1,2,200,300,400,500]
filtrarPlanos(planos, function(filtro){
let cuenta = filtro.length
if(cuenta > 0){
    console.log("arrancando nave")
}
else{
    ("buscando planos")
}

})  */

// https://docs.google.com/spreadsheets/d/1kV7E36zasfPwmEqVxCnO4E8SyV7SBevaP35dZILAOOg/edit?usp=sharing