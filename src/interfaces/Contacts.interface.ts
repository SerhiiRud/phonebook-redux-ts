import { PayloadAction } from "@reduxjs/toolkit";
//import { RootState } from "../redux/store";

export type TContact = {
  id: string;
  name: string;
  number: string;
};

export type TInitialState = {
  items: TContact[];
  isLoading: boolean;
  error: null | Error;
};

export interface IHandlePending {
  (state: TInitialState): void;
}

export interface IHandleRejected {
  (state: TInitialState, action: PayloadAction<any>): void;
}

export interface IHandleFetchContacts {
  (state: TInitialState, action: PayloadAction<TContact[]>): void;
}

export interface IHandleAddContact {
  (state: TInitialState, action: PayloadAction<TContact>): void;
}

export interface IHandleRemoveContact {
  (state: TInitialState, action: PayloadAction<TContact>): void;
}
