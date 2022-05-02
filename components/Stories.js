import React from "react";
import StoryCard from "./StoryCard";

const stories = [
  {
    name: "Arun Jsr",
    src: "/images/arun_src.jpg",
    profile: "/images/arun_profile.jpg",
  },
  {
    name: "Tata Technologies APAC",
    src: "/images/ttl_src.jpg",
    profile: "/images/ttl_profile.jpg",
  },
  {
    name: "National Geographic",
    src: "/images/geo_src.jpg",
    profile: "/images/geo_profile.jpg",
  },
];

function Stories() {
  return (
    <div className="flex justify-start space-x-3">
      {stories.map((story, index) => (
        <StoryCard
          key={index}
          name={story.name}
          src={story.src}
          profile={story.profile}
        />
      ))}
    </div>
  );
}

export default Stories;
