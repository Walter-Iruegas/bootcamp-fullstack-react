function Imagen() {
    let imagen ="https://picsum.photos/200/300/?blur";
    let imagen2 ="https://picsum.photos/id/870/200/300?grayscale&blur=2";

    //return es la funcion encargada de mostrar el contenido en la pagina
    return (
        <div>
            <p>
                <img src={imagen} alt="photo1"></img>
                <img src={imagen2} alt="photo2"></img>
            </p>
        </div>
    )
}

export default Imagen;