import ProductItem from "./ProductItem";

const ProductList = () => {
  return (
    <div className="max-w-300 mx-auto px-6 mb-6 max-sm:mt-12">
      <div className="w-full">
        <div className="text-2xl font-semibold mb-6">Trending Products</div>
        <div className="container-sec flex flex-row flex-wrap justify-between gap-y-5 max-sm:flex-col max-sm:items-center">
          <ProductItem/>
          <ProductItem/>
          <ProductItem/>
          <ProductItem/>
        </div>
      </div>
    </div>
  );
};
export default ProductList;
