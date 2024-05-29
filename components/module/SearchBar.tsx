import React, { ChangeEvent, FC, useEffect, useState } from "react";
import { products } from "@/data/Localdata";
import { Iproducts } from "@/types/interface";
import Image from "next/image";

const SearchBar: FC = () => {
  const [data] = useState<Iproducts[]>(products);
  const [newData, setNewData] = useState<Iproducts[]>([]);
  const [inputval, setInputVal] = useState<string>("");

  const searchHandler = () => {
    if (inputval.trim() === "") {
      setNewData([]);
      return;
    }

    const filtered = data.filter((item) => item.name.includes(inputval));
    setNewData(filtered);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputVal(value);

    if (value.trim() === "") {
      setNewData([]);
    }
  };

  return (
    <div>
      <div className="w-[500px] p-3 rounded-sm bg-white  flex justify-center">
        <input
          value={inputval}
          onChange={handleInputChange}
          onKeyDown={searchHandler}
          type="text"
          placeholder="نام محصول را وارد کنید"
          className="outline-none p-2 border-[1px] border-blue-400 lg:w-[400px] w-[250px] rounded-lg"
        />
      </div>
      <div
        className={`bg-white transition-all duration-300 ease-in ${
          newData.length >= 1 ? "h-[300px]" : "h-0"
        } overflow-y-scroll ${newData.length <= 0 ? "hidden" : null}`}
      >
        {newData.length > 0
          ? newData.map((item, index) => (
              <div
                key={index}
                className="flex border-b-2 flex-col items-center "
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  width={100}
                  height={100}
                />
                <p>{item.name}</p>
              </div>
            ))
          : inputval && <p>موردی یافت نشد</p>}
      </div>
    </div>
  );
};

export default SearchBar;
