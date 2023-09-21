import { TitleComponentType } from "@/app/types/title.type";
import React from "react";

const Title: React.FC<TitleComponentType> = ({ title, subTitle }) => {
  return (
    <>
      <div className="text-5xl pb-2">
        <h1
          data-cy="title"
          className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500"
        >
          {title}
        </h1>
      </div>
      <h3 className="pb-8 text-xs">{subTitle}</h3>
    </>
  );
};

export default Title;
