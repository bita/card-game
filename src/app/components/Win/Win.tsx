import { WinMsgType } from "@/app/types/winMsg.type";
import Button from "../Shared/Button";

const Win: React.FC<WinMsgType> = ({ onConfirm }) => {
  return (
    <>
      <div className="text-center text-5xl pb-8">
        <p className="pb-4 animate-wiggle">
        🍻
        </p>
        <p className="bg-clip-text animate-[wiggle_1s_ease-in-out_infinite] font-extrabold text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
          You Win!
        </p>
      </div>
      <Button
        type="button"
        name="Play again!"
        classes="cursor-pointer animate-bounce w-3/4 bg-gradient-to-r from-pink-600 to-red-800 hover:from-red-800 hover:to-pink-600 fill-current text-white"
        onClick={onConfirm}
      />
    </>
  );
};

export default Win;
