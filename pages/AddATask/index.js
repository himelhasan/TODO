import { BiPlus } from "react-icons/bi";
import { initFirebase } from "../../firebase/firebase.config";

const AddATask = () => {
  return (
    <div>
      <div className="container mt-20">
        <form className="flex items-center md:w-[60%] md:mx-auto ">
          <div className="group relative transition-all w-full">
            <input
              type="text"
              className="group bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="  Add Task"
              required
            />
            <BiPlus className="text-gray-400 text-3xl absolute top-[6px] left-2" />

            <button className=" group-hover:flex hidden absolute items-center top-2 right-5 transition-all">
              <span className="text-gray-500 mr-3">Upload image</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="black"
                className="bi bi-arrow-bar-up"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M8 10a.5.5 0 0 0 .5-.5V3.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 3.707V9.5a.5.5 0 0 0 .5.5zm-7 2.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5z"
                />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddATask;