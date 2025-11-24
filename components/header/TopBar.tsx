import { getAllDates } from "@/utils/utils";
import { CiSearch } from "react-icons/ci";
import Logo from "../ui/Logo";
function TopBar() {
  return (
    <div className="container mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center px-5 py-4 gap-4">
      {/* Logo */}
      <div className="flex justify-center sm:justify-start flex-shrink-0 w-full sm:w-auto">
        <Logo />
      </div>

      {/* Right Section: Date above Search */}
      <div className="flex flex-col w-full sm:w-auto gap-2">
        {/* Date */}
        <p className="font-solaiman font-normal text-gray-700 text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px] leading-relaxed text-center sm:text-left">
          {getAllDates()}
        </p>

        {/* Search */}
        <div className="mt-2 sm:mt-[20px] w-full sm:w-[380px] sm:ms-auto">
          <div className="flex w-full">
            <input
              type="text"
              placeholder="যা খুঁজতে চান"
              className="flex-1 border border-gray-300 rounded-l-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent"
            />
            <button className="bg-gray-500 text-white px-4 py-2 rounded-r-md hover:bg-gray-600 transition flex items-center justify-center">
              <CiSearch size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
