import { CardType } from "../types/card.type";

const Card: React.FC<CardType> = ({children, className}) => {
    
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
};

export default Card;
