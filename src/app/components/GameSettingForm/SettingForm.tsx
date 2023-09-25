import { useDispatch } from "react-redux";
import { changeDifficulty, changeTheme } from "@/redux/slices/setting-slice";
import { AppDispatch } from "@/redux/store";
import { FormEvent } from "react";
import Button from "../Shared/Button";
import DifficultyDropDown from "./DifficultyDropDown";
import ThemeDropDown from "./ThemeDropDown";
import { BUTTONS } from "../Gameboard/fixtures";

const SettingForm: React.FC<{ onSubmitClicked: () => void }> = ({
  onSubmitClicked,
}) => {
  const dispatche = useDispatch<AppDispatch>();

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const level = formData.get("level");
    const theme = formData.get("theme");
    if (level !== null) {
      dispatche(changeDifficulty(+level));
      onSubmitClicked();
    }
    if (theme !== null) {
      dispatche(changeTheme(theme as string));
    }
    onSubmitClicked();
  };

  return (
    <div className="my-4 max-w-lg mx-auto">
      <form data-cy="difficulty" onSubmit={submitHandler}>
        <DifficultyDropDown />
        <ThemeDropDown />
        <Button
          classes="bg-pink-500 text-white my-4 w-1/4 float-right"
          type="submit"
          name={BUTTONS.SAVE}
        />
      </form>
    </div>
  );
};

export default SettingForm;
