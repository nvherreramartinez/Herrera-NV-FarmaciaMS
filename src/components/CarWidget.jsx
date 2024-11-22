import { Badge } from "react-bootstrap";
import { IoCart } from "react-icons/io5";

const CartWidget = ({counter}) => {
    return(
        <div>
            <IoCart fontSize={'1.8rem'} color="white"/>
            <Badge bg="info">15</Badge>
            <p className="cartCounter">{counter}</p>
        </div>
    )
}

export default CartWidget