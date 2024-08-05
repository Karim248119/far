import React, { useState } from "react";
import Dropdown from "./Dropdown";

export default function Nav({ data, setData, checked, setChecked }) {
  const [selectedOption, setSelectedOption] = useState(1);
  const [inputValue, setInputValue] = useState("");

  const AddItem = () => {
    const item = {
      time: new Date().toISOString(),
      name: inputValue,
      option: selectedOption,
      checked: checked,
    };
    setData([...data, item]);
    setInputValue("");
    setSelectedOption(1);
    setChecked(false);
  };

  return (
    <div>
      <div className=" w-screen h-20 bg-orange-400 flex justify-center items-center">
        <h1 className="font-bold text-4xl">FAR AWAY</h1>
      </div>
      <div className=" w-screen py-2 bg-orange-600 flex justify-center items-center xl:flex-row flex-col gap-5">
        <p>What do you need for your trip?</p>
        <div className="flex justify-center items-center md:gap-5 gap-2">
          <Dropdown
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />
          <input
            name="name"
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="rounded-full bg-orange-100 px-3 py-1 focus:outline-none"
          />
          <button
            onClick={() => AddItem()}
            className="bg-teal-500 px-5 py-1 rounded-full"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
