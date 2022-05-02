import React from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";

function InputBox() {
  const { data: session } = useSession();
  const sendPost = (e) => {
    e.preventDefault();
    console.log("send post");
  };
  return (
    <div className="bg-white rounded-2xl shadow-md mt-6 text-gray-500 font-medium">
      <div className="flex space-x-4 p-4 items-center">
        <Image
          className="rounded-full"
          src={session.user.image}
          width={40}
          height={40}
          layout="fixed"
        />
        <form className="flex flex-1">
          <input
            className=" flex-grow rounded-full h-12 bg-gray-100 focus:outline-none px-5"
            type="text"
            placeholder={`What's on your mind, ${session.user.name}`}
          />
          <input
            className="hidden"
            onClick={sendPost}
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    </div>
  );
}

export default InputBox;
