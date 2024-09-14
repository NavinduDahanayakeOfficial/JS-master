"use client";

import Image from "next/image";
import { useState } from "react";
import { Input } from "@/components/ui/input";

const SearchForm = () => {
   const [search, setSearch] = useState("");

   return (
      <div>
         <form className="flex-center mx-auto mt-10 w-full sm:-mt-10 sm:px-5">
            <label className="flex-center relative w-full max-w-3xl">
               <Image
                  src="/magnifying-glass.svg"
                  className="absolute left-8"
                  alt="search icon"
                  width={32}
                  height={32}
               />
               <Input
                  className="base-regular h-fit border-0 bg-black-400 py-6 pl-20 pr-8 text-white !ring-0 !ring-offset-0 placeholder:text-white-800"
                  type="text"
                  placeholder="Search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
               />
            </label>
         </form>
      </div>
   );
};

export default SearchForm;
