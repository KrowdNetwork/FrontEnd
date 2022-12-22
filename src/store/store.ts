import type { AnyAction, CombinedState } from "@reduxjs/toolkit";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { HYDRATE, createWrapper } from "next-redux-wrapper";

import type { IPointsProps } from "./pointsSlice";
import points from "./pointsSlice";
import type { IProductProps } from "./productSlice";
import product from "./productSlice";

export interface IStoreProps {
  points: IPointsProps;
  product: IProductProps;
}

const combinedReducer = combineReducers({
  points,
  product,
});

const masterReducer = (
  state: CombinedState<IStoreProps> | undefined,
  action: AnyAction
) => {
  if (action.type === HYDRATE) {
    return {
      ...state, // use previous state
      points: {
        totalPoints: state
          ? state.points.totalPoints + action.payload.points.totalPoints
          : "",
      },
      product: {
        product: state ? state.product + action.payload.product : "",
      },
    };
  }
  return combinedReducer(state, action);
};

export const makeStore = () =>
  configureStore({
    reducer: masterReducer,
  });

export const wrapper = createWrapper(makeStore, { debug: true });
