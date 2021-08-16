const ImageComponent = (props) =>{
    return(
        <img className="image" src={props.images} alt={props.alt}></img>
    )
}
export default ImageComponent;