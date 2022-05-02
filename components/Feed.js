import React from "react";
import InputBox from "./InputBox";
import Stories from "./Stories";

function Feed() {
  return (
    <div className="flex-grow h-screen pb-44 pt-6 mr-4 xl:mr-40 overflow-y-auto">
      <div className="max-w-md md:max-w-lg mx-auto">
        <Stories />
        <InputBox />
      </div>
    </div>
  );
}

export default Feed;
