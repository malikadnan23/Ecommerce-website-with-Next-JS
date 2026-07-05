import { BiHeart, BiShoppingBag, BiUser } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";

const HeaderMain = () => {
  return (
    <div className="border-b border-gray-200 py-6 ">
      <div className="container sm:flex justify-between items-center">
        <div className="font-bold text-4xl text-center pb-4 sm:pb-0 text-blackish">
          Shopora
        </div>
        <div className="w-full sm:w-[300px] md:w-[70%] relative">
          <input className="border-gray-200 border p-2 px-4 rounded-lg w-full outline-0" type="text" placeholder="Search Products" />
         <BsSearch className="absolute right-2 top-2.5 cursor-pointer text-gray-400" size={20} />
        </div>
        <div className="hidden lg:flex gap-4 text-gray-500 text-[30px] items-center ">
          <BiUser className="hover:text-gray-700 cursor-pointer" />
          <div className="relative cursor-pointer ">
            <BiHeart className="hover:text-gray-700 cursor-pointer"/>
            <div className="absolute bg-red-600 rounded-full top-0 right-0 w-[18px] h-[18px] text-[12px] grid place-items-center translate-x-1 -translate-y-1 text-white " >
              0
            </div>
          </div>
          <div className="relative cursor-pointer">
            <BiShoppingBag className="hover:text-gray-700 cursor-pointer"/>
            <div className="absolute bg-red-600 rounded-full top-0 right-0 w-[18px] h-[18px] text-[12px] grid place-items-center translate-x-1 -translate-y-1 text-white " >
              0
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderMain
