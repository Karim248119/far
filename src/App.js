import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import ItemsViewer from "./components/ItemsViewer";
import { TbUvIndex } from "react-icons/tb";

function App() {
  const initialItems = JSON.parse(localStorage.getItem("items")) || [];

  const [data, setData] = useState(initialItems);
  const [checked, setChecked] = useState(false);

  const checkedItems = data.filter((item) => item.checked).length;
  const totalItems = data.length;
  const percentage = (checkedItems / totalItems) * 100;

  const handleCheck = (index) => {
    const newData = [...data];
    newData[index].checked = !newData[index].checked;
    setChecked(!checked);
  };

  const deleteItem = (index) => {
    const newData = data.filter((_, i) => i !== index);
    setData(newData);
  };

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(data));
  }, [data, checked]);
  return (
    <div className="App h-screen w-screen bg-amber-900 text-xs md:text-base">
      <Nav
        data={data}
        setData={setData}
        checked={checked}
        setChecked={setChecked}
      />
      <ItemsViewer
        data={data}
        handleCheck={handleCheck}
        checked={checked}
        setChecked={setChecked}
        deleteItem={deleteItem}
      />
      <Footer
        data={data}
        setData={setData}
        percentage={percentage}
        totalItems={totalItems}
        checkedItems={totalItems}
      />
    </div>
  );
}

export default App;
