import { ButtonType } from "../types/button.type";

const Button: React.FC<ButtonType> = ({ onClick, type, name, classes }) => {
  const clickHandler = () => {
    onClick!();
  };

  return (
    <button
      type={type}
      onClick={clickHandler}
      className={`${classes ? classes: ''} m-1 g-font bg-red-900 p-3 mb-10 text-sm rounded-md shadow-sm shadow-gray-800`}>
      {name}
    </button>
  );
};

export default Button;