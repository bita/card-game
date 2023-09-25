import { useAppSelector } from "@/redux/store";
import { GENERAL, LEVELS } from "../Gameboard/fixtures";

const DifficultyDropDown = () => {
  const level = useAppSelector(
    (state) => state.settingReducer.value.dificultyValue
  );

  return (
    <>
      <label className="text-left text-white block pb-2 mx-2">
        {GENERAL.DIFFICULTY_LEVEL}:
      </label>

      <div className="relative w-auto pb-4 border-none mx-2">
        <select
          data-cy="select-level"
          defaultValue={level}
          name="level"
          className="bg-pink-200 appearance-none text-pink-900 w-full border-none inline-block py-3 pl-3 pr-8 rounded"
        >
          {LEVELS &&
            LEVELS.map((level) => {
              return (
                <option key={level.value} value={level.value}>
                  {level.name}
                </option>
              );
            })}
        </select>
        <div className="pointer-events-none text-pink-900 absolute inset-y-0 right-0 flex items-center px-2 pb-2">
          &#8964;
        </div>
      </div>
    </>
  );
};

export default DifficultyDropDown;
