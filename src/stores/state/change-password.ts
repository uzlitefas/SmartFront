import { create } from "zustand";

interface ToggleStore {
  PasswordDialog: boolean;
  togglePasswordDialog: () => void;
}

export const usePasswordDialog = create<ToggleStore>((set) => ({
  PasswordDialog: false,
  togglePasswordDialog: () =>
    set((state) => ({ PasswordDialog: !state.PasswordDialog })),
}));
