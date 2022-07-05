//importar modulos de react
import React from "react";

//funcion o componente
/* formato funcion tradicional
function MiComponente(){

    return
}
*/
const MiComponente = () =>{
    let nombre = "Diego";
    let web = "Diego.com"
    const dias=["Lunes","Martes","Miercoles","Jueves","Viernes"]
    let Usuario={
        nombre:"Diego",
        apellido:"Avila",
        edad:26,
        direccion:"Osorno"
    }

    return <div>
        <h1>Este es un curso de react</h1>
        <p>este es un componente</p>
        <h3>Datos del usuario</h3>
        <ul>
            <li>Nombre: {nombre}</li>
            <li>Web Page: {web}</li>
        </ul>
        <ul>
            <li>Inicio</li>
            <li>Informacion</li>
            <li>Acerca De</li>
        </ul>
        <h3>{JSON.stringify(Usuario)}</h3>
        <ul>
            <li>Name:{Usuario.nombre}</li>
            <li>LastName:{Usuario.apellido}</li>
            <li>Age:{Usuario.edad}</li>
            <li>Addres:{Usuario.direccion}</li>
        </ul>
        <hr></hr>
        <ul>
            {dias.map((el)=>(

                <li>{el}</li>
            ))}
        </ul>
        <hr></hr>
        </div>
}
//export
//se usa default cuando solo vamos a devolver una sola funcion

export default MiComponente;