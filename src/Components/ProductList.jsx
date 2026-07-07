import ProductItem from "./ProductItem";
import { useFetch } from "../Utils/useFetch";
import { Link } from "react-router-dom";

const ProductList = () => {
  const { data, error, loading } = useFetch("https://dummyjson.com/products");
  // let arrOfObj = data.products;
  console.log(data);
  if (!loading) {
    console.log(data.products);
  }

  return (
    <div className="max-w-300 mx-auto px-6 mb-6 max-sm:mt-12">
      <div className="w-full">
        <div className="text-2xl font-semibold mb-6">Trending Products</div>
        <div className="container-sec flex flex-row flex-wrap justify-evenly gap-y-5 max-sm:flex-col max-sm:items-center">
          {!loading &&
            data.products.map((item) => {
              return <ProductItem itemObj={item} key={item.id} />;
            })}
        </div>
      </div>
    </div>
  );
};
export default ProductList;
