import React, { useState } from "react";
import { FaAngleUp } from "react-icons/fa";

const SortMenu = ({ data, setData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const sortbyInputOrder = () => {
    setSelectedOption("Sort by input order");
    const sortedData = [...data].sort(
      (a, b) => new Date(a.time) - new Date(b.time)
    );
    setData(sortedData);
    setIsOpen(false);
  };

  const sortItemsByCheckedStatus = () => {
    setSelectedOption("sort by packed status");
    const sortedData = [...data].sort((a, b) => a.checked - b.checked);
    setData(sortedData);
    setIsOpen(false);
  };

  const sortItemsByName = () => {
    setSelectedOption("Sort by description");
    const sortedData = [...data].sort((a, b) => a.name.localeCompare(b.name));
    setData(sortedData);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-center">
      <button
        className=" capitalize font-semibold flex justify-center items-center gap-1 w-full border border-gray-300 shadow-sm px-3 py-1 bg-orange-100 rounded-full    hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
        onClick={toggleDropdown}
      >
        {selectedOption ? selectedOption : "Select an option"}
        <FaAngleUp />
      </button>

      {isOpen && (
        <ul className=" z-10 text-xs origin-bottom-right absolute left-0 bottom-full mb-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <li
            className="cursor-pointer hover:bg-gray-100 py-2  text-gray-700"
            onClick={() => sortbyInputOrder()}
          >
            Sort by input order
          </li>
          <li
            className="cursor-pointer hover:bg-gray-100 py-2  text-gray-700"
            onClick={() => sortItemsByName()}
          >
            Sort by description
          </li>
          <li
            className="cursor-pointer hover:bg-gray-100 py-2  text-gray-700"
            onClick={() => sortItemsByCheckedStatus()}
          >
            sort by packed status
          </li>
        </ul>
      )}
    </div>
  );
};

export default SortMenu;
