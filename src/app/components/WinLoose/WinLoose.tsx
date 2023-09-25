import { WinLooseMsgType } from "@/app/types/WinLooseMsg.type";
import Button from "../Shared/Button";
import { BUTTONS, GENERAL, MSGS, WIN_STATUS } from "../Gameboard/fixtures";

const WinLooseMsg: React.FC<WinLooseMsgType> = ({
  onConfirm,
  time,
  moves,
  status,
}) => {
  const win = status === WIN_STATUS ? true : false;

  return (
    <>
      <div className="text-center text-5xl pb-8">
        <p className="pb-4 animate-wiggle">{win ? `🍻` : `💩`}</p>
        <p className="bg-clip-text animate-[wiggle_1s_ease-in-out_infinite] font-extrabold text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
          {win ? MSGS.YOU_WIN : MSGS.YOU_LOSE}
        </p>
        <p className="text-sm text-pink-300 pt-3">
          {win ? MSGS.GAME_FINISHED : MSGS.GAME_NOT_FINISHED}
        </p>
        <div className="grid grid-cols-2 text-sm text-pink-100 pt-3">
          <div>
            {GENERAL.TIME_SPENT}: {time}
          </div>
          <div>
            {GENERAL.YOUR_MOVES}: {moves}
          </div>
        </div>
      </div>
      <Button
        type="button"
        name={BUTTONS.PLAY_AGIAN}
        classes="cursor-pointer animate-bounce w-3/4 bg-gradient-to-r from-pink-600 to-red-800 hover:from-red-800 hover:to-pink-600 fill-current text-white"
        onClick={onConfirm}
      />
    </>
  );
};

export default WinLooseMsg;
