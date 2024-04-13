import { useContext } from "react";
import { Link } from "react-router-dom"
import { CartContext } from "../Contexts/CartContext"

import AddRoundedIcon from "@mui/icons-material/AddRounded";


const Products = ({ product }) => {
  const {addToCart  } = useContext(CartContext)
  const { title, image, category, price, id } = product;
  return (
    <div>
      <div className="border bg-[#fcfcf7] rounded-3xl h-[300px] mb-4 relative overflow-hidden group transition">
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-[200px] mx-auto flex justify-center items-center">
            <img
              className="max-h-[160px] group-hover:scale-110 transition duration-300"
              src={image}
              alt={title}
            />
          </div>
        </div>
        <div className=" hidden group-hover:block absolute top-0 right-0 bg-emerald-200 p-2 hover:bg-peach">
          <button onClick={() => addToCart(product, id)}>
            <div className="flex justify-center items-center w-12 h-12">
              <AddRoundedIcon />
            </div>
          </button>
        </div>
      </div>

      <div>
        <div className="text-gray-500 text-sm">{category}</div>
       <Link to={`/product/${id}`}> <h2 className="font-semibold mb-1">{title}</h2></Link>
        <div className="font-semibold">${price}</div>
      </div>
    </div>
  );
};

export default Products;
