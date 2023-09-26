import { scoreType } from "@/app/types/score.type";
import React from "react";
import { GENERAL, LEVELS, MSGS, WIN_STATUS } from "../Gameboard/fixtures";

const ScoreBoard: React.FC<{ scores: scoreType[] }> = ({ scores }) => {
  const showTable = scores.length > 0;

  return (
    <>
      {showTable ? (
        <>
          <div className="grid grid-cols-5 pt-2">
            <div>#</div>
            <div>{GENERAL.LEVEL}</div>
            <div>{GENERAL.TIME}</div>
            <div>{GENERAL.THEME}</div>
            <div>{GENERAL.MOVES}</div>
          </div>
          <hr className="border-b-1 border-pink-500" />
          {scores.map((item, i) => {
            return (
              <div key={i} className="grid grid-cols-5 pt-2">
                <div>{i + 1}</div>

                {LEVELS &&
                  LEVELS.map((level) => {
                    if (level.value === +item.level) {
                      return <div key={level.value}>{level.name}</div>;
                    }
                  })}

                <div>{item.time}</div>
                <div>{item.moves}</div>
                <div
                  className={`${
                    item.status === WIN_STATUS
                      ? `text-green-500`
                      : `text-red-500`
                  }`}
                >
                  {item.status}
                </div>
              </div>
            );
          })}
        </>
      ) : (
        <div>{MSGS.NO_SCORES_AVAILABLE}</div>
      )}
    </>
  );
};

export default ScoreBoard;
