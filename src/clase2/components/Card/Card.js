//importciones
//Son funciones especialesque te permiten agregar caracteristicas adicionales, coo estado y efectos secundarios, a tus componentes funcionales de manera más sencilla y sin necesidad de usar clases.
//Los hooks hacen que el código sea más legible, mantenible y escalable en comparación con las clases, y son una parte fundamental de la programación en React.
import React, {useState} from 'react'
import './card.css' 

const dummyString = `Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. `;

//para acceder a varias porps hay poner la llaves {}
 const Card = ({BGImage, creationDate, cardTitle, metaData}) => {
    console.log(creationDate)
    console.log(BGImage)
    //Parte logica de la app van los hooks
    //declaracion y suo de hooks
    /*-message: Es la variable de estado que almacena el valor actual del estado.
      -setMessage: Es una función que se utiliza para actualizar el valor del estado. Puede tomar un nuevo valor como argumento y actualiza el estado en el componente.
      -useState('valor inicial'): Es el valor inicial del estado cuando se monta el componente. Puede ser cualquier tipo de dato, como un número, una cadena, un objeto o un arreglo.*/
    const [title, setMessage] = useState(cardTitle);
    const [text, setNewMessage] = useState(dummyString);

    //leer valores de los props que vienen de un ojeto
    const {company} = metaData;

    //Crear evento con onClick y realizar la funcion
    //Crear fucniones auxiliares
    //con setMessage para hcaer el cambio con el vento onClick del valor inicial de useState("")
    const changeCardTitle = () => {
        const messages_data = ['titulo', 'titulo2', '3', '2', '1'];
        const randomTitle = Math.floor(Math.random() * (messages_data.length - 1));
        const newTitle = messages_data[randomTitle]; 
        //console.log(newTitle);
        setMessage(newTitle);
    }

    const changeCardText = () => {
        setNewMessage('GREAT!!!');
    }

    return (
        <div className="card">
            <div className="card_copy">
            <img src={BGImage} alt="Foto de Robin Hood" />
            </div>
            <div>
                <h1>{title}</h1>
                
                <h2>{creationDate}</h2>

                <p>
                {text}
                </p>

                <p>
                    <h5>MetaData</h5>
                    author: {metaData.author}
                </p>
                <p>
                    company: {company}
                </p>
                


                <button onClick={changeCardTitle}>Cambiar titulo</button>
                <button onClick={changeCardText}>Cambiar texto</button>
            </div>
        </div>
    )
 }

export default Card;
