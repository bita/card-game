import { ButtonType } from "@/app/types/button.type";

const Button: React.FC<ButtonType> = ({ onClick, type, name, classes }) => {
  const clickHandler = () => {
    onClick!();
  };
  const buttonClass =`${
    classes ? classes : "bg-red-800 hover:bg-indigo-500"
  } transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 m-1 g-font p-2 md:p-4 text-sm text-white rounded-md shadow-sm shadow-gray-800`

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
