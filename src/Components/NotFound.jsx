import { Link, useRouteError } from "react-router-dom";

const NotFound = () => {
  const errorObj = useRouteError();
  console.log(errorObj);

  return(
    <>
       <div className="w-full">
      <div className="flex flex-col justify-center items-center max-w-150 mx-auto gap-3 border border-[#ccc] rounded-2xl px-7 py-12 mt-[30vh] max-sm:mx-2">
        <h1 className="text-5xl font-bold">
         {errorObj.status} 
        </h1>
        <h3 className="text-4xl font-medium">{errorObj.statusText}</h3>
        <p className="text-xl">
          {errorObj.data}. {" "}
          The requested resource could not found on this server so try different
          route or go back to home page.
        </p>
        <Link to="/">
          <button className="bg-[#ff8001] text-white px-3 py-1 cursor-pointer hover:bg-[#f88d22] transition-all duration-300 ease-in">
            Go to Home
          </button>
        </Link>
      </div>
    </div>
    </>
  );
}
export default NotFound;