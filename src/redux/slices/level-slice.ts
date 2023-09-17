import { initialDiffcultyLevelType } from "@/app/types/difficultyLevel";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: initialDiffcultyLevelType = {
    value: {
        dificultyValue: 4,
    }
}

export const level = createSlice({
    name: "level",
    initialState,
    reducers: {
        changeDifficulty: (state, action: PayloadAction<number>) => {
            return {
                value: {
                    dificultyValue: action.payload
                }
            }
        }
    }

})

export const { changeDifficulty } = level.actions;
export default level.reducer;
