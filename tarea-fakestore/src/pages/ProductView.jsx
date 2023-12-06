import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useReducer } from "react";

const ProductView = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const {id} = useParams(); 

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      const res = await axios.get("https://fakestoreapi.com/products/"+id);
      setData(res.data);
      setLoading(false)
    }

    fetchProduct();
    }, [])

    if(loading) {
    return <h2>loading...</h2>

}


  return (
        <div class="flex flex-col gap-2 p-4 items-center text-black">
            <div class="w-1/2 bg-white p-4 rounded-xl shadow text-center place-content-center">
                <img src={data.image} className="m-auto h-80" />
                <h1 className="text-2xl mb-5 font-bold">
                    {data.title}
                </h1>
                <p className="text-2xl mt-3 font-bold text-amber-800">
                    ${data.price}
                </p>
                <p className="text-xl text-left mt-3">
                    {data.description}
                </p>
            </div>
        </div>
    
  );
};

export default ProductView;