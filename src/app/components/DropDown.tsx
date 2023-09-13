"use client";
import { useAppSelector } from "@/redux/store";

const DropDown = () => {
  const level = useAppSelector(
    (state) => state.levelReducer.value.dificultyValue
  );

  return (
    <>
      <div className="relative w-full border-none">
        <select
          defaultValue={level}
          name="level"
          className="bg-blue-200 appearance-none text-gray-900 w-full border-none inline-block py-3 pl-3 pr-8 rounded"
        >
          <option value={4}>4 X 4</option>
          <option value={6}>6 X 6</option>
          <option value={8}>8 X 8</option>
        </select>
        <div className="pointer-events-none text-gray-900 absolute inset-y-0 right-0 flex items-center px-2 pb-2">
          &#8964;
        </div>
      </div>
    </>
  );
};

export default DropDown;
