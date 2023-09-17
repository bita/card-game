import { ButtonType } from "../types/button.type";

const Button: React.FC<ButtonType> = ({ onClick, type, name, classes }) => {
  const clickHandler = () => {
    onClick!();
  };
  const buttonClass = `m-1 g-font bg-red-900 p-3 mb-10 text-sm text-white rounded-md shadow-sm shadow-gray-800 ${
    classes ? classes : ""
  }`;

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
