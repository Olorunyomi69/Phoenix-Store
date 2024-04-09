import { useContext } from "react"
import { Link } from "react-router-dom"
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import {CartContext} from "../Contexts/CartContext"

const Cartitem = ({ item }) => {
  const { removeFromCart, increaseAmount, decreaseAmount } = useContext(CartContext);
  const {id, price, title, image, amount } = item
  return (
    <div className="flex py-2 gap-x-4 lg:px-6 border border-gray-200 w-full font-light text-gray-500">
      <div className="w-full min-h-[150px] flex items-center gap-x-4">
       <div>
       <Link to= {`/product/${id}`} >
       <img className="max-w-[80px]" src={image} alt={title}/>
       </Link>
       </div>
       <div className="w-full flex flex-col">
       <div className="flex justify-between mb-2">
        <Link to= {`/product/${id}`} className="text-sm uppercase font-medium max-w-[240px] hover:underline ">{title}</Link>
       <div   onClick={()=>removeFromCart(id)}  className="text-xl cursor-pointer">
        <CloseRoundedIcon className="text-gray-500 hover:text-red-500 transition"/>
       </div>
       </div>
       <div className="  flex gap-x-2 h-[36px] text-sm">
        <div className="flex flex-1 max-w-[100px] items-center h-full border font-medium">
        <div onClick={()=> {decreaseAmount(id)}} className="flex-1 flex justify-center items-center cursor-pointer h-full">

          <RemoveRoundedIcon/>
        </div>
          <div className="h-full flex justify-center items-center px-2 ">{amount}</div>
          <div onClick={()=> {increaseAmount(id)}} className="flex-1 h-full flex justify-center items-center cursor-pointer" >

            <AddRoundedIcon/>
</div>
        </div>

        <div className="flex-1 flex items-center justify-around ">${price}</div>

        <div className="flex-1 flex justify-end items-center font-medium">{`$ ${(price * amount).toFixed(2)}`}</div>
       </div>
       </div>
      </div>
    </div>
  )
}

export default Cartitem