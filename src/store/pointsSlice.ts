/* eslint-disable no-param-reassign */
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export interface IPointsProps {
  totalPoints: number;
}

const initialState: IPointsProps = {
  totalPoints: 50.505,
};

export const pointsSlice = createSlice({
  name: "points",
  initialState,
  reducers: {
    decrementByAmount: (state, action: PayloadAction<number>) => {
      state.totalPoints -= action.payload;
    },
  },
});

export const { decrementByAmount } = pointsSlice.actions;

export default pointsSlice.reducer;
