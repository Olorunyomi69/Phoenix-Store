import { useContext } from "react"
import { useParams } from "react-router-dom"
import { CartContext } from "../Contexts/CartContext"
import { ProductContext } from "../Contexts/ProductContext"
const ProductDetails = () => {
  const { id } = useParams();
  const {products} = useContext(ProductContext);
  const {addToCart} = useContext(CartContext);
  
  const product = products.find(product => product.id === parseInt(id));
  


  if (!product) {
    return (
      <div className="dots-container pt-32 pb-12 lg:py-32 h-screen">
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
    </div>
    )
  } 

  const {title, description, price, image} = product;
  if(product)
 { return (
    <div className="pt-32 pb-12 lg:py-32 h-screen flex items-center">
        <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row items-center gap-8">
      <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0">
          <img className="max-w-[200px] lg:max-w-sm"src={image} alt={title}/>
        </div>
        <div className="flex-2 text-center lg:text-left">
        <h1 className="text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0">{title}</h1>
        <div className="text-xl font-medium mb-6 ">${price}</div>
        <p className="mb-8">{description}</p>
        <button onClick={()=>addToCart(product,product.id)} className="mt-8 ml-5 w-[180px] py-3 rounded-md shadow-2xl bg-[#5cdb95]  origin-center transition-all duration-300 active:translate-y-2">Add to cart</button>
        </div>
      </div>

        </div>
    </div>
  )}
}

export default ProductDetails