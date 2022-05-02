import React from "react";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";
import {
  FlagIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";

import HeaderIcon from "./HeaderIcon";
function Header() {
  const { data: session } = useSession();
  return (
    <div className="flex items-center   p-2 lg:px-5 lg:py-0  bg-white shadow-md sticky top-0 z-50">
      <div className="flex items-center">
        <Image
          src="/images/fb_icon_325x325.png"
          layout="fixed"
          width={40}
          height={40}
        />
        <div className="flex ml-2 items-center bg-gray-100 rounded-full p-2">
          <SearchIcon className="h-6 text-gray-500" />
          <input
            className="ml-2 bg-transparent outline-none hidden md:inline-flex"
            type="text"
            placeholder="Search Facebook"
          />
        </div>
      </div>
      <div className="flex justify-center flex-grow">
        <div className="flex space-x-6 md:space-x-2">
          <HeaderIcon active Icon={HomeIcon} />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>
      <div className="flex items-center justify-end sm:space-x-2 ">
        <Image
          width="30"
          height="30"
          layout="fixed"
          onClick={signOut}
          className="rounded-full cursor-pointer "
          src={session.user.image}
        />
        <p className="font-semibold hidden lg:inline-flex">
          {session.user.name.split(" ")[0]}
        </p>
        <ViewGridIcon className="icon" />
        <ChatIcon className="icon" />
        <BellIcon className="icon" />
        <ChevronDownIcon className="icon" />
      </div>
    </div>
  );
}

export default Header;
