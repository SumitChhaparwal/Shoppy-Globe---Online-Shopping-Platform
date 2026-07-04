const ProductItem = () => {
  return (
    <>
      <div className="productItem border border-[#ccc] w-68 h-115 flex flex-col items-center rounded-2xl max-sm:w-85">
        <div className=" mb-3 px-15 py-6 bg-gray-100 rounded-tl-2xl rounded-tr-2xl max-sm:px-18">
          <img
            src="https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/1.webp"
            alt="product_image"
            className="h-46"
          />
        </div>
        <div className="w-full">
          <div className="category mx-3 text-sm text-gray-400 mb-1">Frogrance</div>
          <div className="capitalize flex flex-row justify-between mx-3 text-lg font-medium">
            <div className="title text-gray-800">Gucci perfume</div>
            <div className="rating text-[#ffc400]">4.3</div>
          </div>
          <div className="desc text-sm mx-3 line-clamp-2 text-gray-700 mb-1">
            Iusto, voluptatem. Quaerat voluptatibus nam error quo ducimus ex,
            corrupti unde molestias at fugit. Itaque facere expedita totam
            mollitia commodi possimus reiciendis.
          </div>
        </div>
        <div className="price text-lg font-bold text-gray-800 my-2">$13</div>
        <button className="text-md border text-orange-500 bg-white px-8 py-2 hover:bg-orange-500 hover:text-white transition-[background-color] duration-300 ease-out cursor-pointer rounded-md">
          Add to Cart
        </button>
      </div>
    </>
  );
};
export default ProductItem;
