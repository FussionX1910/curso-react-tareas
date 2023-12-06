import { useEffect, useState } from "react";
import ProductItem from "../components/ProductItem";
import { useCartContext } from "../context/CartContext";

const Cart = () => {
    const [total, setTotal] = useState(0);
    const {
      state: { cart },
    } = useCartContext();
    
    useEffect(() => {
      const calculateTotal = () => {
        const cartTotal = cart.reduce(
          (acc, product) => acc + parseFloat(product.price),
          0
        );
        setTotal(cartTotal.toFixed(2));
      };

      calculateTotal();
    }, [cart]);

    return (
        <div className="flex flex-col text-black">
            <h1 className="text-2xl mb-5 font-bold">Carrito</h1>
            <span className="text-black mb-5"> Total de la compra: <strong>${total}</strong></span>
            <ul className="flex flex-col gap-2">
                {cart.map((product) => (
                    <ProductItem product={product} key={product.id}/>
                )) }
            </ul>
        </div>
    )
}

export default Cart