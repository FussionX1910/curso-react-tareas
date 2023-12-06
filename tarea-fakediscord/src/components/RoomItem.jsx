import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

const RoomItem = ({room}) => {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        alert("Entrar a sala de chat" )
    }

    return (<div className="bg-orange-400 p-5">
        <span className="text-center font-bold cursor-pointer" onClick={handleAddToCart}>{room.name}</span>
      </div>)
}

export default RoomItem;