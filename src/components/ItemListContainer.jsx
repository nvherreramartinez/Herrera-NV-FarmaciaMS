import App from "../App"

const ItemListContainer = ({greeting, texto}) => {
    return(
        <div>
            <h1>{greeting}</h1>
            <p>{texto}</p>
        </div>
    )
}
export default ItemListContainer
