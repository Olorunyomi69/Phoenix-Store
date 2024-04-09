import { Hero } from "../components";
import { useContext, useState } from "react";
import { ProductContext } from "../Contexts/ProductContext";
import Products from "../components/Products";

const Home = () => {
  const { products } = useContext(ProductContext);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ['All', 'men\'s clothing', 'women\'s clothing', 'jewelery', 'electronics'];

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

      const handleCategoryClick = (category) => {
        setSelectedCategory(category);
      };

 

  return (
    <div>
      <Hero />
      <section className="py-16">
        <div className="container mx-auto ">
        <div className="mb-6 ">
        {categories.map(category => (
          <button className="px-2 uppercase text-gray-500 active:text-black-500 active:font-bold font-semibold"
            key={category}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        ))}
      </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {filteredProducts.map((product) => {
              return <Products product={product} key={product.id} />;
            })}
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default Home;
