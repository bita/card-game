import { useDispatch } from "react-redux";
import DropDown from "./DropDown";
import { changeDifficulty } from "@/redux/slices/level-slice";
import { AppDispatch } from "@/redux/store";
import { FormEvent, useEffect } from "react";
import Button from "./Button";

const DifficultyForm: React.FC<{onSubmitClicked: () => void;}> = ({onSubmitClicked}) => {
  const dispatche = useDispatch<AppDispatch>();
   
  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const level = formData.get("level");
    if (level !== null) {
      dispatche(changeDifficulty(+level));
      onSubmitClicked();
    }
  };

  return (
    <form data-cy="difficulty" onSubmit={submitHandler}>
      <DropDown />
      <Button classes="bg-pink-500 text-white my-4 w-1/2 float-right" type="submit" name="Save" />
    </form>
  );
};

export default DifficultyForm;
