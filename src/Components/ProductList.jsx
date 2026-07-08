import ProductItem from "./ProductItem";
import { useFetch } from "../Utils/useFetch";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductList = () => {
  const { data, error, loading } = useFetch("https://dummyjson.com/products");

  let searchArr = useSelector((store) => store.cart.searchArr);

  return (
    <div className="max-w-300 mx-auto px-6 mb-6 max-sm:mt-12">
      <div className="w-full">
        <div className="text-2xl font-semibold mb-6">
          {searchArr.length !== 0 ? "Searched Products:" : "Trending Products"}
        </div>
        <div className="container-sec flex flex-row flex-wrap justify-evenly gap-y-5 max-sm:flex-col max-sm:items-center">
          {!loading &&
            (searchArr.length
              ? searchArr.map((item) => {
                  return <ProductItem itemObj={item} key={item.id} />;
                })
              : data.products.map((item) => {
                  return <ProductItem itemObj={item} key={item.id} />;
                }))}
        </div>
      </div>
    </div>
  );
};
export default ProductList;
