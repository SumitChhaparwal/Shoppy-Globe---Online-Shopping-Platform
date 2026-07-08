import { Link } from "react-router-dom";
import { RiSearchLine } from "react-icons/ri";
import { BiUser } from "react-icons/bi";
import { CgShoppingCart } from "react-icons/cg";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { updateTerm } from "../Utils/cartSlice";
import { useFetch } from "../Utils/useFetch";

const Header = () => {
  const { data, error, loading } = useFetch("https://dummyjson.com/products");

  //accessing cartItems state from redux store 
  let cartCount = useSelector((store) => store.cart.countItems);
  console.log(cartCount);

  const dispatch = useDispatch();

  let searchQuery = useSelector((store) => store.cart.searchTerm);

  let searchArr = useSelector((store) => store.cart.searchArr);

  let productArr = !loading && data.products;

  function handleSQuery(e) {
    if (e.key === "Enter") {
      let newArr = productArr.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()),
      );

      let mergeArr = searchArr.length ? [...newArr, ...searchArr] : [...newArr];

      //Removing duplicate array items by id
      const unquieArr = mergeArr.filter((item, index, arr) => {
        return index === arr.findIndex((obj) => obj.id === item.id);
      });
      
      //Dispatching action to update searchCount state..
      newArr && dispatch(updateTerm(unquieArr));
      if (newArr.length === 0) {
        newArr = productArr.filter((item) =>
          item.category.toLowerCase().includes(searchQuery.toLowerCase()),
        );
        newArr && dispatch(updateTerm(newArr));
      }
      e.target.value = "";
    }
  }

  return (
    <>
      <header>
        <nav className="flex flex-row justify-around border-b border-gray-300 items-center h-15">
          <div className="logo box-border mt-3">
            <span className="text-lg font-bold uppercase">Shoppy</span>
            <br />
            <span className="ml-7 text-sm relative bottom-2.5 text-orange-500">
              Globe
            </span>
          </div>
          <div className="searchBar flex flex-row items-center gap-2 bg-gray-100 px-4 py-1.5 w-[40vw] max-sm:w-50 rounded-3xl max-sm:py-2 border border-[#e9e9e927]">
            <span className="icon text-lg">
              <RiSearchLine />
            </span>
            <input
              type="text"
              placeholder="Search a product.."
              className="focus:outline-none text-md"
              onChange={(e) => dispatch(updateTerm(e.target.value))}
              onKeyDown={handleSQuery}
            />
          </div>
          <div className="last-sec flex flex-row gap-3 lg:gap-9 items-center relative">
            <div className="profile text-xl lg:text-2xl">
              <BiUser />
            </div>
            <div className="cart text-xl lg:text-2xl flex justify-center items-center cursor-pointer">
              <Link to="/cart">
                <CgShoppingCart />
                {cartCount !== 0 && (
                  <span className="text-[10px] font-semibold bg-orange-500 text-white w-3 h-3.5 text-center rounded-2xl absolute -top-1 -right-1.5">
                    {cartCount}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};
export default Header;
