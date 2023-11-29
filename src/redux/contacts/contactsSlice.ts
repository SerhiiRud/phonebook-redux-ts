import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchContacts, addContact, removeContact } from "./operations";
import { RootState } from "../store";
import {
  TContact,
  TInitialState,
  IHandleRejected,
  IHandlePending,
  IHandleFetchContacts,
  IHandleAddContact,
  IHandleRemoveContact,
} from "../../interfaces/Contacts.interface";

const handlePending: IHandlePending = (state: RootState["contacts"]) => {
  state.isLoading = true;
};

const handleRejected: IHandleRejected = (
  state: RootState["contacts"],
  action: PayloadAction<Error>
) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handleFetchContacts: IHandleFetchContacts = (
  state: RootState["contacts"],
  action: PayloadAction<TContact[]>
) => {
  state.isLoading = false;
  state.error = null;
  state.items = action.payload;
};

const handleAddContact: IHandleAddContact = (
  state: RootState["contacts"],
  action: PayloadAction<TContact>
) => {
  state.isLoading = false;
  state.error = null;
  state.items = [...state.items, action.payload];
};

const handleRemoveContact: IHandleRemoveContact = (
  state: RootState["contacts"],
  action: PayloadAction<TContact>
) => {
  state.isLoading = false;
  state.error = null;
  state.items = state.items.filter(
    (contact: TContact) => contact.id !== action.payload.id
  );
};

const initialState: TInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, handleFetchContacts)
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, handleAddContact)
      .addCase(addContact.rejected, handleRejected)
      .addCase(removeContact.pending, handlePending)
      .addCase(removeContact.fulfilled, handleRemoveContact)
      .addCase(removeContact.rejected, handleRejected),
});

export const contactsReducer = contactsSlice.reducer;
