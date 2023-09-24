import { GameDetailType } from "@/app/types/gameDetail.type";
import { useAppSelector } from "@/redux/store";

const GameBoardInfo: React.FC<GameDetailType> = ({ moves }) => {
  const diffLevel = useAppSelector(
    (state) => state.settingReducer.value.dificultyValue
  );

  const theme = useAppSelector(
    (state) => state.settingReducer.value.themeValue
  );

  return (
    <div className="flex flex-wrap justify-center flex-row pb-1 mt-8 border-b border-gray-800 text-sm w-full max-w-screen-md mx-auto">
      <div className="border border-1 border-pink-400 p-2 me-2 mb-2 w-1/3 md:w-1/5">
        Moves: <br />
        <span data-cy="moves">{moves}</span>
      </div>
      {/* Score */}
      <div className="border border-1 border-pink-500 p-2 me-2 mb-2 w-1/3 md:w-1/5">
        Last Score:
        <br /> <span data-cy="score">0</span>
      </div>
      {/* Score */}
      <div className="border border-1 border-violet-400 p-2 me-2 mb-2 w-1/3 md:w-1/5">
        Level:
        <br /> <span data-cy="level">{diffLevel}X{diffLevel}</span>
      </div>
      <div className="border border-1 border-purple-400 p-2 me-2 mb-2 w-1/3 md:w-1/5">
        Theme: <br />
        <span data-cy="theme">{theme}</span>
      </div>
    </div>
  );
};

export default GameBoardInfo;
