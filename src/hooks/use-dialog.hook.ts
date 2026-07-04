// src/store/useDialogStore.ts

import type { ReactNode } from "react";
import { create } from "zustand";

interface DialogState {
	isOpen: boolean;
	children: ReactNode | null;
	openDialog: (children: ReactNode) => void;
	closeDialog: () => void;
}

export const useDialogStore = create<DialogState>((set) => ({
	isOpen: false,
	children: null,
	openDialog: (children) => set({ isOpen: true, children }),
	closeDialog: () => set({ isOpen: false, children: null }),
}));
