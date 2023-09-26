import { GameDetailType } from "@/app/types/gameDetail.type";
import { useAppSelector } from "@/redux/store";
import { GENERAL, LEVELS, themeNameValue } from "../Gameboard/fixtures";
import { getLastScoreStatus } from "../Gameboard/helper";

const GameBoardInfo: React.FC<GameDetailType> = ({ moves }) => {
  const diffLevel = useAppSelector(
    (state) => state.settingReducer.value.dificultyValue
  );

  const theme = useAppSelector(
    (state) => state.settingReducer.value.themeValue
  );
  const lastScoreStatus = getLastScoreStatus()?.status;

  return (
    <div className="flex flex-wrap justify-center flex-row pb-1 mt-8 border-b border-gray-800 text-sm w-full max-w-screen-md mx-auto">
      <div className="border border-1 border-pink-400 p-2 me-2 mb-2 w-1/3 md:w-1/5">
        {GENERAL.MOVES}: <br />
        <span data-cy="moves">{moves}</span>
      </div>
      {/* Score */}
      <div className="border border-1 border-pink-500 p-2 me-2 mb-2 w-1/3 md:w-1/5">
        {GENERAL.LAST_SCORE}:
        <br />{" "}
        <span data-cy="score">{lastScoreStatus ? lastScoreStatus : "-"}</span>
      </div>
      {/* Score */}
      <div className="border border-1 border-violet-400 p-2 me-2 mb-2 w-1/3 md:w-1/5">
        {GENERAL.LEVEL}:
        <br />{" "}
        {LEVELS &&
          LEVELS.map((l) => {
            if (l.value === diffLevel) {
              return (
                <span data-cy="level" key={l.value}>
                  {l.name}
                </span>
              );
            }
          })}
      </div>
      <div className="border border-1 border-purple-400 p-2 me-2 mb-2 w-1/3 md:w-1/5">
        {GENERAL.THEME}: <br />
        {themeNameValue.map((t) => {
          if (t.value === theme) {
            return (
              <span data-cy="theme" key={t.value}>
                {t.name}
              </span>
            );
          }
        })}
      </div>
    </div>
  );
};

export default GameBoardInfo;
