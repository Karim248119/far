import React from "react";
import SortMenu from "./SortMenu";

export default function Footer({ data, setData, totalItems, percentage }) {
  return (
    <div className=" absolute w-screen bottom-0">
      <div className="mb-5 flex justify-center items-center gap-5">
        <SortMenu data={data} setData={setData} />
        <button
          onClick={() => setData([])}
          className="rounded-full bg-orange-100 px-5 py-1 font-semibold"
        >
          Clear list
        </button>
      </div>
      <div className="bg-teal-500 h-20 flex justify-center items-center">
        <p className=" text-amber-900 italic font-semibold">
          {!totalItems
            ? "Start adding some items to your packing list"
            : `You have ${totalItems} on your list, and you already pocked ${totalItems} (${Math.round(
                percentage
              )}%)`}
        </p>
      </div>
    </div>
  );
}
