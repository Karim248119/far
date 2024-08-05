import React from "react";
import { FaCheckSquare, FaRegCheckSquare } from "react-icons/fa";
import { TiDeleteOutline } from "react-icons/ti";

export default function ItemsViewer({ data, handleCheck, deleteItem }) {
  return (
    <div className="w-[90%] h-24  mx-auto flex justify-between items-center overflow-x-scroll gap-16 mt-20 ">
      {data.map((item, index) => (
        <div
          key={index}
          className="font-semibold text-white flex gap-2
        "
        >
          <button onClick={() => handleCheck(index)}>
            {item.checked ? (
              <FaCheckSquare className=" text-orange-600" />
            ) : (
              <FaRegCheckSquare />
            )}
          </button>
          <h2>{item.option}</h2>
          <p className="text-nowrap">{item.name}</p>
          <button onClick={() => deleteItem(index)}>
            <TiDeleteOutline className=" text-red-600" />
          </button>
        </div>
      ))}
    </div>
  );
}
