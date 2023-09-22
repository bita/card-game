import { useEffect, useState } from "react";
import { useAppSelector } from "@/redux/store";
import { GridType } from "@/app/types/grid.type";

const Grid: React.FC<GridType> = ({ children }) => {
  const diffLevel = useAppSelector((state) => state.settingReducer.value.dificultyValue)
  const [gridClass, setGridClass] = useState('grid-cols-4')
  useEffect(() => {
    setGridClass('grid-cols-' + diffLevel)
  }, [diffLevel])
  
  return (
    <div className="w-full max-w-screen-md mx-auto items-center justify-center cursor-pointer">
      <div data-cy="cards-container" className={`grid ${gridClass} gap-2 my-4 text-center`}>
        {children}
      </div>
    </div>
  );
};

export default Grid;
