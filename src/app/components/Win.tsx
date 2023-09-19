import React from "react";
import Button from "./Button";
import { WinMsgType } from "../types/winMsg.type";

const Win: React.FC<WinMsgType> = ({ onConfirm }) => {
  return (
    <>
      <p className="text-center text-5xl pb-8">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
          You Win!{" "}
        </span>
        🎉
      </p>
      <Button
        type="button"
        name="Play again!"
        classes="cursor-pointer w-3/4 bg-gradient-to-r from-pink-600 to-red-800 hover:from-red-800 hover:to-pink-600 fill-current text-white"
        onClick={onConfirm}
      />
    </>
  );
};

export default Win;
