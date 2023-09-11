import { ButtonType } from "../types/button.type";

const Button: React.FC<ButtonType> = ({ onClick, type, name, classes }) => {
  const clickHandler = () => {
    onClick!();
  };

  return (
    <button
      type={type}
      onClick={clickHandler}
      className={`${classes ? classes: ''} g-font bg-red-900 p-4 mb-10 rounded-md shadow-sm shadow-gray-800`}>
      {name}
    </button>
  );
};

export default Button;