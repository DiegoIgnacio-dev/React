import React from 'react'

export const SegundoComponente = () => {
    const libros=[
        "Harry Potter",
        "Juego De Tronos",
        "El cementerio De los libros Olvidados",
        "El cementerio de los Animales"
    ]
  
    return (
    <div>
        {/* Mapear un array usando map :esta forma no es 100% recomendada*/}
        <h3>Lista de Libros</h3>
        
        <ul>
            { /*libros.map((el)=>(
                <li>{el}</li>
            ))*/}

        </ul> 
        <hr></hr>
        <h3> Lista de libros con key</h3>
        {libros.length >= 1 ?(

         <ul>
                {

                    libros.map((libro,indice)=>{
                        return <li key={indice}>{libro}</li>
                    })
                
                }

         </ul>
        )
         :(
         <p> No Hay libros disponibles</p>
         )
        }
    </div>
  )
}
