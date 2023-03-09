"use client"; // this is a client component
import React, { FC, memo, useState } from "react";

interface DropdownProps {
  options: any[];
  selectedOption: string;
  onSelectOption: (option: string) => void;
  className: string;
}

const Dropdown: FC<DropdownProps> = memo((props) => {
  const { options, selectedOption, onSelectOption } = props;

  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option: string) => {
    onSelectOption(option);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <div className="" onClick={() => setIsOpen(!isOpen)}>
          <span>Clubs</span>
        </div>
      </div>
      {isOpen && (
        <div className="absolute z-10 mt-1 w-full rounded-md bg-white shadow-lg">
          <ul className="max-h-60 rounded-md py-1 overflow-auto">
            {options.map((option) => (
              <li
                key={option}
                className={`${
                  option === selectedOption
                    ? "bg-indigo-100 text-indigo-900"
                    : "text-gray-700"
                } cursor-pointer select-none relative py-2 pl-3 pr-9`}
                onClick={() => handleOptionClick(option)}
              >
                <div className="flex items-center space-x-2">
                  <span
                    className={`font-normal block truncate ${
                      option === selectedOption
                        ? "font-semibold"
                        : "font-normal"
                    }`}
                  >
                    {option.name}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
});

export default Dropdown;
