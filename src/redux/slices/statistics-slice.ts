import { GameDetailType } from "@/app/types/gameDetail.type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    value: [{}]
};

export const statistics = createSlice({
  name: "statistics",
  initialState,
  reducers: {
    addStatisctis: (state, action: PayloadAction<GameDetailType>) => {
      // state.value.push({
      //   // diffLevel: action.payload.diffLevel,
      //   // moves: action.payload.moves,
      //   // score: action.payload.score,
      // });
    },
  },
});

export const { addStatisctis } = statistics.actions;
export default statistics.reducer;
