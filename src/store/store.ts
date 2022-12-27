import type { Action, AnyAction, ThunkAction } from "@reduxjs/toolkit";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createWrapper, HYDRATE } from "next-redux-wrapper";

import type { IPointsProps } from "./pointsSlice";
import pointsReducer from "./pointsSlice";
import type { IProductProps } from "./product/productSlice";
import productReducer from "./product/productSlice";

export interface IStoreProps {
  points: IPointsProps;
  product: IProductProps;
}

const combinedReducer = combineReducers({
  points: pointsReducer,
  product: productReducer,
});

export const reducer = (
  state: ReturnType<typeof combinedReducer>,
  action: AnyAction
) => {
  if (action.type === HYDRATE) {
    return {
      ...state,
      ...action.payload,
    };
  }
  return combinedReducer(state, action);
};

export const makeStore = () =>
  configureStore({
    reducer: combinedReducer,
  });

type Store = ReturnType<typeof makeStore>;

export type AppDispatch = Store["dispatch"];
export type RootState = ReturnType<Store["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export const storeWrapper = createWrapper(makeStore, { debug: true });
