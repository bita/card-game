import { useAppSelector } from "@/redux/store";
import { GENERAL, themeNameValue } from "../Gameboard/fixtures";

const ThemeDropDown = () => {
  const theme = useAppSelector(
    (state) => state.settingReducer.value.themeValue
  );

  return (
    <>
      <label className="text-left text-white block pb-2 mx-2">
        {GENERAL.THEME}:
      </label>

      <div className="relative w-auto pb-2 border-none mx-2">
        <select
          data-cy="select-theme"
          defaultValue={theme}
          name="theme"
          className="bg-pink-200 appearance-none text-pink-900 w-full border-none inline-block py-3 pl-3 pr-8 rounded"
        >
          {themeNameValue &&
            themeNameValue.map((theme) => (
              <option key={theme.value} value={theme.value}>
                {theme.name}
              </option>
            ))}
        </select>
        <div className="pointer-events-none text-pink-900 absolute inset-y-0 right-0 flex items-center px-2 pb-2">
          &#8964;
        </div>
      </div>
    </>
  );
};

export default ThemeDropDown;
