

function Card() {
    let imagen ="https://picsum.photos/id/237/200/300";

    //return es la funcion encargada de mostrar el contenido en la pagina
    return (
        <div>
            <p>
                <img src={imagen} alt="photo1"></img>
            </p>
        </div>
    )
}

export default Card;