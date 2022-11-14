import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const dept = [
  { name: "Radience" },
  { name: "ceasda" },
  { name: "Lorem" },
  { name: "Ipsum" },
  { name: "dolor" },
  { name: "amet" },
];

const Selector = () => {
  //   const [countries, setCountries] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [selected, setSelected] = useState("");
  const [open, setOpen] = useState(false);

  //   useEffect(() => {
  //     fetch("https://restcountries.com/v2/all?fields=name")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setCountries(data);
  //       });
  //   }, []);
  return (
    <div className="lg:px-10 w-full font-medium sticky z-20 inset-x-0 top-16">
      <div
        onClick={() => setOpen(!open)}
        className={`backdrop-blur-xl bg-black/70 text-white font-spaceGrotesk text-lg w-full p-2 flex items-center justify-between ${
          !selected && "text-white"
        }`}
      >
        {selected
          ? selected?.length > 25
            ? selected?.substring(0, 25) + "..."
            : selected
          : "All"}
        <ChevronDownIcon
          className={`${open ? "rotate-180 h-7" : "h-7"} `}
        ></ChevronDownIcon>
      </div>
      <ul
        className={`backdrop-blur-xl bg-black/70 text-white overflow-y-auto ${
          open ? "max-h-60" : "max-h-0"
        } `}
      >
        <div className="flex items-center px-2 sticky top-0 backdrop-blur-xl bg-black/70 text-white"></div>
        {dept?.map((country) => (
          <li
            key={country?.name}
            className={`p-2 text-sm hover:bg-lime-400 hover:text-white
            ${
              country?.name?.toLowerCase() === selected?.toLowerCase() &&
              "bg-sky-600 text-white"
            }
            ${
              country?.name?.toLowerCase().startsWith(inputValue)
                ? "block"
                : "hidden"
            }`}
            onClick={() => {
              if (country?.name?.toLowerCase() !== selected.toLowerCase()) {
                setSelected(country?.name);
                setOpen(false);
                setInputValue("");
              }
            }}
          >
            {country?.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Selector;
