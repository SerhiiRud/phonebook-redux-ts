import { RootState } from "../store";

export const getContacts = (state: RootState) => state.contacts.items;
export const getFilter = (state: RootState) => state.filter;
export const getIsLoading = (state: RootState) => state.contacts.isLoading;
export const getError = (state: RootState) => state.contacts.error;
