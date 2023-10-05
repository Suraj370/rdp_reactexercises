import React, { useContext } from "react";
import { ModalContext } from "../ModalContext";
import Form from "./Form";
import { departments } from "../data";

const Header = () => {
  const [openModal] = useContext(ModalContext);
  return (
    <header className=" p-4 bg-violet-900 flex items-center text-white ">
      <div className="flex-1 flex justify-center font-bold text-lg">
        <h1>My App</h1>
      </div>

      <button
        onClick={() => openModal({
          title: 'Add Employee',
          content: 'This is the content of the modal',
        })}
        className=" px-4 py-2 bg-violet-500"
      >
        {" "}
        Add Employee
      </button>
    </header>
  );
};

export default Header;
