import { useEffect, useState } from "react";
import { GridType } from "../types/grid.type";
import { useAppSelector } from "@/redux/store";

const Grid: React.FC<GridType> = ({ children }) => {
  const diffLevel = useAppSelector((state) => state.levelReducer.value.dificultyValue)
  const [gridClass, setGridClass] = useState('grid-cols-4')
  useEffect(() => {
    setGridClass('grid-cols-' + diffLevel)
  }, [diffLevel])
  
  return (
    <div className="w-full max-w-screen-md mx-auto items-center justify-center cursor-pointer">
      <div data-cy="cards-container" className={`grid ${gridClass} gap-1 my-4 text-center`}>
        {children}
      </div>
    </div>
  );
};

export default Grid;
