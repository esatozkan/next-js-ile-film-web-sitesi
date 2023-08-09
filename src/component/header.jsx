"use client";
import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import MenuItem from "./menu_item";
import ThemeComponent from "./theme_component";
import { useRouter } from "next/router";

const Header = () => {
  const [keyword, setKeyword] = useState("");
  const router = useRouter;
  const menu = [
    { name: "About", url: "/about" },
    { name: "SignIn", url: "/login" },
  ];
  const searchFunction = (e) => {
    if (e.key === "Enter" && keyword.length >= 3) {
      router.push(`/search/${keyword}`);
      setKeyword('')
    }
  };
  return (
    <div className="flex items-center gap-7 h-20 p-5">
      <div className="bg-amber-600 rounded-lg p-2 text-2xl font-bold">
        MovieApp
      </div>
      <div className="flex flex-1 items-center gap-2 border p-3 rounded-lg">
        <input
        value={keyword}
          onKeyDown={searchFunction}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Arama yapınız!!"
          className="outline-none flex-1 bg-transparent"
          type="text"
        />
        <BiSearch size={25}></BiSearch>
      </div>
      <ThemeComponent />
      {menu.map((mn, i) => (
        <MenuItem mn={mn} key={i} />
      ))}
    </div>
  );
};

export default Header;
