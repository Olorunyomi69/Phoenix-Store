import { useContext } from "react";
import { Link } from "react-router-dom"
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import { CartItem } from "../components";
import { SidebarContext } from "../Contexts/SidebarContext";
import { CartContext } from "../Contexts/CartContext";

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, clearCart, total } = useContext(CartContext);
  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      } w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20  px-4 lg:px-[35px]`}
    >
      <div className="flex items-center justify-between py-6 border-b">
        <div className="uppercase text-sm font-semibold ">Shopping Bag(0)</div>
        <div className="cursor-pointer w-8 h-8 flex justify-center items-center">
          <ArrowForwardRoundedIcon onClick={handleClose} />
        </div>
      </div>
      <div className="flex flex-col gap-y-2 h-[520px] lg:h-[640px] overflow-y-auto border-b overflow-x-hidden">
        {cart.map((item) => {
          return <CartItem item={item} key={item.id} />;
        })}
      </div>
      <div className="flex flex-col gap-y-3 py-4 mt-4">
        <div className="flex w-full justify-between items-center ">
          <div className="uppercase font-semibold">
            <span className="mr-2">Total:</span> {`$ ${total.toFixed(2)}`}
          </div>
          <div
            onClick={clearCart}
            className="cursor-pointer text-white py-4 bg-red-500 w-12 h-12 flex justify-center items-center text-xl"
          >
            <DeleteRoundedIcon />
          </div>
        </div>
          <Link to="/" className="flex p-4 justify-center bg-neutral-900 text-white items-center rounded-lg w-full font-medium">CheckOut</Link>
      </div>
    </div>
  );
};

export default Sidebar;
