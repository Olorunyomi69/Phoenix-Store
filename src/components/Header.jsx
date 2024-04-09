import { useContext, useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { SidebarContext } from "../Contexts/SidebarContext";
import { CartContext } from "../Contexts/CartContext";
import ShoppingBagRoundedIcon from "@mui/icons-material/ShoppingBagRounded";
const Header = () => {
  const [isActive, setIsActive] = useState(false)
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount} = useContext(CartContext);

  useEffect(() =>{
    window.addEventListener('scroll', () =>{
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false)
    })
  })

  return (
    <header className={`${isActive ? 'bg-sky-50 py-4 shadow-md' : 'bg-blue-200 py-6' } fixed w-full z-10 transition-all`}>
      <div className="container mx-auto flex item-center justify-between h-full">
        <Link to={"/"}>
          <div>
            <h1 className="text-3xl font-bold">Phoenix Store</h1>
          </div>
        </Link>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer flex relative "
        >
          <ShoppingBagRoundedIcon />
          <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
            {itemAmount}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
