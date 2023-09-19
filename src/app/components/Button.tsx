import { ButtonType } from "../types/button.type";

const Button: React.FC<ButtonType> = ({ onClick, type, name, classes }) => {
  const clickHandler = () => {
    onClick!();
  };
  const buttonClass =`${
    classes ? classes : "bg-red-800"
  } m-1 g-font p-3 mb-10 text-sm text-white rounded-md shadow-sm shadow-gray-800`

  return type === "button" ? (
    <button data-cy="button" type={type} onClick={clickHandler} className={buttonClass}>
      {name}
    </button>
  ) : (
    <button data-cy="submit" type={type} className={buttonClass}>
      {name}
    </button>
  );
};

export default Button;
